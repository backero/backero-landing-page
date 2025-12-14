import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-primary mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay connected with Backero. Subscribe to receive updates on new product launches, 
            sustainability initiatives, and exclusive insights from our team.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:backeroindia@gmail.com?subject=Career Inquiry">Careers</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:backeroindia@gmail.com?subject=Press Inquiry">Press Inquiries</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:backeroindia@gmail.com?subject=Partnership Opportunity">Partnership Opportunities</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
