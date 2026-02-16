import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "HTML5 / CSS3", level: 92 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React.js / TypeScript", level: 85 },
      { name: "Tailwind CSS / Bootstrap", level: 90 },
    ],
  },
  {
    title: "Design Tools",
    icon: Server,
    skills: [
      { name: "Figma / Adobe XD", level: 92 },
      { name: "Sketch / Photoshop", level: 80 },
      { name: "Prototyping / Wireframing", level: 90 },
      { name: "Design Systems", level: 85 },
    ],
  },
  {
    title: "Tools & Methods",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "UX Research / Testing", level: 82 },
      { name: "Agile / Scrum", level: 80 },
      { name: "WordPress / SEO", level: 78 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="container relative mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * ci }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <cat.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + ci * 0.15 + si * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
