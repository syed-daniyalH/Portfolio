import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

const heroHighlights = [
  "RAG Chatbots",
  "Workflow Automation",
  "CRM Integrations",
  "FastAPI APIs",
  "n8n / Make.com",
];

export default function HeroEnhanced() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-12 top-24 h-80 w-80 rounded-full bg-secondary/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              {PORTFOLIO_DATA.personal.title}
            </div>

            <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {PORTFOLIO_DATA.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {PORTFOLIO_DATA.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/5"
              >
                <Download className="h-4 w-4 text-primary" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-border/80 bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span>Available for AI automation and client workflow projects</span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">Automation profile</p>
                  <h2 className="mt-3 text-2xl font-semibold text-foreground">Production systems that reduce manual work</h2>
                </div>
                <div className="rounded-2xl border border-accent/20 bg-accent/10 px-3 py-2 text-right">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Focus</p>
                  <p className="text-sm font-semibold text-foreground">AI + Workflow</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Workflow automation",
                    text: "n8n, Make.com, webhooks, and CRM logic for repeatable business processes.",
                  },
                  {
                    title: "AI-powered systems",
                    text: "RAG chatbots, LLM integrations, and prompt-driven business workflows.",
                  },
                  {
                    title: "Backend delivery",
                    text: "FastAPI, PostgreSQL, Qdrant, and clean API architecture for production use.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.08 }}
                    className="rounded-2xl border border-border/80 bg-white/5 p-4 transition-colors hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { value: "70%", label: "Manual work reduced", tone: "success" },
                  { value: "5+", label: "Automation workflows", tone: "primary" },
                  { value: "15-20 min", label: "Lead response time", tone: "primary" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/80 bg-[#0a1220] p-4 text-center"
                  >
                    <p
                      className={`text-2xl font-semibold ${
                        item.tone === "success" ? "text-accent" : "text-primary"
                      }`}
                    >
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
