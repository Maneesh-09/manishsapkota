import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    title: "Nepal Population Count",
    desc: "A real-time population statistics tracker for Nepal, showing live population data, growth rates, and demographic trends. Built with a clean dark UI featuring dynamic counters and interactive data visualization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    color: "from-primary/20 to-accent/20",
    image: "/images/project-nepal-population.png",
  },
  {
    title: "Digital Voting Nepal",
    desc: "A secure digital voting platform for Nepal enabling voter verification through National ID. Features include transparent ballot casting, real-time results, and end-to-end encryption for democratic elections.",
    tech: ["React", "TypeScript", "Authentication", "Security"],
    color: "from-accent/20 to-primary/20",
    image: "/images/project-digital-voting.png",
  },
  {
    title: "Sapkota Flight",
    desc: "A flight booking application for domestic and international flights in Nepal. Features include route search, date selection, passenger management, and a beautiful hero section showcasing Nepal's mountain scenery.",
    tech: ["React", "TypeScript", "Tailwind CSS", "UX Design"],
    color: "from-primary/20 to-accent/10",
    image: "/images/project-sapkota-flight.png",
  },
  {
    title: "E-Commerce Platform Redesign",
    desc: "End-to-end UX redesign of a multi-category e-commerce platform. Reworked the product discovery, cart, and checkout flows, introduced a modular design system, and improved conversion through clearer hierarchy and accessible components.",
    tech: ["Figma", "UX Research", "Design System", "React"],
    color: "from-primary/20 to-accent/20",
    image: "/placeholder.svg",
  },
  {
    title: "SaaS Dashboard",
    desc: "Analytics dashboard for a B2B SaaS product with real-time KPIs, customizable widgets, and role-based views. Focused on information density, responsive layouts, and a calm dark-mode UI for long working sessions.",
    tech: ["React", "TypeScript", "Data Visualization", "UI/UX"],
    color: "from-accent/20 to-primary/20",
    image: "/placeholder.svg",
  },
  {
    title: "Mobile-First Social Platform",
    desc: "A social platform designed mobile-first with gesture-driven navigation, infinite feeds, and rich media posts. Prioritized performance, offline-friendly states, and an accessible component library across iOS and Android web.",
    tech: ["React", "Mobile UX", "Prototyping", "Accessibility"],
    color: "from-primary/20 to-accent/10",
    image: "/placeholder.svg",
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
              <div className="h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
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
