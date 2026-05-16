import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/const";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const displayName = PORTFOLIO_DATA.personal.name.split(" ").slice(0, 2).join(" ");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id) || document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f1419]/95 backdrop-blur-md border-b border-[#2a3f5f]/50 shadow-lg shadow-[#d4af37]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("#home")}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#4a90e2] flex items-center justify-center">
            <span className="text-[#0f1419] font-bold text-xs leading-none">SDH</span>
          </div>
          <span className="hidden sm:inline font-bold text-foreground">{displayName}</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#d4af37] transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex px-6 py-2 bg-[#d4af37] text-[#0f1419] font-semibold rounded-lg hover:bg-[#e5c158] transition-all duration-300"
        >
          Get In Touch
        </motion.button>

        {/* Mobile menu button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-[#1a1f2e] transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#d4af37]" />
          ) : (
            <Menu className="w-6 h-6 text-[#d4af37]" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-[#2a3f5f] bg-[#0f1419]/95 backdrop-blur-md"
          >
            <div className="container max-w-6xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 text-foreground hover:text-[#d4af37] hover:bg-[#1a1f2e] rounded-lg transition-all duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="w-full mt-4 px-4 py-3 bg-[#d4af37] text-[#0f1419] font-semibold rounded-lg hover:bg-[#e5c158] transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
