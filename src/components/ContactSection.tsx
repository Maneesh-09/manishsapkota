import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Github, Twitter, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    // TODO: Connect to edge function for real email sending
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message sent!", description: "Thank you! I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="container relative mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.form
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div>
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-background/50"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-background/50"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-background/50 resize-none"
              />
            </div>
            <Button type="submit" className="w-full glow-primary" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            {/* TODO: Replace with your real social links */}
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-6"
          >
            {/* TODO: Replace with your real resume link */}
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
