import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Keylogger App",
      description:
        "Built using Python, pynput, and JSON for keylogging and secure data logging analysis.",
      tech: ["Python", "pynput", "JSON"],
      github: "https://github.com/SivaRamaKrishnaMalladi",
    },
    {
      title: "Online Tiffin Center Website",
      description:
        "Created using HTML, CSS, and JavaScript — a responsive platform for tiffin service and order management.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/SivaRamaKrishnaMalladi",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
