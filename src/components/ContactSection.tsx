import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Factory,
  Lightbulb,
  Truck,
  Send,
} from "lucide-react";

const enquiryTypes = [
  { icon: Factory, label: "Manufacturing Partnerships" },
  { icon: Lightbulb, label: "Brand Development Support" },
  { icon: Truck, label: "Distribution Opportunities" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Contact Us
          </span>
          <h2 className="text-primary mb-3">Let's Talk Business</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Fill in the form and we'll get back to you within{" "}
            <span className="font-semibold text-foreground">24 hours</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Info Card */}
            <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
              <h3 className="text-lg font-bold text-foreground">
                Backero Private Limited
              </h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Address
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    No.42, Interflex Complex, Near 5K Carcare,
                    <br />
                    Trichy Road, Sulur,
                    <br />
                    Coimbatore – 641402
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:backeroindia@gmail.com"
                    className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    backeroindia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20Backero%2C%20I%27d%20like%20to%20discuss%20a%20manufacturing%20partnership."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <div>
                <div className="text-sm font-bold">Chat on WhatsApp</div>
                <div className="text-xs opacity-80">
                  Quick response guaranteed
                </div>
              </div>
            </a>

            {/* Business Enquiry Types */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
                Business Enquiries
              </h4>
              <div className="space-y-3">
                {enquiryTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">
                      {type.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CIN Info */}
            <div className="text-xs text-muted-foreground space-y-1 px-1">
              <p>
                <span className="font-semibold">CIN:</span>{" "}
                U72900TZ2020PTC034030
              </p>
              <p>
                <span className="font-semibold">Incorporated:</span> July 7,
                2020
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Your Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Enquiry Type *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="manufacturing">
                        Manufacturing Partnership
                      </option>
                      <option value="brand">Brand Development Support</option>
                      <option value="distribution">
                        Distribution Opportunities
                      </option>
                      <option value="private-label">
                        Private Label Enquiry
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, product idea, or partnership opportunity..."
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map Embed — pins Interflex Complex, Sulur */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="Backero Private Limited — Interflex Complex, Sulur, Coimbatore"
                src="https://maps.google.com/maps?q=Interflex+Complex+Trichy+Road+Sulur+Coimbatore+641402&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
