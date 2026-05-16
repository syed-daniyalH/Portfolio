import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { CheckCircle2, Briefcase } from "lucide-react";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative py-20 md:py-32 bg-[#0a0e14] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4a90e2] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
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
              <span className="text-foreground">Professional </span>
              <span className="text-[#d4af37]">Journey</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Building intelligent systems and delivering transformative solutions
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline line */}
                {idx < PORTFOLIO_DATA.experience.length - 1 && (
                  <div className="absolute left-6 top-16 w-1 h-24 bg-gradient-to-b from-[#d4af37] to-[#4a90e2]"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-4 border-[#0f1419] bg-[#d4af37] flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#0f1419]" />
                </div>

                {/* Content */}
                <div className="ml-20 p-6 rounded-xl border border-[#2a3f5f] bg-[#1a1f2e]/50 backdrop-blur-sm hover:border-[#d4af37]/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-[#d4af37] font-semibold">{exp.status}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{exp.focus}</p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground mb-4">Key Achievements</p>
                    {exp.achievements.map((achievement, aidx) => (
                      <motion.div
                        key={aidx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: aidx * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 rounded-xl border border-[#d4af37]/20 bg-gradient-to-r from-[#d4af37]/5 via-[#4a90e2]/5 to-transparent backdrop-blur-sm text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, automation projects, or collaborations. Let's connect and build something amazing together.
            </p>
            <button className="px-8 py-3 bg-[#d4af37] text-[#0f1419] font-semibold rounded-lg hover:bg-[#e5c158] transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
