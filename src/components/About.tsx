const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card/30 backdrop-blur-sm animate-slide-up">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>

        <div className="space-y-6">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Self Declaration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a final-year B.Tech student passionate about crafting
              interactive, user-focused digital experiences. I love learning
              emerging technologies and solving real-world problems through
              creative code. My journey in tech has been driven by curiosity and
              a constant desire to improve and innovate.
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Educational Details
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">B.Tech in Computer Science and Engineering</p>
                <p className="text-sm">Bonam Venkata Chalamayya Engineering College</p>
                <p className="text-sm">2022 - 2026</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Intermediate</p>
                <p className="text-sm">Aditya Jr College, Amalapuram</p>
                <p className="text-sm">2020 - 2022</p>
              </div>
              <div>
                <p className="font-medium text-foreground">SSC</p>
                <p className="text-sm">Z P High School</p>
                <p className="text-sm">Till 2020</p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              More About Me
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy UI design, learning AI tools, and
              exploring new cybersecurity techniques. I believe in continuous
              learning and staying updated with the latest industry trends. I'm
              also passionate about contributing to open-source projects and
              collaborating with fellow developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
