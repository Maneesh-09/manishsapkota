import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    desc: "Designed and developed a fully responsive e-commerce website with modern UI/UX principles, resulting in 40% improved user engagement. Implemented WCAG 2.1 AA accessibility and optimized page load times by 60%.",
    tech: ["React.js", "CSS3", "Responsive Design", "WCAG"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Design System Framework",
    desc: "Created a comprehensive design system in Figma with reusable components, reducing design-to-development time by 50%. Established design documentation and guidelines for consistent brand implementation.",
    tech: ["Figma", "Design Systems", "UI/UX", "Documentation"],
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Interactive Portfolio Website",
    desc: "Built a dynamic portfolio showcasing 15+ web development and design projects using React.js. Integrated smooth animations and micro-interactions, achieving 95+ Lighthouse performance score.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "Performance"],
    color: "from-primary/20 to-accent/10",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              onClick={() => setSelected(p)}
              className="glass rounded-2xl overflow-hidden cursor-pointer group hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Placeholder image */}
              <div className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="font-heading text-lg font-semibold text-muted-foreground/60">
                  {/* TODO: Add project screenshot */}
                  Preview
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="glass-strong sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">{selected?.title}</DialogTitle>
            <DialogDescription>{selected?.desc}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-2 my-4">
            {selected?.tech.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {/* TODO: Replace with real links */}
            <Button className="flex-1" onClick={() => window.open("#", "_blank")}>
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => window.open("#", "_blank")}>
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
