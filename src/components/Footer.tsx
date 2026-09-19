import { Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import backeroLogo from "@/assets/backero-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Our Journey", href: "#story" },
      { label: "Awards", href: "#achievements" },
    ],
    Services: [
      { label: "Manufacturing & R&D", href: "#services" },
      { label: "Brand Development", href: "#services" },
      { label: "Private Label", href: "#services" },
    ],
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/backero",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/backero",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:backeroindia@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={backeroLogo} alt="Backero" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
              Research-driven cosmetic and personal care company specializing in
              advanced formulations, contract manufacturing, and brand
              development support.
            </p>
            <a
              href="mailto:backeroindia@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
            >
              backeroindia@gmail.com
            </a>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Brands */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.treyfa.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Treyfa
                </a>
              </li>
              <li>
                <a
                  href="#brands"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kumarie
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Partner With Us
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar — full address/CIN already live in the Contact section above;
            this is just the legally-conventional CIN line, kept compact. */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Backero Private Limited. All rights reserved.
            <span className="hidden sm:inline"> · CIN: U72900TZ2020PTC034030</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Research · Manufacturing · Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
