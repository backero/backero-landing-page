import aboutImage from "@/assets/about-section.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h2 className="text-primary mb-6">
              Building Brands That Matter
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a consumer-first company creating meaningful brands across beauty, personal care, 
              and lifestyle. Our mission is to deliver products that enhance everyday life while 
              prioritizing sustainability, innovation, and authenticity.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded on the belief that modern consumers deserve better—better ingredients, 
              better transparency, and better impact—we leverage technology, data, and deep 
              consumer insights to craft brands that resonate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our omni-channel distribution across 700+ districts to our commitment to 
              environmental responsibility, every decision we make is guided by our core values: 
              innovation, integrity, and inclusivity.
            </p>
          </div>
          
          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Our team working together in a modern, sustainable workspace"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
