import { useLenis } from "@/hooks/useLenis";
import { useSEO } from "@/hooks/use-seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generateSEOConfig } from "@/lib/seo";

export const seoConfig = generateSEOConfig({
  title: "Terms & Conditions | Backero Private Limited",
  description:
    "Read the terms and conditions governing the use of Backero Private Limited's website and services.",
  keywords: "Backero terms and conditions, terms of use, legal terms",
  url: "https://backero.in/terms-conditions",
});

const TermsAndConditions = () => {
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
                Terms &amp; Conditions
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
                  1. Acceptance of Terms
                </h2>
                <p>
                  These Terms and Conditions ("Terms") govern your use of the
                  website <span className="whitespace-nowrap">backero.in</span>{" "}
                  operated by Backero Private Limited ("Backero", "we", "us",
                  or "our"), CIN U72900TZ2020PTC034030, registered at No.42,
                  Interflex Complex, Near 5K Carcare, Trichy Road, Sulur,
                  Coimbatore 641402, India. By accessing or using our website,
                  you agree to be bound by these Terms. If you do not agree,
                  please do not use our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  2. Services Described
                </h2>
                <p>
                  Our website provides information about Backero's cosmetic
                  manufacturing, R&D, private label, and brand development
                  services. Content on the website is for general
                  informational purposes and does not constitute a binding
                  offer. Any manufacturing or supply arrangement is subject to
                  a separate signed agreement between Backero and the client.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  3. Intellectual Property
                </h2>
                <p>
                  All content on this website, including text, graphics,
                  logos, images, and formulations referenced, is the property
                  of Backero Private Limited or its licensors and is
                  protected by applicable intellectual property laws. You may
                  not reproduce, distribute, or create derivative works
                  without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  4. Enquiries and Quotes
                </h2>
                <p>
                  Submitting an enquiry or quote request through our contact
                  form does not create a contractual relationship. Pricing,
                  minimum order quantities, and lead times mentioned on the
                  website are indicative and subject to confirmation by our
                  team.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  5. User Conduct
                </h2>
                <p>
                  You agree not to use our website for any unlawful purpose,
                  to transmit harmful code, or to attempt unauthorized access
                  to our systems or data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  6. Third-Party Links
                </h2>
                <p>
                  Our website may link to third-party sites, including our
                  brand websites. We are not responsible for the content,
                  accuracy, or practices of any linked third-party site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  7. Limitation of Liability
                </h2>
                <p>
                  Backero shall not be liable for any indirect, incidental, or
                  consequential damages arising from your use of this
                  website, to the fullest extent permitted by applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  8. Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of India, and any
                  disputes shall be subject to the exclusive jurisdiction of
                  the courts in Coimbatore, Tamil Nadu.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  9. Changes to These Terms
                </h2>
                <p>
                  We may revise these Terms at any time. Continued use of the
                  website after changes are posted constitutes acceptance of
                  the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  10. Contact Us
                </h2>
                <p>
                  For any questions regarding these Terms, please contact us
                  at{" "}
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

export default TermsAndConditions;
