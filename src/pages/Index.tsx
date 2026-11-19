import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ManufacturingSection from "@/components/ManufacturingSection";
import CertificationsSection from "@/components/CertificationsSection";
import BrandsSection from "@/components/BrandsSection";
import AchievementsSection from "@/components/AchievementsSection";
import StorySection from "@/components/StorySection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { updateJSONLDScript } from "@/lib/seo";

// Organization, BreadcrumbList, and RequestQuoteAction schemas are already
// present statically in index.html (visible to crawlers that don't run JS).
// LocalBusiness has no static equivalent, so it's exported here and also
// injected statically at build time by scripts/prerender.mjs; the id-matched
// updateJSONLDScript() call below just keeps it in sync, not duplicated.
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Backero Private Limited",
  image: "https://backero.in/logo.png",
  description:
    "Research-driven cosmetics manufacturing company specializing in contract manufacturing, R&D, and brand development",
  url: "https://backero.in",
  telephone: "+91-89034-12061",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.42, Interflex Complex, Near 5K Carcare",
    addressLocality: "Sulur",
    addressRegion: "Tamil Nadu",
    postalCode: "641402",
    addressCountry: "IN",
  },
  areaServed: ["IN"],
  priceRange: "$$",
  businessHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  potentialAction: {
    "@type": "RequestQuoteAction",
    name: "Request a custom manufacturing quote",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://backero.in/#contact",
    },
  },
};

const Index = () => {
  useLenis();

  useEffect(() => {
    updateJSONLDScript(localBusinessSchema, "local-business-schema");
  }, []);

  // Arriving here via a "/#section" link from another page (e.g. /products) lands
  // on "/" with a hash already in the URL — jump to it once Lenis has initialized,
  // since Lenis's own scroll setup can otherwise reset the viewport to the top.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <ServicesSection />
        <ManufacturingSection />
        <CertificationsSection />
        <BrandsSection />
        <AchievementsSection />
        <StorySection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
