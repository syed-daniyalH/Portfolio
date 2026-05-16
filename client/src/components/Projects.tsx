import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { ArrowUpRight, Zap } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  const projectVariants = {
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
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4a90e2] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-foreground">Featured </span>
              <span className="text-[#d4af37]">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl"
            >
              Client-based projects delivering real impact through AI automation and intelligent system design.
            </motion.p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover="hover"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                className="group cursor-pointer"
              >
                <div className="relative h-full p-6 rounded-xl border border-[#2a3f5f] bg-[#1a1f2e]/50 backdrop-blur-sm hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
                  ></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                        <p className="text-sm text-[#d4af37]">{project.subtitle}</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className="p-2 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30"
                      >
                        <ArrowUpRight className="w-5 h-5 text-[#d4af37]" />
                      </motion.div>
                    </div>

                    {/* Client */}
                    <p className="text-sm text-muted-foreground mb-4 pb-4 border-b border-[#2a3f5f]">
                      <span className="font-semibold text-foreground">Client:</span> {project.client}
                    </p>

                    {/* Challenge & Solution (expandable) */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm font-semibold text-[#d4af37] mb-2">Challenge</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.challenge}</p>
                      </div>

                      {selectedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="pt-4 border-t border-[#2a3f5f]">
                            <p className="text-sm font-semibold text-[#4a90e2] mb-2">Solution</p>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.solution}</p>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                              {project.metrics.map((metric, idx) => (
                                <div key={idx} className="p-2 rounded-lg bg-[#0f1419] border border-[#2a3f5f]">
                                  <div className="text-lg font-bold text-[#d4af37]">{metric.value}</div>
                                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Impact */}
                    <div className="mb-6 p-4 rounded-lg bg-[#0f1419] border border-[#d4af37]/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-[#d4af37]" />
                        <p className="text-sm font-semibold text-foreground">Impact</p>
                      </div>
                      <ul className="space-y-2">
                        {project.impact.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-[#2a3f5f] text-[#d4af37] border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-[#2a3f5f] text-muted-foreground border border-[#2a3f5f]">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Expand hint */}
                    <div className="mt-4 text-xs text-[#d4af37] font-medium">
                      {selectedProject === project.id ? "Click to collapse" : "Click to see full details"}
                    </div>
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
