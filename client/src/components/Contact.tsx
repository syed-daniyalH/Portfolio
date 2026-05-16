import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { Mail, Linkedin, Github, MessageCircle, ArrowUpRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail className="w-6 h-6" />,
  Linkedin: <Linkedin className="w-6 h-6" />,
  Github: <Github className="w-6 h-6" />,
  MessageCircle: <MessageCircle className="w-6 h-6" />,
};

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const contactVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-[#4a90e2]/5"></div>
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-foreground">{PORTFOLIO_DATA.contact.headline.split(" ").slice(0, 2).join(" ")} </span>
              <span className="text-[#d4af37]">{PORTFOLIO_DATA.contact.headline.split(" ").slice(2).join(" ")}</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {PORTFOLIO_DATA.contact.description}
            </motion.p>
          </div>

          {/* Contact methods */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {PORTFOLIO_DATA.contact.methods.map((method, idx) => (
              <motion.a
                key={idx}
                href={
                  method.icon === "Mail"
                    ? `mailto:${PORTFOLIO_DATA.personal.email}`
                    : method.icon === "Linkedin"
                    ? PORTFOLIO_DATA.personal.linkedin
                    : method.icon === "Github"
                    ? PORTFOLIO_DATA.personal.github
                    : method.icon === "MessageCircle"
                    ? `https://wa.me/${method.value.replace(/\D/g, "")}`
                    : "#"
                }
                target={method.icon !== "Mail" ? "_blank" : undefined}
                rel={method.icon !== "Mail" ? "noopener noreferrer" : undefined}
                variants={contactVariants}
                whileHover="hover"
                className="p-6 rounded-xl border border-[#2a3f5f] bg-[#1a1f2e]/50 backdrop-blur-sm hover:border-[#d4af37]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 group-hover:bg-[#d4af37]/20 transition-colors">
                    <div className="text-[#d4af37]">{iconMap[method.icon]}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                    <p className="text-foreground font-semibold group-hover:text-[#d4af37] transition-colors">
                      {method.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            variants={itemVariants}
            className="p-8 md:p-12 rounded-xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 via-[#4a90e2]/5 to-transparent backdrop-blur-sm text-center"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you need to automate workflows, integrate AI into your systems, or build scalable backend solutions, I'm ready to help bring your vision to life.
            </p>
            <motion.a
              href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Let's%20Work%20Together`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-[#d4af37] text-[#0f1419] font-bold rounded-lg hover:bg-[#e5c158] transition-all duration-300 shadow-lg shadow-[#d4af37]/30 text-lg"
            >
              Start a Project
            </motion.a>
          </motion.div>

          {/* Footer note */}
          <motion.p
            variants={itemVariants}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            Available for full-time, contract, or project-based opportunities. Typically respond within 15 minutes during business hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
