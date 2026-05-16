import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import Typewriter from "./Typewriter";

export default function HeroEnhanced() {
  const nameParts = PORTFOLIO_DATA.personal.name.split(" ");
  const firstLine = nameParts.slice(0, 2).join(" ");
  const secondLine = nameParts.slice(2).join(" ");

  const taglines = [
    "I build systems that run themselves",
    "AI Automation Engineer",
    "RAG & Workflow Architect",
    "n8n · Make.com · OpenAI · FastAPI"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#2563eb] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        ></motion.div>
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#06b6d4] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        ></motion.div>
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="text-foreground">{firstLine}</span>
            {secondLine ? (
              <>
                <br />
                <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
                  {secondLine}
                </span>
              </>
            ) : null}
          </motion.h1>

          {/* Typewriter tagline */}
          <motion.div
            variants={itemVariants}
            className="mb-6 h-16 md:h-20 flex items-center justify-center"
          >
            <Typewriter
              texts={taglines}
              speed={80}
              delay={3000}
              className="text-2xl md:text-3xl font-semibold text-[#06b6d4]"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            AI Automation Engineer building systems that eliminate manual work — n8n, Make.com, RAG pipelines, and FastAPI backends.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              whileHover={{ scale: 1.05, borderColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#1e293b] text-foreground font-semibold rounded-lg hover:border-[#2563eb] hover:bg-[#0f172a]/50 transition-all"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
