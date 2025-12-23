import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import frankProfile from "@/assets/frank-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-bg relative pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:justify-start animate-slide-in-left">
            <Avatar className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 border-4 border-primary/20">
              <AvatarImage src={frankProfile} />
              <AvatarFallback className="text-4xl sm:text-5xl md:text-6xl">FK</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-4 sm:space-y-6 text-center md:text-left animate-slide-in-right">
            <p className="text-muted-foreground text-base sm:text-lg">Hi, I'm</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Frank Mutethia Muriithi
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold">
              A Full Stack Software Engineer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              I build exceptional digital products and offer Artificial Intelligence Consultancy. Specialize in creating scalable applications
              and beautiful user interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Button 
                onClick={() => scrollToSection("contact")} 
                size="lg" 
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto min-h-[44px]"
              >
                Get In Touch
              </Button>
              <Button 
                onClick={() => scrollToSection("projects")} 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto min-h-[44px]"
              >
                View My Work
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start pt-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary h-11 w-11"
                aria-label="Visit my GitHub profile"
                title="Visit my GitHub profile"
                onClick={() => window.open("https://github.com/frankmutethia", "_blank", "noopener,noreferrer")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary h-11 w-11"
                aria-label="Visit my LinkedIn profile"
                title="Visit my LinkedIn profile"
                onClick={() => window.open("https://www.linkedin.com/in/frank-mutethia", "_blank", "noopener,noreferrer")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary h-11 w-11"
                aria-label="Send me an email"
                title="Send me an email"
                onClick={() => window.open("mailto:frankmutethia81@gmail.com", "_blank", "noopener,noreferrer")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
        title="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
