import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Send, ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

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
        {/* Avatar */}
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open profile photo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 block cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          <img
            src="/images/manish-avatar.jpeg"
            alt="Manish Sapkota"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.button>

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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 border-border bg-background/95 backdrop-blur-xl [&>button]:hidden">
          <DialogTitle className="sr-only">Profile photo</DialogTitle>
          <DialogDescription className="sr-only">
            Zoom and pan the profile photo. Use the controls to zoom in, zoom out, or reset.
          </DialogDescription>
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={5}
            doubleClick={{ mode: "toggle", step: 1.5 }}
            wheel={{ step: 0.15 }}
            pinch={{ step: 5 }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <div className="relative">
                <TransformComponent
                  wrapperClass="!w-full !h-[70vh] rounded-lg bg-muted/30"
                  contentClass="!w-full !h-full flex items-center justify-center"
                >
                  <img
                    src="/images/manish-avatar.jpeg"
                    alt="Manish Sapkota"
                    className="max-w-full max-h-full object-contain select-none"
                    draggable={false}
                  />
                </TransformComponent>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-md px-2 py-1 shadow-lg">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => zoomOut()}
                    aria-label="Zoom out"
                    className="rounded-full"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => resetTransform()}
                    aria-label="Reset zoom"
                    className="rounded-full"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => zoomIn()}
                    aria-label="Zoom in"
                    className="rounded-full"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-md border border-border"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </TransformWrapper>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
