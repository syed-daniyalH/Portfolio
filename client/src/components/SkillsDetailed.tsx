import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/const";
import { Sparkles } from "lucide-react";

export default function SkillsDetailed() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Technical Skills
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              Organized into the systems I actually use to ship client work.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              From AI automation and RAG design to backend APIs and deployment,
              the stack is grouped around how the work is delivered in practice.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {Object.entries(PORTFOLIO_DATA.skills).map(([category, data], index) => (
              <motion.article
                key={category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-border/80 bg-card/80 p-6 shadow-lg shadow-black/10 backdrop-blur-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Skill Category
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{category}</h3>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">{data.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {data.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/80 bg-white/5 px-3 py-1.5 text-sm font-medium text-foreground transition-colors group-hover:border-primary/25 group-hover:bg-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
