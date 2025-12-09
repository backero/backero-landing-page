import parimalaImage from "@/assets/parimala.png";
import suryarajImage from "@/assets/suryaraj.jpeg";
const AboutSection = () => {
  return <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-primary mb-6">
            About Backero Private Limited
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
            Founded in 2020, Backero Private Limited is a complete cosmetics solution provider—from production 
            to export, serving both B2B and B2C markets. We are the parent company behind Treyfa and Kymarie, 
            India's first cancer-free cosmetics brands, focused on delivering premium, research-backed beauty 
            products at affordable prices.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our commitment to safety, innovation, and transparency drives our mission to revolutionize the 
            personal care industry through Ayurvedic heritage combined with modern science.
          </p>
        </div>

        {/* Company Details */}
        <div className="bg-muted rounded-xl p-6 mb-12 max-w-2xl mx-auto slide-up" style={{
        animationDelay: "0.1s"
      }}>
          <p className="text-sm text-muted-foreground mb-2">
            <strong className="text-foreground">CIN:</strong> U72900TZ2020PTC034030
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            <strong className="text-foreground">Incorporation Date:</strong> July 7, 2020
          </p>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Registered Address:</strong> No.101/1A4, Kovilyagappanpatti, 
            Thamaraipadi, Dindigul, Tamil Nadu, 624005, India
          </p>
        </div>

        {/* Leadership */}
        <div className="text-center mb-8 slide-up" style={{
        animationDelay: "0.2s"
      }}>
          <h3 className="text-2xl font-bold text-foreground mb-2">Our Leadership</h3>
          <p className="text-muted-foreground">Visionaries driving innovation in clean beauty</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center slide-up" style={{
          animationDelay: "0.3s"
        }}>
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <img src={parimalaImage} alt="Parimala Gnana Soundari - Founder" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-1">Parimala Gnana Soundari</h4>
            <p className="text-primary font-medium mb-3">Founder</p>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Pioneering the vision of cancer-free cosmetics in India, committed to delivering safe and effective beauty solutions.
            </p>
          </div>

          <div className="text-center slide-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/20 shadow-xl">
              <img src={suryarajImage} alt="Suriyaraj - Managing Director" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-1">Suryaraj</h4>
            <p className="font-medium mb-3 text-primary">Managing Director</p>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Leading operations and strategic growth, driving Backero's mission from production to global export.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;