import storyBg from "@/assets/story-bg.jpg";

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Backero Private Limited was established with a vision to revolutionize the IT services sector in India."
  },
  {
    year: "2021",
    title: "First Product Launch",
    description: "Launched our first product line, marking a significant step in the company's growth trajectory."
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded operations to include international markets, enhancing our global presence."
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description: "Opened a branch in Coimbatore, built a digital marketing team, and expanded operations pan-India including remote areas. Achieved strong sales and received positive customer feedback for cancer-free cosmetics."
  },
  {
    year: "2024",
    title: "AI Innovation",
    description: "Introduced a new suite of AI-driven solutions, positioning Backero as a leader in technological innovation. Planned offline retail expansion and implemented enhanced customer trust policies."
  },
  {
    year: "2025",
    title: "5th Anniversary",
    description: "Celebrated half a decade of excellence and growth. Launched in-house R&D, production, and manufacturing facilities to strengthen product quality and innovation."
  }
];

const StorySection = () => {
  return (
    <section id="story" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img src={storyBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Key Milestones & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a passionate startup to a technology-driven company blending innovation, 
            wellness, and sustainability—our journey continues to inspire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex gap-8 mb-12 slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Year */}
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-3xl font-bold text-primary">
                  {milestone.year}
                </span>
              </div>

              {/* Timeline */}
              <div className="relative flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
                {index !== milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-border absolute top-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
