import storyBg from "@/assets/story-bg.jpg";
import { ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Inception of Backero",
    description:
      "Established with a visionary mandate to revolutionize personal care through non-toxic, scientifically-backed formulations.",
  },
  {
    year: "2021",
    title: "Debut of Treyfa",
    description:
      "Unveiling our flagship clean beauty brand, setting a new industry standard for cancer-free, botanical-first cosmetics.",
  },
  {
    year: "2022",
    title: "Strategic B2B Expansion",
    description:
      "Scaled operations to empower a network of retailers and partners with our certified safe product ecosystem.",
  },
  {
    year: "2023",
    title: "National Footprint",
    description:
      "Achieved pan-India distribution, penetrating remote markets and cementing consumer trust through consistent quality.",
  },
  {
    year: "2024",
    title: "Diversification with Kymarie",
    description:
      "Launched our premium color cosmetics line, reinforcing our commitment to safety without compromising on performance.",
  },
  {
    year: "2025",
    title: "Vertical Integration",
    description:
      "Inaugurated state-of-the-art R&D and manufacturing facilities to ensure end-to-end quality control and acceleration of global exports.",
  },
];

const StorySection = () => {
  return (
    <section
      id="story"
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={storyBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 inline-block tracking-tight">
            Our Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Key milestones in our mission to deliver safe, sustainable, and
            innovative personalized care products.
          </p>
        </div>

        {/* Grid Timeline Container */}
        <div className="relative">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="
                  flex flex-col items-center text-center
                  group relative
                "
              >
                {/* Year Bubble */}
                <div
                  className="
                  relative z-10 mb-8 
                  px-6 py-2 flex items-center justify-center 
                  rounded-full bg-card border border-primary/10 shadow-sm
                  group-hover:scale-105 group-hover:border-primary/30 group-hover:shadow-md
                  transition-all duration-300
                "
                >
                  <span className="font-bold text-primary text-xl tracking-wide">
                    {milestone.year}
                  </span>
                  {/* Small connector dot below year */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-px h-6 bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                </div>

                {/* Card */}
                <div
                  className="
                  bg-card p-8 rounded-xl border border-border/40 shadow-sm w-full h-full
                  hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-500 ease-out
                  flex flex-col items-center relative
                "
                >
                  {/* Top connector visual */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-background border-2 border-primary z-20" />

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
