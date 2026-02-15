import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users } from "lucide-react";

const strengths = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Palette, title: "UI/UX Design", desc: "Creating intuitive, beautiful interfaces" },
  { icon: Zap, title: "Performance", desc: "Optimizing for speed and efficiency" },
  { icon: Users, title: "Collaboration", desc: "Working effectively in cross-functional teams" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 text-center"
          >
            {/* TODO: Replace with your bio */}
            I'm a passionate full-stack developer with 5+ years of experience building modern web applications.
            I specialize in React, TypeScript, and Node.js, and I love creating products that make a real
            difference. When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source, or enjoying a good cup of coffee.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:glow-accent transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
