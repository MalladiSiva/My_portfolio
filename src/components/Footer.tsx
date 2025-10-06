import { Button } from "@/components/ui/button";
import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <a
                href="https://linkedin.com/in/siva-rama-krishna-malladi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <a
                href="https://github.com/SivaRamaKrishnaMalladi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <a
                href="mailto:malladisivaramakrishna04@gmail.com"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Designed & Developed by Siva Rama Krishna Malladi
          </p>
          <p className="text-muted-foreground text-xs">© 2025 All rights reserved</p>

          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
