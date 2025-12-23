import { Card } from "@/components/ui/card";
import { Code2, Palette, Smartphone } from "lucide-react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const About = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/coding-coffee.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
  const expertise = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js), building scalable, high-performance web applications from database design and backend APIs to responsive user interfaces and production deployment.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Proficient in Figma, creating intuitive and beautiful user interfaces that users love.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Building cross-platform mobile apps with Flutter and Dart for iOS and Android.",
    },
  ];

  const stats = [
    { value: "30+", label: "Projects Completed" },
    { value: "7+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" },
    { value: "10+", label: "Technologies" },
  ];

  return (
    <section id="about" className="min-h-screen py-12 sm:py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              I'm a passionate Software Engineer with a strong foundation in full-stack development
              and UI/UX design. I love turning complex problems into simple, beautiful, and intuitive
              solutions.
            </p>
          </div>
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 animate-fade-in">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-full h-full"
              />
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {expertise.map((item, index) => (
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
                    <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-5 border border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                      <item.icon className="h-14 w-14 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
