import { cn } from "@/lib/utils";

const About = () => {
  const expertise = [
    {
      number: "01",
      title: "Full Stack Development",
      description:
        "Specializing in the MERN stack — MongoDB, Express.js, React, and Node.js — building scalable web applications from database design and APIs to responsive interfaces and production deployment.",
    },
    {
      number: "02",
      title: "UI / UX Design",
      description:
        "Proficient in Figma for wireframing, prototyping, and design systems — turning complex workflows into intuitive, accessible interfaces that users actually enjoy using.",
    },
    {
      number: "03",
      title: "Mobile Development",
      description:
        "Building cross-platform mobile apps with Flutter and Dart for iOS and Android, with thoughtful state management and production-ready delivery.",
    },
    {
      number: "04",
      title: "Support & AI Systems",
      description:
        "Keeping production systems stable through incident response and preventive maintenance, while helping teams adopt AI tools, agents, and automation with discipline.",
    },
  ];

  const stats = [
    { value: "30+", label: "Projects Completed" },
    { value: "7+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" },
    { value: "10+", label: "Technologies" },
  ];

  return (
    <section id="about" className="min-h-screen py-16 sm:py-24 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Rodela-style intro: headline + supporting copy */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-end mb-10 sm:mb-14 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-[1.1] text-foreground tracking-tight">
            Software that turns complex problems into{" "}
            <span className="text-primary italic font-display">simple, useful</span> solutions.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md lg:justify-self-end">
            I&apos;m Frank Mutethia — a Full Stack Software Engineer with a strong foundation in
            full-stack development, UI/UX design, mobile apps, and production support. Four
            practices, one integrated way of working.
          </p>
        </div>

        {/* Numbered 2x2 panel with hairline dividers */}
        <div className="rounded-2xl sm:rounded-3xl bg-muted/60 dark:bg-muted/40 border border-border overflow-hidden animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {expertise.map((item, index) => (
              <article
                key={item.number}
                className={cn(
                  "p-7 sm:p-10 lg:p-12 text-left transition-colors duration-300 hover:bg-background/60",
                  index < expertise.length - 1 && "border-b border-border",
                  "md:border-b-0",
                  index < 2 && "md:border-b md:border-border",
                  index % 2 === 0 && "md:border-r md:border-border"
                )}
              >
                <p className="text-sm text-muted-foreground/80 mb-5 sm:mb-6 tabular-nums tracking-wide">
                  {item.number}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-3 sm:mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Quiet stats row */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-border pt-10 sm:pt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-left md:text-center">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
