import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { Award } from "lucide-react";

export default function Certifications() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#2563eb] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <div className="mb-12 text-center">
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Award className="w-8 h-8 text-[#06b6d4]" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Certifications & <span className="text-[#06b6d4]">Credentials</span>
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Continuous learning and professional development in AI, automation, and backend technologies.
            </motion.p>
          </div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-lg border border-[#1e293b] bg-[#0f172a] hover:border-[#06b6d4]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/30 group-hover:bg-[#06b6d4]/20 transition-colors flex-shrink-0"
                  >
                    <Award className="w-5 h-5 text-[#06b6d4]" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold group-hover:text-[#06b6d4] transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
