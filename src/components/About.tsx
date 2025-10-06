import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="declaration" className="bg-card rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary">
              Self Declaration
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              I'm a final-year B.Tech student passionate about crafting
              interactive, user-focused digital experiences. I love learning
              emerging technologies and solving real-world problems through
              creative code. My journey in tech has been driven by curiosity and
              a constant desire to improve and innovate.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="education" className="bg-card rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary">
              Educational Details
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Pursuing B.Tech (Final Year) in Computer Science with interests in
              Full Stack Development, ServiceNow, and Cybersecurity. Throughout
              my academic journey, I've maintained a strong focus on practical
              applications and hands-on projects that bridge theoretical
              knowledge with real-world solutions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="more" className="bg-card rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary">
              More About Me
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy UI design, learning AI tools, and
              exploring new cybersecurity techniques. I believe in continuous
              learning and staying updated with the latest industry trends. I'm
              also passionate about contributing to open-source projects and
              collaborating with fellow developers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default About;
