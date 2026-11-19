import { useLenis } from "@/hooks/useLenis";
import { useSEO } from "@/hooks/use-seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generateSEOConfig } from "@/lib/seo";

export const seoConfig = generateSEOConfig({
  title: "Privacy Policy | Backero Private Limited",
  description:
    "Read Backero Private Limited's privacy policy to understand how we collect, use, and protect your personal information.",
  keywords: "Backero privacy policy, data protection, personal information",
  url: "https://backero.in/privacy-policy",
});

const PrivacyPolicy = () => {
  useLenis();
  useSEO(seoConfig);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-gradient-to-b from-muted/40 to-background">
          <div className="container-custom">
            <AnimatedSection className="max-w-2xl">
              <div className="eyebrow">
                <span className="eyebrow-text">Legal</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.12] mb-5">
                Privacy Policy
              </h1>
              <p className="text-[1.0625rem] text-muted-foreground leading-relaxed">
                Last updated: November 19, 2026
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container-custom">
            <AnimatedSection className="max-w-3xl prose-content space-y-8 text-foreground/90 leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  1. Introduction
                </h2>
                <p>
                  Backero Private Limited ("Backero", "we", "us", or "our"),
                  CIN U72900TZ2020PTC034030, registered at No.42, Interflex
                  Complex, Near 5K Carcare, Trichy Road, Sulur, Coimbatore
                  641402, India, is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website{" "}
                  <span className="whitespace-nowrap">backero.in</span> or
                  contact us regarding our cosmetics manufacturing, R&D, and
                  brand development services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  2. Information We Collect
                </h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>
                    <strong>Contact details</strong> you provide through our
                    enquiry or contact forms, such as name, email address,
                    phone number, company name, and message content.
                  </li>
                  <li>
                    <strong>Usage data</strong> such as pages visited, time
                    spent on the site, browser type, and device information,
                    collected automatically through analytics tools.
                  </li>
                  <li>
                    <strong>Cookies and similar technologies</strong> used to
                    improve site functionality and understand visitor
                    behaviour.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to enquiries and quote requests</li>
                  <li>
                    To communicate about our products, services, and
                    partnership opportunities
                  </li>
                  <li>To improve our website and user experience</li>
                  <li>
                    To comply with legal, regulatory, and contractual
                    obligations
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  4. Sharing of Information
                </h2>
                <p>
                  We do not sell your personal information. We may share
                  information with trusted service providers who assist us in
                  operating our website, conducting business, or servicing
                  you, provided those parties agree to keep this information
                  confidential. We may also disclose information when
                  required by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  5. Data Security
                </h2>
                <p>
                  We implement reasonable administrative, technical, and
                  physical safeguards to protect your personal information.
                  However, no method of transmission over the internet is
                  completely secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  6. Data Retention
                </h2>
                <p>
                  We retain personal information only for as long as
                  necessary to fulfil the purposes outlined in this policy,
                  unless a longer retention period is required by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  7. Your Rights
                </h2>
                <p>
                  You may request access to, correction of, or deletion of
                  your personal information held by us by contacting us using
                  the details below.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  8. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites,
                  including our brand sites. We are not responsible for the
                  privacy practices or content of such third-party sites.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  9. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with a revised "Last
                  updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  10. Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy, please
                  contact us at{" "}
                  <a
                    href="mailto:backeroindia@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    backeroindia@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+918903412061"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    +91 89034 12061
                  </a>
                  .
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
