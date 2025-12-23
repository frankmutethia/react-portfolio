import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiFlutter,
  SiDart,
  SiReact as SiReactnative,
  SiFirebase,
  SiFigma,
  SiGit,
  SiDocker,
  SiVercel,
  SiSwagger
} from "react-icons/si";

const Skills = () => {
  // Map skills to their icons
  const skillIconMap: { [key: string]: React.ComponentType<{ className?: string }> | undefined } = {
    "React": SiReact,
    "TypeScript": SiTypescript,
    "JavaScript": SiJavascript,
    "Tailwind CSS": SiTailwindcss,
    "HTML/CSS": SiHtml5,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    "MongoDB": SiMongodb,
    "REST APIs": SiSwagger,
    "GraphQL": SiGraphql,
    "Flutter": SiFlutter,
    "Dart": SiDart,
    "React Native": SiReactnative,
    "Firebase": SiFirebase,
    "Figma": SiFigma,
    "Git": SiGit,
    "Docker": SiDocker,
    "Vercel": SiVercel,
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Next.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart", "React Native", "Firebase"],
    },
    {
      title: "Tools & Design",
      skills: ["Figma", "Git", "Docker", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.title === "Frontend" 
              ? SiReact 
              : category.title === "Backend" 
              ? SiNodedotjs 
              : category.title === "Mobile"
              ? SiFlutter
              : SiFigma;
            
            return (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-card-border transition-all duration-500 animate-slide-up hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                {/* Content section */}
                <div className="p-6 sm:p-8">
                  {/* Icon section */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-500"></div>
                      <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                        <IconComponent className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => {
                      const SkillIcon = skillIconMap[skill];
                      return (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 group-hover:shadow-md"
                        >
                          {SkillIcon && <SkillIcon className="h-4 w-4" />}
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
