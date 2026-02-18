import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  { title: "FIGMA: Learn Figma – UI/UX Design Masterclass From Beginner to Pro", desc: "Comprehensive UI/UX design training" },
  { title: "CyberSecurity Bootcamp: The Ultimate Beginner's Course", desc: "Security fundamentals and best practices" },
  { title: "WordPress: Web Development for Absolute Beginner Zero to Hero", desc: "Full-stack WordPress development" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      <div className="container relative mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Education */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">Bachelor of Computer Application (BCA)</h3>
                <p className="text-accent font-medium">Tribhuvan University, Kathmandu, Nepal</p>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full inline-block mt-2">
                  September 2024 – April 2029 (Expected)
                </span>
                <p className="text-sm text-muted-foreground mt-3">
                  <span className="font-medium text-foreground">Major:</span> Information Technology
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Relevant Coursework:</span> Data Structures, Algorithms, Database Management, Software Engineering, Web Technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                className="glass rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
