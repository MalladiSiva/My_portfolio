import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Shield, Cpu, Database, Sparkles } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "ServiceNow", icon: Globe, color: "text-blue-500" },
    { name: "Java", icon: Code, color: "text-orange-500" },
    { name: "HTML", icon: Globe, color: "text-red-500" },
    { name: "CSS", icon: Globe, color: "text-blue-400" },
    { name: "JavaScript", icon: Code, color: "text-yellow-500" },
    { name: "Python", icon: Code, color: "text-green-500" },
    { name: "Cybersecurity", icon: Shield, color: "text-purple-500" },
    { name: "Gen AI", icon: Sparkles, color: "text-pink-500" },
    { name: "C", icon: Cpu, color: "text-gray-500" },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                <skill.icon
                  className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform`}
                />
                <p className="font-semibold text-center text-foreground">
                  {skill.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
