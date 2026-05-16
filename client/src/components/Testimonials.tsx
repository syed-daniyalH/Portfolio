import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
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

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4a90e2] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
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
              <span className="text-foreground">Client </span>
              <span className="text-[#d4af37]">Testimonials</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              What my clients say about working with me
            </motion.p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={testimonialVariants}
                whileHover="hover"
                className="group"
              >
                <div className="h-full p-6 rounded-xl border border-[#2a3f5f] bg-[#1a1f2e]/50 backdrop-blur-sm hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/10 flex flex-col">
                  {/* Quote icon */}
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="mb-4"
                  >
                    <Quote className="w-8 h-8 text-[#d4af37]/50" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground italic mb-6 flex-1 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Project tag */}
                  <div className="mb-4 inline-block">
                    <span className="px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs text-[#d4af37] font-semibold">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="pt-4 border-t border-[#2a3f5f]">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#4a90e2] flex items-center justify-center font-bold text-[#0f1419] text-sm"
                      >
                        {testimonial.image}
                      </motion.div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              { label: "Client Satisfaction", value: "100%" },
              { label: "Projects Completed", value: "5+" },
              { label: "Average ROI", value: "300%+" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-[#2a3f5f] bg-[#1a1f2e]/50 backdrop-blur-sm text-center hover:border-[#d4af37]/50 transition-all"
              >
                <p className="text-3xl font-bold text-[#d4af37] mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
