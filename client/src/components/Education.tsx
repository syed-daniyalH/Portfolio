import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#0a0e14] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <div className="mb-12">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-4"
            >
              <GraduationCap className="w-8 h-8 text-[#d4af37]" />
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <span className="text-[#d4af37]">Education</span>
              </h2>
            </motion.div>
          </div>

          {/* Education card */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl border border-[#2a3f5f] bg-[#1a1f2e]/50 backdrop-blur-sm hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {PORTFOLIO_DATA.education.degree}
                </h3>
                <p className="text-lg text-[#d4af37] font-semibold mb-1">
                  {PORTFOLIO_DATA.education.institution}
                </p>
                <p className="text-sm text-muted-foreground">
                  {PORTFOLIO_DATA.education.location} • {PORTFOLIO_DATA.education.duration}
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30"
              >
                <BookOpen className="w-6 h-6 text-[#d4af37]" />
              </motion.div>
            </div>

            {/* Coursework */}
            <div className="mt-6 pt-6 border-t border-[#2a3f5f]">
              <p className="text-sm font-semibold text-foreground mb-4">Relevant Coursework</p>
              <div className="grid md:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.education.coursework.map((course, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-2 rounded-lg bg-[#0f1419] border border-[#2a3f5f] hover:border-[#d4af37]/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                    <span className="text-sm text-muted-foreground">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
