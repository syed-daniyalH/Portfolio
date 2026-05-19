import { motion } from "framer-motion";
import { Clock3, TimerReset, TrendingUp, UsersRound, Workflow } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

const icons = [Workflow, UsersRound, Clock3, TimerReset, TrendingUp];

const toneClasses: Record<string, string> = {
  success: "text-accent border-accent/20 bg-accent/10",
  primary: "text-primary border-primary/20 bg-primary/10",
  secondary: "text-secondary border-secondary/20 bg-secondary/10",
  accent: "text-accent border-accent/20 bg-accent/10",
};

export default function MetricsBanner() {
  return (
    <section className="border-y border-border/70 bg-[#0b1220]">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {PORTFOLIO_DATA.stats.map((stat, index) => {
            const Icon = icons[index] ?? Workflow;
            const tone = toneClasses[stat.tone] ?? toneClasses.primary;

            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-border/80 bg-card/80 p-5 shadow-lg shadow-black/10 backdrop-blur-md"
              >
                <div className={`mb-4 inline-flex rounded-2xl border p-3 ${tone}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{stat.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
