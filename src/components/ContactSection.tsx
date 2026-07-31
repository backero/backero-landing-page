import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

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
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Contact Us
          </span>
          <h2 className="text-primary mb-3">Let's Talk Business</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Fill in the form and we'll get back to you within{" "}
            <span className="font-semibold text-foreground">24 hours</span>.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mt-3">
            For fast manufacturing quotes and product development partnerships,
            use the form, email, or WhatsApp chat and our team will reply quickly.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection className="lg:col-span-2 space-y-6" direction="left">
            {/* Company Info Card */}
            <div className="bg-card rounded-2xl border border-border p-6 space-y-5 card-depth">
              <h3 className="text-lg font-bold text-foreground">
                Backero Private Limited
              </h3>

              <StaggerContainer className="space-y-5" delay={0.1}>
                <motion.div variants={staggerItemVariants} className="flex items-start gap-3">
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
                </motion.div>

                <motion.div variants={staggerItemVariants} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:backeroindia@gmail.com"
                      className="text-sm text-primary hover:text-primary/80 transition-colors font-medium link-underline"
                    >
                      backeroindia@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={staggerItemVariants} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+918903412061"
                      className="text-sm text-primary hover:text-primary/80 transition-colors font-medium link-underline"
                    >
                      +91 89034 12061
                    </a>
                  </div>
                </motion.div>
              </StaggerContainer>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/918903412061?text=Hi%20Backero%2C%20I%27d%20like%20to%20discuss%20a%20manufacturing%20partnership."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-green-500 text-white font-semibold px-6 py-4 rounded-xl"
              whileHover={{
                scale: 1.02,
                y: -3,
                backgroundColor: "#16a34a",
                boxShadow: "0 12px 24px rgba(34,197,94,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <MessageCircle className="w-5 h-5" />
              <div>
                <div className="text-sm font-bold">Chat on WhatsApp</div>
                <div className="text-xs opacity-80">Quick response guaranteed</div>
              </div>
            </motion.a>

            {/* Business Enquiry Types */}
            <div className="bg-card rounded-2xl border border-border p-6 card-depth">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
                Business Enquiries
              </h4>
              <StaggerContainer className="space-y-3" delay={0.15}>
                {enquiryTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItemVariants}
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{type.label}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>

            {/* CIN Info */}
            <div className="text-xs text-muted-foreground space-y-1 px-1">
              <p>
                <span className="font-semibold">CIN:</span> U72900TZ2020PTC034030
              </p>
              <p>
                <span className="font-semibold">Incorporated:</span> July 7, 2020
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection className="lg:col-span-3" direction="right" delay={0.1}>
            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm card-depth">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Floating label: Name */}
                  <div className="floating-field">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="floating-input h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
                    />
                    <label className="floating-label">Your Name *</label>
                  </div>

                  {/* Floating label: Email */}
                  <div className="floating-field">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="floating-input h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
                    />
                    <label className="floating-label">Email Address *</label>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Floating label: Phone */}
                  <div className="floating-field">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className="floating-input h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
                    />
                    <label className="floating-label">Phone Number</label>
                  </div>

                  {/* Select */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Enquiry Type *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm transition-all duration-200"
                    >
                      <option value="">Select an option</option>
                      <option value="manufacturing">Manufacturing Partnership</option>
                      <option value="brand">Brand Development Support</option>
                      <option value="distribution">Distribution Opportunities</option>
                      <option value="private-label">Private Label Enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Floating label: Message */}
                <div className="floating-field">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    rows={5}
                    className="floating-textarea w-full rounded-md border border-input bg-background px-3 text-sm resize-none"
                  />
                  <label className="floating-textarea-label">Your Message *</label>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base shadow-md hover:shadow-primary/20 hover:shadow-lg transition-shadow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>

            {/* Map Embed */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-border h-64 shadow-sm">
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
