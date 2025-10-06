import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const news = [
  {
    category: "Press Release",
    date: "March 2024",
    title: "Backero Expands Portfolio with Acquisition of Eco-Luxury Brand",
    excerpt: "Strategic move strengthens position in sustainable beauty segment and enhances omni-channel presence.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=600&fit=crop"
  },
  {
    category: "Award",
    date: "February 2024",
    title: "Pureté Wins 'Best Clean Beauty Brand' at Industry Awards",
    excerpt: "Recognition for innovation in sustainable skincare and commitment to transparency.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop"
  },
  {
    category: "Announcement",
    date: "January 2024",
    title: "New R&D Center Opens, Focuses on Biotechnology & Clean Formulations",
    excerpt: "State-of-the-art facility will accelerate product innovation and scientific research.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-primary mb-4">Latest News & Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with our latest achievements, product launches, and company milestones.
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
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto group/link">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
