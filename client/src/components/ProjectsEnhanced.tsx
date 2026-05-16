import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ProjectsEnhanced() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const featuredProjects = PORTFOLIO_DATA.projects.filter(p => p.featured);
  const otherProjects = PORTFOLIO_DATA.projects.filter(p => !p.featured);

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563eb] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
              <span className="text-foreground">Featured </span>
              <span className="text-[#06b6d4]">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Client projects showcasing automation, AI integration, and backend development
            </motion.p>
          </div>

          {/* Featured Projects - Larger cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl border border-[#1e293b] bg-[#0f172a] hover:border-[#06b6d4]/50 hover:shadow-lg hover:shadow-[#06b6d4]/20 transition-all duration-300 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[#06b6d4] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 rounded-full bg-[#1e293b] border border-[#2a3f5f] text-xs text-[#06b6d4] font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA */}
                  {project.liveDemo && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] transition-colors w-fit"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects - Grid */}
          {otherProjects.length > 0 && (
            <>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-foreground mb-8"
              >
                Other Projects
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={projectVariants}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className="h-full p-6 rounded-xl border border-[#1e293b] bg-[#0f172a] hover:border-[#06b6d4]/50 hover:shadow-lg hover:shadow-[#06b6d4]/10 transition-all duration-300 flex flex-col">
                      {/* Header */}
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#06b6d4] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full bg-[#1e293b] text-xs text-[#06b6d4] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 rounded-full bg-[#1e293b] text-xs text-muted-foreground">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
