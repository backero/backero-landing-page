import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, FlaskConical, Factory, Sparkles } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: FlaskConical, label: "In-House R&D", sub: "Formulation Experts" },
  { icon: Factory, label: "Own Manufacturing", sub: "Scalable Capacity" },
  { icon: Sparkles, label: "2 Brands Owned", sub: "Treyfa & Kumarie" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.15 },
  },
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section - Innovative Personal Care Manufacturing and R&D Solutions"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{ height: "130%", top: "-15%" }}
      >
        <img
          src={heroBanner}
          alt="State-of-the-art personal care manufacturing facility and R&D laboratory"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(215 50% 20%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Floating ambient orbs */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-primary/[0.07] blur-3xl pointer-events-none"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/3 left-[10%] w-96 h-96 rounded-full bg-accent/[0.07] blur-3xl pointer-events-none"
        animate={{ y: [20, -20, 20], x: [10, -10, 10], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container-custom text-center w-full px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={badgeVariants} className="flex justify-center mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" aria-hidden="true" />
            Research · Manufacturing · Innovation
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-5 sm:mb-6 text-foreground leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight"
        >
          Innovative Personal Care{" "}
          <span className="text-primary">Manufacturing & R&D</span> Solutions
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 max-w-3xl mx-auto font-light leading-relaxed px-2"
        >
          Backero Private Limited is a research-driven cosmetics manufacturing
          partner for brands that need private label formulation, contract
          production, and fast quote delivery.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-muted-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto font-light px-2"
        >
          Request a custom quote today and get expert product development support
          for skincare, haircare, and personal care launches.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col xs:flex-row sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 px-2"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="group w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-lg hover:shadow-primary/25 hover:shadow-xl transition-shadow duration-300"
              asChild
            >
              <a href="#contact" aria-label="Request a quote for cosmetics manufacturing">
                Request a Quote
                <ArrowRight
                  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base backdrop-blur-sm bg-background/50 hover:bg-background/80"
              asChild
            >
              <a href="#contact" aria-label="Talk to our sales team">
                Talk To Sales
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Quick stats */}
        <motion.ul
          variants={itemVariants}
          className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto list-none p-0"
        >
          {stats.map((item, i) => (
            <motion.li
              key={i}
              className="flex flex-col items-center p-2.5 sm:p-3 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 cursor-default"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.55)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <item.icon
                className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1 sm:mb-1.5"
                aria-hidden="true"
              />
              <div className="text-[10px] sm:text-xs font-semibold text-foreground leading-tight text-center">
                {item.label}
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                {item.sub}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#highlights"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
        aria-label="Scroll down to explore highlights"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
