import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const news = [
  {
    category: "Corporate Milestone",
    date: "March 2024",
    title: "Backero Strengthens Global Footprint with Strategic Expansion",
    excerpt:
      "New partnerships and market entry strategies fortify our position as a leader in sustainable beauty exports.",
    image: "./placeholder.svg",
  },
  {
    category: "Industry Recognition",
    date: "February 2024",
    title: "Treyfa Awarded 'Best Clean Beauty Innovation' of the Year",
    excerpt:
      "Celebrating excellence in non-toxic formulations and our commitment to consumer safety standards.",
    image: "./placeholder.svg",
  },
  {
    category: "Innovation",
    date: "January 2024",
    title: "Inauguration of Advanced Biotech R&D Facility",
    excerpt:
      "A leap forward in clean science, enabling the development of next-generation bioactive cosmetics.",
    image: "./placeholder.svg",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-primary mb-4">Latest News & Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with our latest achievements, product launches, and
              company milestones.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {item.date}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
