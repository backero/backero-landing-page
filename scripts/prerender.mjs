// Runs after `vite build` + `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
// Renders each known route to real HTML and writes it as a static dist/<route>/index.html,
// so crawlers that don't execute JavaScript (GPTBot, ClaudeBot, PerplexityBot, and the first
// pass of most search bots) see actual page content and correct per-page <title>/meta/canonical
// instead of an empty <div id="root"> and the homepage's tags on every route.
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const ssrEntry = path.join(distDir, "..", "dist-ssr", "entry-server.js");

const {
  render,
  productsSeoConfig,
  productsCollectionSchema,
  privacyPolicySeoConfig,
  termsSeoConfig,
  localBusinessSchema,
  faqSchema,
} = await import(`${pathToFileUrl(ssrEntry)}`);

function pathToFileUrl(p) {
  return `file://${p.replace(/\\/g, "/")}`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setTag(html, regex, replacement) {
  if (regex.test(html)) return html.replace(regex, replacement);
  return html.replace("</head>", `  ${replacement}\n</head>`);
}

function applyHead(html, seo) {
  let out = html;
  out = setTag(out, /<title>.*?<\/title>/s, `<title>${escapeHtml(seo.title)}</title>`);
  out = setTag(
    out,
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`
  );
  out = setTag(
    out,
    /<meta name="keywords"[^>]*>/,
    `<meta name="keywords" content="${escapeHtml(seo.keywords)}" />`
  );
  out = setTag(
    out,
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${seo.url}" />`
  );
  out = setTag(
    out,
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${seo.url}" />`
  );
  out = setTag(
    out,
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`
  );
  out = setTag(
    out,
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`
  );
  out = setTag(
    out,
    /<meta name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`
  );
  out = setTag(
    out,
    /<meta name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`
  );
  return out;
}

function injectJSONLD(html, schemas) {
  const scripts = schemas
    .map(
      ([id, data]) =>
        `  <script type="application/ld+json" id="${id}">${JSON.stringify(data)}</script>`
    )
    .join("\n");
  return html.replace("</head>", `${scripts}\n</head>`);
}

function injectBody(html, bodyHtml) {
  return html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
}

async function writeRoute(routePath, html) {
  const outPath =
    routePath === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, routePath.slice(1), "index.html");
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf8");
  console.log(`  wrote ${path.relative(rootDir, outPath)}`);
}

async function main() {
  const template = await readFile(path.join(distDir, "index.html"), "utf8");

  const routes = [
    {
      path: "/",
      extraSchemas: [
        ["local-business-schema", localBusinessSchema],
        ["faq-schema", faqSchema],
      ],
    },
    {
      path: "/products",
      seo: productsSeoConfig,
      extraSchemas: [["products-schema", productsCollectionSchema]],
    },
    { path: "/privacy-policy", seo: privacyPolicySeoConfig },
    { path: "/terms-conditions", seo: termsSeoConfig },
  ];

  for (const route of routes) {
    const bodyHtml = render(route.path);
    let html = injectBody(template, bodyHtml);
    if (route.seo) html = applyHead(html, route.seo);
    if (route.extraSchemas) html = injectJSONLD(html, route.extraSchemas);
    await writeRoute(route.path, html);
  }

  await rm(path.join(distDir, "..", "dist-ssr"), { recursive: true, force: true });
  console.log("Prerender complete.");
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
