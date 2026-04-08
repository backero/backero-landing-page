import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateFAQSchema, addJSONLDScript } from "@/lib/seo";

const faqs = [
  {
    question: "What types of cosmetic products can Backero manufacture?",
    answer:
      "Backero specializes in manufacturing a wide range of personal care products including skincare products (moisturizers, serums, cleansers), haircare products (shampoos, conditioners, treatments), soaps and cleansers, herbal formulations, and specialty cosmetics. We have the capability to develop both conventional and innovative formulations.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for contract manufacturing?",
    answer:
      "Our MOQ depends on the complexity of the formulation and product type. For most standard formulations, we can start with pilot batches for testing and approval. For commercial production, we can discuss flexible volumes based on your brand requirements. Contact us to discuss your specific needs.",
  },
  {
    question: "How long does the product development process typically take?",
    answer:
      "The timeline varies based on product complexity. For standard formulations, the process from concept to final approval typically takes 4-8 weeks. Complex formulations requiring specialized testing may take longer. We work efficiently to meet your market timelines without compromising quality.",
  },
  {
    question: "Does Backero handle packaging and labeling?",
    answer:
      "Yes, we provide comprehensive packaging solutions including labeling design consultation, compliance verification, and packaging material sourcing. We ensure all packaging meets regulatory requirements and aligns with your brand identity.",
  },
  {
    question: "What quality standards and certifications does Backero maintain?",
    answer:
      "We maintain strict quality standards throughout our manufacturing process. Our facilities comply with international cosmetic manufacturing standards and we conduct rigorous stability testing, safety testing, and quality control at every production stage.",
  },
  {
    question: "Can Backero help with product formulation from scratch?",
    answer:
      "Absolutely! Our R&D team specializes in custom formulation development. We work with you to understand your product vision, target market, and ingredient preferences, then develop scientifically-backed formulations that meet market demands.",
  },
  {
    question: "Does Backero manufacture for export outside India?",
    answer:
      "Yes, we have experience manufacturing products for export. We ensure all our formulations and manufacturing practices comply with international regulatory requirements for various markets including Europe, North America, and other regions.",
  },
  {
    question: "What is the process for becoming a brand partner with Backero?",
    answer:
      "The process is simple: 1) Initial consultation to discuss your requirements, 2) Formulation discussion and proposal, 3) Sample development and approval, 4) Stability testing and compliance verification, 5) Commercial production. We guide you through each step.",
  },
];

const FAQSection = () => {
  useEffect(() => {
    // Add FAQ Schema for AEO
    const faqSchema = generateFAQSchema(faqs);
    addJSONLDScript(faqSchema, "faq-schema");
  }, []);

  return (
    <section
      id="faq"
      className="section-padding bg-gradient-to-b from-muted/30 to-background"
      aria-label="Frequently asked questions about our services"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 slide-up px-4">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3 md:mb-4">
            Common Queries
          </span>
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our manufacturing services, product development process, and partnership opportunities.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto slide-up">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/50 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left hover:text-primary transition-colors">
                  <span className="text-base md:text-lg font-semibold text-foreground flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 text-primary" />
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
