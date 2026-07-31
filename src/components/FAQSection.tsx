import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateFAQSchema, addJSONLDScript } from "@/lib/seo";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/ui/AnimatedSection";

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
    const faqSchema = generateFAQSchema(faqs);
    addJSONLDScript(faqSchema, "faq-schema");
  }, []);

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background"
      aria-label="Frequently asked questions about our services"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">

          {/* Left: Sticky intro */}
          <AnimatedSection direction="left" className="lg:sticky lg:top-28">
            <div className="eyebrow">
              <span className="eyebrow-text">Common Queries</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-[1.15] mb-5">
              Frequently<br />Asked<br />Questions
            </h2>
            <p className="text-[1.0625rem] text-muted-foreground leading-relaxed mb-8">
              Everything you need to know about our manufacturing services,
              formulation process, and partnership opportunities.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full text-sm shadow-card-md"
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 12px 24px -4px rgba(0,0,0,0.18)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </AnimatedSection>

          {/* Right: Accordion */}
          <StaggerContainer className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border rounded-2xl px-6 data-[state=open]:bg-primary/[0.03] data-[state=open]:border-primary/20 transition-all duration-200 shadow-card"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 text-left hover:text-primary transition-colors [&>svg]:text-primary [&>svg]:flex-shrink-0">
                      <span className="text-sm md:text-base font-semibold text-foreground flex items-center gap-3 pr-3">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pl-9">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
