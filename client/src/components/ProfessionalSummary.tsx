import { motion } from "framer-motion";
import { Bot, ShieldCheck, Workflow } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

const pillars = [
  {
    icon: Workflow,
    title: "What I solve",
    text: "Manual workflows, slow lead response, repetitive billing, and scattered business processes.",
  },
  {
    icon: Bot,
    title: "How I build",
    text: "RAG chatbots, CRM automations, backend APIs, and orchestration flows with n8n, Make.com, FastAPI, and PostgreSQL.",
  },
  {
    icon: ShieldCheck,
    title: "Why clients trust it",
    text: "Systems are shipped around real business operations, measured by outcomes, and built for stability after handoff.",
  },
];

export default function ProfessionalSummary() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-[1fr_1.1fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Professional Overview
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              Business-focused automation work built for real operations.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {PORTFOLIO_DATA.summary}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:pt-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-border/80 bg-card/80 p-5 shadow-lg shadow-black/10 backdrop-blur-md"
                >
                  <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.text}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
