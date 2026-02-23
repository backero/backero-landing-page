import {
  FlaskConical,
  Factory,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    description:
      "Our R&D division focuses on innovative formulation development using scientifically backed ingredients and modern cosmetic research methodologies.",
    points: [
      "Product formulation development",
      "Ingredient research and testing",
      "Stability testing",
      "Prototype creation",
      "Customization based on brand requirements",
    ],
    gradient:
      "from-blue-50 to-indigo-50 dark:from-primary/10 dark:to-primary/5",
    iconColor: "text-blue-600 dark:text-primary",
    iconBg: "bg-blue-100 dark:bg-primary/20",
  },
  {
    icon: Factory,
    title: "Manufacturing Capabilities",
    description:
      "We provide scalable manufacturing solutions tailored to your brand's volume, timeline, and quality requirements.",
    points: [
      "Hair Care Products",
      "Skin Care Products",
      "Personal Hygiene Products",
      "Soaps & Cleansers",
      "Herbal & Specialty Formulations",
    ],
    gradient:
      "from-green-50 to-emerald-50 dark:from-accent/10 dark:to-accent/5",
    iconColor: "text-green-600 dark:text-accent",
    iconBg: "bg-green-100 dark:bg-accent/20",
  },
];

const process = [
  {
    step: "01",
    title: "Concept Discussion",
    desc: "We understand your brand vision, target market, and product requirements.",
  },
  {
    step: "02",
    title: "Research & Formulation",
    desc: "Our R&D team develops the optimal formula using proven ingredients.",
  },
  {
    step: "03",
    title: "Prototype Approval",
    desc: "Review and approve the prototype before moving to full-scale testing.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    desc: "Rigorous stability and safety testing to ensure product excellence.",
  },
  {
    step: "05",
    title: "Manufacturing & Packaging",
    desc: "Scalable production with quality control at every stage.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Manufacturing & R&D
          </span>
          <h2 className="text-primary mb-6">End-to-End Product Development</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            From concept to commercialization — we provide the scientific
            expertise and manufacturing infrastructure that B2B brands need to
            succeed.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 bg-gradient-to-br ${cap.gradient} border border-border/50 hover:shadow-xl transition-all duration-300 slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${cap.iconBg} ${cap.iconColor} mb-6`}
              >
                <cap.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {cap.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {cap.description}
              </p>
              <ul className="space-y-2.5">
                {cap.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Product Development Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              How It Works
            </span>
            <h3 className="text-3xl font-bold text-foreground">
              Product Development Process
            </h3>
          </div>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 shadow-sm">
                    <span className="text-lg font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Commitment Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 text-center text-primary-foreground">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Our Quality Commitment
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed text-lg">
            We follow strict quality standards throughout the production process
            to ensure safety, consistency, and performance — because your brand
            reputation depends on it.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-full hover:bg-primary-foreground/90 transition-colors duration-200"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
