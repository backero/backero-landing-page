import { Award } from "lucide-react";

const achievements = [
  {
    image: "/placeholder.svg",
    aspectRatio: "aspect-[4/3]", // landscape placeholder
    imageColWidth: "lg:w-1/2",
    contentColWidth: "lg:w-1/2",
    subtitle: "Safety & Trust",
    title: "India's Most Trusted & Safest Cosmetics Brand",
    recipient: "Surya Raj B",
    recipientImage: "/images/surya-raj-b.png",
    description:
      "Recognized for setting new benchmarks in consumer safety and product integrity. Treyfa's commitment to non-toxic, scientifically validated formulations has earned it the distinction of being one of India's most trusted names in personal care, prioritizing long-term skin health over temporary results.",
  },
  {
    image: "/images/Award-2.png",
    aspectRatio: "aspect-[4/5]", // portrait award photo
    imageColWidth: "lg:w-5/12",
    contentColWidth: "lg:w-7/12",
    subtitle: "Industry Excellence",
    title: "Vetri Nayagigal Virudhugal 2025 — Excellence in Cosmetics Industry",
    recipient: "Dr. Parimala Gnana Soundari",
    recipientImage: "/images/dr-parimala-gnana-soundari.jpg",
    description:
      "Honored with the prestigious 'Successful Women Awards 2025' for outstanding leadership and innovation in the cosmetics sector. This award celebrates the visionary approach of Dr. Parimala Gnana Soundari in steering Treyfa towards sustainable growth and empowering women in the industry.",
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20 space-y-4 px-4">
          <div className="flex items-center justify-center gap-2 text-primary uppercase tracking-widest text-xs sm:text-sm font-semibold">
            <Award className="w-4 h-4" />
            <span>Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 inline-block tracking-tight">
            Awards & Accolades
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Our commitment to excellence and safety has been recognized by
            industry leaders and institutions.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* ── Image Side ── */}
              <div
                className={`w-full ${achievement.imageColWidth} relative group`}
              >
                {/* Decorative backdrop layers */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-500" />
                <div className="absolute inset-0 bg-accent/10 rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500" />

                {/* Image frame */}
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 ${achievement.aspectRatio}`}
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* ── Content Side ── */}
              <div
                className={`w-full ${achievement.contentColWidth} space-y-5 sm:space-y-6`}
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest shadow-sm">
                  {achievement.subtitle}
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {achievement.title}
                </h3>

                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                  {achievement.description}
                </p>

                {/* Recipient */}
                <div className="pt-4 flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full ring-4 ring-primary/10 overflow-hidden shrink-0">
                    <img
                      src={achievement.recipientImage}
                      alt={achievement.recipient}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
                      Honored Recipient
                    </p>
                    <p className="text-base sm:text-lg text-primary font-bold">
                      {achievement.recipient}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
