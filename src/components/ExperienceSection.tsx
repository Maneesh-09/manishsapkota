import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Tech Corp Inc.",
    role: "Senior Full Stack Developer",
    period: "2022 – Present",
    bullets: [
      "Led development of a microservices architecture serving 1M+ users",
      "Reduced page load times by 40% through performance optimization",
      "Mentored a team of 5 junior developers",
    ],
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 – 2022",
    bullets: [
      "Built the core product from MVP to production launch",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Integrated third-party APIs for payments and notifications",
    ],
  },
  {
    company: "Digital Agency Co.",
    role: "Frontend Developer",
    period: "2018 – 2020",
    bullets: [
      "Developed responsive web apps for 20+ enterprise clients",
      "Introduced component-based architecture with React",
      "Improved accessibility scores to WCAG AA compliance",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ x: -30, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background" />

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {/* TODO: Replace with your achievements */}
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
