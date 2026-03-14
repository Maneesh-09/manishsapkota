import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Avatar placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1"
        >
          <img
            src="/images/manish-avatar.jpeg"
            alt="Manish Sapkota"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm <span className="text-gradient">Manish Sapkota</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6"
        >
          UI/UX Designer | Frontend Developer | Design Thinker
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg mb-10"
        >
          Passionate UI/UX Designer and Frontend developer. Transforming ideas into seamless,
          engaging designs that enhance user experience and user Interaction.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#projects")}
            className="bg-primary hover:bg-primary/90 glow-primary text-lg px-8"
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="text-lg px-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Contact Me
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
