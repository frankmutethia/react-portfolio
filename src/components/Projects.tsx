import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import cerebroScreenshot from "@/assets/cerebro-screenshot.png";
import mulembeScreenshot from "@/assets/mulembe-screenshot.png";
import gsmaScreenshot from "@/assets/gsma-screenshot.png";
import certitrustProctoringScreenshot from "@/assets/certitrust-proctoring-screenshot.png";
import bingeflixScreenshot from "@/assets/bingeflix-screenshot.png";

const Projects = () => {
  const projects = [
    {
      title: "Certi-Trust Exam Proctoring System",
      description:
        "Advanced AI-powered exam proctoring platform with biometric verification, real-time monitoring, and encrypted question databases. Trusted by 500+ educational institutions for secure online examinations.",
      image: certitrustProctoringScreenshot,
      tags: ["React", "AI Proctoring", "Biometric Verification", "Real-time Monitoring"],
      link: "https://rodela.co.ke/",
    },
    {
      title: "Certi-Trust GSMA System",
      description:
        "GSMA Mobile Money Certification platform for secure mobile money services, trusted by 1.35 billion people worldwide. Provides industry-standard certification for mobile money providers.",
      image: gsmaScreenshot,
      tags: ["React", "Certification Platform", "Mobile Money", "Security Standards"],
      link: "https://certification.gsmamobilemoneycertification.com/",
    },
    {
      title: "Cerebro System",
      description:
        "An advanced exam proctoring platform with AI monitoring, screen lock, and real-time dashboard for ensuring fairness and security in online examinations.",
      image: cerebroScreenshot,
      tags: ["React", "AI Monitoring", "Real-time Dashboard", "Secure Environment"],
      link: "https://cerebro.rodela.co.ke/",
    },
    {
      title: "Mulembe Community NSW",
      description:
        "Community website for the Kenyan Luhya community in Australia with 200+ members, featuring event management, membership portal, and cultural heritage preservation.",
      image: mulembeScreenshot,
      tags: ["React", "Community Portal", "Event Management", "Membership System"],
      link: "https://mulembecommunitynswinc.org.au/",
    },
    {
      title: "Bingeflix Movie App",
      description:
        "A modern movie browsing application with real-time search, detailed movie information, and personalized recommendations. Features an intuitive interface for discovering popular, top-rated, and upcoming films.",
      image: bingeflixScreenshot,
      tags: ["React", "TypeScript", "Movie API", "Responsive Design"],
      link: "https://bingeflix-eight.vercel.app/",
    },
    {
      title: "MindCraft AI",
      description:
        "AI consultancy website helping businesses harness artificial intelligence to unlock growth, efficiency, and innovation. Features a modern space-themed design with AI-driven intelligence solutions.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      tags: ["React", "AI Consultancy", "Modern Design", "Vercel"],
      link: "https://react-mindcraftai.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-12 sm:py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-card-border hover:border-primary/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-xs sm:text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.link ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 min-h-[44px]"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  ) : (
                    <>
                      <Button size="sm" variant="outline" className="flex-1 min-h-[44px]">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 min-h-[44px]">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
