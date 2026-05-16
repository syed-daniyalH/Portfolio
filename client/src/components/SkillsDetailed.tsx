import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";

export default function SkillsDetailed() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
              <span className="text-foreground">Technical </span>
              <span className="text-[#06b6d4]">Expertise</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive toolkit spanning AI automation, backend development, and modern DevOps practices
            </motion.p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(PORTFOLIO_DATA.skills).map(([category, data], idx) => (
              <motion.div
                key={category}
                variants={categoryVariants}
                className="p-6 rounded-xl border border-[#1e293b] bg-[#0f172a] hover:border-[#06b6d4]/50 transition-all duration-300 group"
              >
                {/* Category header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-8 w-1 bg-gradient-to-b from-[#2563eb] to-[#06b6d4] flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-[#06b6d4] transition-colors">
                      {category}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{data.description}</p>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {data.items.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: skillIdx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#0a0f1e] hover:bg-[#1e293b] hover:border-[#06b6d4] transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-xs font-medium text-foreground hover:text-[#06b6d4] transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-xl border border-[#1e293b] bg-gradient-to-r from-[#2563eb]/5 via-[#06b6d4]/5 to-transparent"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-[#06b6d4] mb-2">8+</p>
                <p className="text-muted-foreground">Skill Categories</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#06b6d4] mb-2">40+</p>
                <p className="text-muted-foreground">Technologies & Tools</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#06b6d4] mb-2">5</p>
                <p className="text-muted-foreground">Professional Certifications</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
