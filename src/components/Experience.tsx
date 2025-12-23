import { Card } from "@/components/ui/card";
import { Calendar, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      achievements: [
        "Led development of multiple client-facing web applications using MERN stack",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization techniques",
        "Collaborated with UI/UX team to implement responsive designs in Figma",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Startup Studios",
      period: "2020 - 2022",
      achievements: [
        "Built and deployed 10+ web applications using React, Node.js, and MongoDB",
        "Developed mobile applications using Flutter and Dart for iOS and Android",
        "Implemented RESTful APIs and integrated third-party services",
        "Worked in Agile environment with 2-week sprint cycles",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      achievements: [
        "Created responsive web interfaces using React and Tailwind CSS",
        "Collaborated with designers to translate Figma designs into code",
        "Optimized websites for SEO and performance",
        "Maintained and updated client websites",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 bg-card border-card-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building2 className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
