import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative bg-[#0a0e14] border-t border-[#2a3f5f] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-3 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Main content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#4a90e2] flex items-center justify-center">
                  <span className="text-[#0f1419] font-bold text-xs leading-none">SDH</span>
                </div>
                <span className="font-bold text-foreground">{PORTFOLIO_DATA.personal.name}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI Automation Engineer & Python Developer. Transforming workflows into intelligent systems.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Projects", "Skills", "Contact"].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-[#d4af37] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg bg-[#1a1f2e] border border-[#2a3f5f] text-muted-foreground hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all duration-300"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-8"
          ></motion.div>

          {/* Bottom section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          >
            <p>© {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
              <span>using React & Framer Motion</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
