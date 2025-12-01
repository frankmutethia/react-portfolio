import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import cerebroScreenshot from "@/assets/cerebro-screenshot.png";
import mulembeScreenshot from "@/assets/mulembe-screenshot.png";
import gsmaScreenshot from "@/assets/gsma-screenshot.png";

const Projects = () => {
  const projects = [
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
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with payment integration, admin dashboard, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    },
    {
      title: "Task Management App",
      description:
        "Mobile-first task management application with team collaboration features, built with Flutter for iOS and Android.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      tags: ["Flutter", "Dart", "Firebase", "REST API"],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with real-time data visualization and automated reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Node.js", "Chart.js"],
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application with location-based forecasts and interactive maps for weather patterns.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Weather API", "Mapbox"],
    },
    {
      title: "Portfolio Builder",
      description:
        "A drag-and-drop portfolio builder with customizable templates and one-click deployment features.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind CSS", "MongoDB", "Express"],
    },
    {
      title: "Chat Application",
      description:
        "Real-time messaging platform with group chats, file sharing, and end-to-end encryption.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  ) : (
                    <>
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
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
