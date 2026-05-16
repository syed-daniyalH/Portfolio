import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { Zap, Brain, Rocket } from "lucide-react";

export default function ProfessionalSummary() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Production-Grade Systems",
      description: "Ship automation systems that work in real production environments with real clients"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "RAG pipelines, LLM integration, and multi-agent orchestration for intelligent automation"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "End-to-End Delivery",
      description: "From architecture to deployment, handling backend, frontend, and infrastructure"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06b6d4] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main summary */}
          <motion.div
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Professional </span>
              <span className="text-[#06b6d4]">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {PORTFOLIO_DATA.summary}
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border border-[#1e293b] bg-[#0f172a] hover:border-[#06b6d4]/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center mb-4 text-[#06b6d4]"
                >
                  {highlight.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key achievements */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl border border-[#1e293b] bg-gradient-to-r from-[#2563eb]/5 via-[#06b6d4]/5 to-transparent"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "70% reduction in manual processing time for clients",
                "5+ active clients with ongoing automation systems",
                "Lead response time reduced from 4+ hours to 15-20 minutes",
                "RAG chatbot deployed live on production website",
                "Multi-LLM support (OpenAI, Gemini, DeepSeek) integration",
                "65% reduction in vendor data preparation time"
              ].map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
