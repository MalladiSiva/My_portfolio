import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const roles = [
    "Creative Web Developer",
    "ServiceNow Certified Professional",
    "Cybersecurity Enthusiast",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Siva Rama Krishna Malladi
            </h1>
            
            <div className="h-8 md:h-10">
              <p className="text-xl md:text-2xl text-primary font-medium transition-opacity duration-500">
                {roles[currentRole]}
              </p>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl">
              Final-year B.Tech student passionate about crafting interactive,
              user-focused digital experiences through code.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="hover:shadow-lg transition-shadow"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:bg-accent transition-colors"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-glow shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Siva Rama Krishna Malladi - Profile" 
                  className="w-full h-full rounded-full object-cover border-4 border-card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
