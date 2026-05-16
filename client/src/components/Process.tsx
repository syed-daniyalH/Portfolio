import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
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
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-4">
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
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-foreground">My </span>
              <span className="text-[#d4af37]">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A proven methodology to deliver successful automation and development projects
            </motion.p>
          </div>

          {/* Process steps */}
          <div className="space-y-6">
            {PORTFOLIO_DATA.process.map((step, idx) => (
              <motion.div
                key={step.step}
                variants={stepVariants}
                className="relative"
              >
                {/* Connector line */}
                {idx < PORTFOLIO_DATA.process.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-16 bg-gradient-to-b from-[#d4af37] to-[#4a90e2] hidden md:block"></div>
                )}

                <div className="flex gap-6">
                  {/* Step number */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#4a90e2] flex items-center justify-center font-bold text-[#0f1419] text-xl shadow-lg shadow-[#d4af37]/30"
                  >
                    {step.step}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, didx) => (
                        <motion.div
                          key={didx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: didx * 0.08 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 p-2 rounded-lg bg-[#1a1f2e]/50 border border-[#2a3f5f] hover:border-[#d4af37]/50 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-xl border border-[#d4af37]/20 bg-gradient-to-r from-[#d4af37]/5 via-[#4a90e2]/5 to-transparent backdrop-blur-sm text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Start?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and create a custom roadmap tailored to your needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#d4af37] text-[#0f1419] font-semibold rounded-lg hover:bg-[#e5c158] transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
