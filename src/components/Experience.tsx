import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          <Card className="relative hover:shadow-lg transition-all duration-300 animate-fade-in">
            <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block" />
            
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    Java Full Stack Intern
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    TechNova Solutions
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-1">
                    May 2024 – August 2024
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                Developed and deployed full-stack web applications using{" "}
                <span className="font-semibold text-foreground">
                  Java, Spring Boot, HTML, CSS, JavaScript, and MySQL
                </span>
                .
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Designed RESTful APIs and integrated them with responsive
                  front-end components
                </li>
                <li>
                  Collaborated with cross-functional teams to debug, test, and
                  optimize performance
                </li>
                <li>
                  Gained hands-on experience in MVC architecture, Git version
                  control, and agile workflows
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
