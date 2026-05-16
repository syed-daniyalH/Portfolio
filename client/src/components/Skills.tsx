import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { Zap } from "lucide-react";

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-[#d4af37] text-[#0f1419]";
    case "Advanced":
      return "bg-[#4a90e2] text-white";
    case "Intermediate":
      return "bg-[#2a3f5f] text-[#d4af37]";
    default:
      return "bg-[#3a4556] text-foreground";
  }
};

export default function Skills() {
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#0a0e14] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <motion.h2
              variants={categoryVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-foreground">Technical </span>
              <span className="text-[#d4af37]">Expertise</span>
            </motion.h2>
            <motion.p
              variants={categoryVariants}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A comprehensive toolkit spanning AI automation, backend development, and modern DevOps practices.
            </motion.p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.skills.map((skillGroup, groupIdx) => (
              <motion.div
                key={groupIdx}
                variants={categoryVariants}
                className="p-6 rounded-xl border border-[#2a3f5f] bg-[#1a1f2e]/50 backdrop-blur-sm hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/10"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#d4af37] to-[#4a90e2]"></div>
                  <h3 className="text-xl font-bold text-foreground">{skillGroup.category}</h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      variants={skillVariants}
                      whileHover="hover"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a3f5f] bg-[#0f1419] hover:bg-[#1a1f2e] transition-all duration-300 cursor-pointer group"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-[#d4af37] transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional tools section */}
          <motion.div
            variants={categoryVariants}
            className="mt-12 p-8 rounded-xl border border-[#d4af37]/20 bg-gradient-to-r from-[#d4af37]/5 via-[#4a90e2]/5 to-transparent backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-[#d4af37]" />
              <h3 className="text-2xl font-bold text-foreground">Additional Tools & Platforms</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "OCR Technology",
                "SerpAPI",
                "LinkedIn API",
                "Google Sheets",
                "Excel",
                "Jupyter Notebooks"
              ].map((tool, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="p-3 rounded-lg bg-[#1a1f2e]/50 border border-[#2a3f5f] text-foreground hover:border-[#d4af37]/50 transition-colors"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
