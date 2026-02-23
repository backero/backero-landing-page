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
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <ServicesSection />
        <BrandsSection />
        <AchievementsSection />
        <StorySection />
        <ValuesSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
