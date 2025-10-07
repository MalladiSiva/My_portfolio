import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Online Hotel Room Booking System",
      description:
        "A comprehensive full-stack hotel management platform enabling seamless room reservations, user authentication, and booking management. Features include real-time availability checking, secure payment simulation, and an admin dashboard for managing rooms and bookings.",
      tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/MalladiSiva",
      role: "Full Stack Developer"
    },
    {
      title: "Online Tiffin Center Website",
      description:
        "Created using HTML, CSS, and JavaScript — a responsive platform for tiffin service and order management.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MalladiSiva",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/20 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-card/80 backdrop-blur-sm border-primary/10"
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
