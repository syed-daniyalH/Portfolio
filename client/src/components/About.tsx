import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { CheckCircle2 } from "lucide-react";

export default function About() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4a90e2] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <div className="mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-foreground">About </span>
              <span className="text-[#d4af37]">Me</span>
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-[#4a90e2]"
            ></motion.div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {PORTFOLIO_DATA.about.description}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I combine technical expertise with a deep understanding of business challenges to deliver solutions that truly matter. Every project is an opportunity to reduce complexity and create lasting impact.
              </p>
            </motion.div>

            {/* Right: Expertise areas */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {PORTFOLIO_DATA.about.expertise.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-[#2a3f5f] bg-[#1a1f2e]/50 hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Key metrics highlight */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-xl border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/5 via-[#4a90e2]/5 to-transparent backdrop-blur-sm"
          >
            {[
              { number: "70%", label: "Manual Work Reduction" },
              { number: "5+", label: "Active Clients" },
              { number: "15 min", label: "Lead Response Time" },
              { number: "4", label: "Major Projects" }
            ].map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">{metric.number}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
