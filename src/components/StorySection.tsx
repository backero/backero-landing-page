import storyBg from "@/assets/story-bg.jpg";

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Backero Private Limited was established with a vision to revolutionize the cosmetics industry with cancer-free products."
  },
  {
    year: "2021",
    title: "First Product Launch",
    description: "Launched Treyfa, our flagship cancer-free cosmetics brand, marking a significant milestone in clean beauty."
  },
  {
    year: "2022",
    title: "B2B Expansion",
    description: "Expanded operations to include B2B distribution, enabling retailers and businesses to offer cancer-free cosmetics."
  },
  {
    year: "2023",
    title: "Pan-India Growth",
    description: "Opened a branch in Coimbatore, expanded distribution pan-India including remote areas, and received overwhelming positive feedback for our cancer-free cosmetics."
  },
  {
    year: "2024",
    title: "Kymarie Launch",
    description: "Launched Kymarie, our color cosmetics and specialty division. Implemented enhanced quality control and customer trust policies."
  },
  {
    year: "2025",
    title: "In-House Manufacturing",
    description: "Celebrated 5 years of excellence. Launched in-house R&D, production, and manufacturing facilities. Expanded export capabilities for global reach."
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
            From a passionate startup to a complete cosmetics solution provider—our journey 
            in clean beauty continues to inspire and transform the industry.
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
