import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const scrollVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 md:pt-0">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#4a90e2] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <motion.div
        className="relative z-10 container max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
          <span className="text-sm font-medium text-[#d4af37]">Available for Opportunities</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <span className="text-foreground">{PORTFOLIO_DATA.hero.title.split(" ").slice(0, 2).join(" ")}</span>
          <br />
          <span className="gradient-text">{PORTFOLIO_DATA.hero.title.split(" ").slice(2).join(" ")}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {PORTFOLIO_DATA.hero.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          {PORTFOLIO_DATA.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="px-8 py-4 bg-[#d4af37] text-[#0f1419] font-semibold rounded-lg hover:bg-[#e5c158] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#d4af37]/20">
            {PORTFOLIO_DATA.hero.cta}
          </button>
          <button className="px-8 py-4 border border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-[#2a3f5f] bg-[#1a1f2e]/50 backdrop-blur-sm hover:border-[#d4af37]/50 transition-colors duration-300">
              <div className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            variants={scrollVariants}
            animate="animate"
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-[#d4af37]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
