import { useEffect } from "react";
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
import { organizationSchema, addJSONLDScript } from "@/lib/seo";

const Index = () => {
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
      telephone: "+91-XXXX-XXXX-XX",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "India",
      },
      areaServed: ["IN"],
      priceRange: "$$",
    };
    addJSONLDScript(localBusinessSchema, "local-business-schema");
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
