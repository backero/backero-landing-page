import storyBg from "@/assets/story-bg.jpg";

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Founded with a vision to disrupt the beauty industry with clean, sustainable products."
  },
  {
    year: "2019",
    title: "First Brand Launch",
    description: "Launched Pureté, our flagship skincare line, gaining instant traction."
  },
  {
    year: "2020",
    title: "Expansion",
    description: "Grew to 3 brands and achieved nationwide distribution."
  },
  {
    year: "2022",
    title: "Sustainability Milestone",
    description: "Achieved carbon neutrality across all operations and packaging."
  },
  {
    year: "2024",
    title: "Portfolio Growth",
    description: "Now managing 6 distinctive brands serving millions of consumers."
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
          <h2 className="text-primary mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a passionate idea to a portfolio of beloved brands, our story is one of 
            innovation, resilience, and unwavering commitment to our values.
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
