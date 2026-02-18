import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Self-Employed, Kathmandu, Nepal",
    role: "UI/UX Designer & Frontend Developer",
    period: "March 2025 – Present",
    bullets: [
      "Designed and developed 15+ responsive web applications and landing pages with modern UI/UX principles",
      "Implemented pixel-perfect designs using React.js, HTML5, CSS3, and JavaScript, achieving 95+ Lighthouse scores",
      "Conducted end-to-end design processes from user research and persona creation to final implementation",
      "Leveraged WordPress to build custom themes and plugins for client projects",
      "Integrated REST APIs and third-party services to enhance functionality and create seamless user experiences",
    ],
  },
  {
    company: "Syntecxhub, Remote, India",
    role: "User Experience Designer – Virtual Internship",
    period: "January 2026 – February 2026",
    bullets: [
      "Designed user-centered interfaces for web and mobile applications, improving user engagement",
      "Collaborated with cross-functional teams to translate business goals into intuitive design solutions",
      "Created detailed wireframes, interactive prototypes, and high-fidelity mockups using Figma",
      "Conducted heuristic evaluations and accessibility audits ensuring WCAG 2.1 compliance",
      "Established and maintained design system components and style guides across multiple product lines",
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
