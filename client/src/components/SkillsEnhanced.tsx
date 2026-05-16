import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";

export default function SkillsEnhanced() {
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
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#0f172a] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563eb] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-foreground">Tech </span>
              <span className="text-[#06b6d4]">Stack</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
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
                className="p-6 rounded-xl border border-[#1e293b] bg-[#0f172a] hover:border-[#06b6d4]/50 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-6 w-1 bg-gradient-to-b from-[#2563eb] to-[#06b6d4]"></div>
                  <h3 className="text-lg font-bold text-foreground">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: skillIdx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 rounded-full border border-[#1e293b] bg-[#0a0f1e] hover:bg-[#1e293b] hover:border-[#06b6d4] transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-sm font-medium text-foreground hover:text-[#06b6d4] transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
