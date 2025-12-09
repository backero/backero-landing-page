import aboutImage from "@/assets/about-section.jpg";
import { Building2, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h2 className="text-primary mb-6">
              About Backero Private Limited
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2020, Backero Private Limited is an emerging technology-driven company operating in 
              the field of digital innovation, e-commerce, and product development. Initially registered under 
              "Computer and Related Activities," we have since expanded to multiple domains including marketplace 
              management, brand building, product research, and Q-commerce enablement.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Backero is the parent company behind Treyfa, India's first cancer-free cosmetics brand, focused on 
              delivering premium, research-backed beauty products at affordable prices. Our commitment to safety, 
              innovation, and transparency drives our mission to revolutionize the personal care industry.
            </p>
            
            {/* Company Details */}
            <div className="bg-muted rounded-xl p-6 mb-6">
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
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Parimala Gnana Soundari</p>
                  <p className="text-sm text-muted-foreground">Director</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">SuryaRaj</p>
                  <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Backero team working in a modern workspace"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
