import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import AchievementsSection from "@/components/AchievementsSection";
import StorySection from "@/components/StorySection";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import {
  organizationSchema,
  addJSONLDScript,
  generateRequestQuoteSchema,
} from "@/lib/seo";

const Index = () => {
  useLenis();

  useEffect(() => {
    // Add Organization Schema
    addJSONLDScript(organizationSchema, "org-schema");

    // Add BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://backero.in",
        },
      ],
    };
    addJSONLDScript(breadcrumbSchema, "breadcrumb-schema");

    // Add LocalBusiness Schema for better local SEO
    const localBusinessSchema = {
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
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
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
    addJSONLDScript(localBusinessSchema, "local-business-schema");

    // Add Request Quote Action Schema for lead generation
    addJSONLDScript(generateRequestQuoteSchema(), "request-quote-schema");
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <ServicesSection />
        <BrandsSection />
        <AchievementsSection />
        <StorySection />
        <ValuesSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
