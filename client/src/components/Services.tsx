import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { Zap, Brain, Code, Layers, Database, Briefcase } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
};

export default function Services() {
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

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4a90e2] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
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
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-foreground">Services I </span>
              <span className="text-[#d4af37]">Offer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive automation and development services tailored to your business needs
            </motion.p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.services.map((service, idx) => (
              <motion.div
                key={service.id}
                variants={serviceVariants}
                whileHover="hover"
                className="group"
              >
                <div className="h-full p-6 rounded-xl border border-[#2a3f5f] bg-[#1a1f2e]/50 backdrop-blur-sm hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-4 text-[#d4af37] group-hover:bg-[#d4af37]/20 transition-colors"
                  >
                    {iconMap[service.icon]}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#d4af37] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 pb-6 border-b border-[#2a3f5f]">
                    {service.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fidx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-lg font-bold text-[#d4af37]">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Don't see what you need? Let's discuss your specific requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#d4af37] text-[#0f1419] font-semibold rounded-lg hover:bg-[#e5c158] transition-all duration-300"
            >
              Get a Custom Quote
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
