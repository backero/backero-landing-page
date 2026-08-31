import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface HashLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/**
 * Renders a same-page hash link (e.g. "#about") as a plain <a> while already on
 * "/" (preserves existing Lenis smooth-scroll), or as a react-router <Link> to
 * "/#about" when on any other route (e.g. "/products") so it navigates home
 * first, then jumps to the section. A real route like "/products" is always a
 * <Link> regardless of current location.
 */
export function HashLink({ href, children, ...rest }: HashLinkProps) {
  const { pathname } = useLocation();
  const isRoute = href.startsWith("/") && !href.startsWith("/#");

  if (isRoute) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (pathname !== "/") {
    return (
      <Link to={`/${href}`} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
