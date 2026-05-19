import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, MessageSquareText, Workflow } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

const focusPoints = [
  {
    icon: Workflow,
    title: "Automation first",
    text: "I build systems that remove repetitive work, shorten response time, and keep business operations moving.",
  },
  {
    icon: MessageSquareText,
    title: "Client communication",
    text: "I keep requirements clear, document the workflow, and work in a way that makes handoff and maintenance easier.",
  },
  {
    icon: GraduationCap,
    title: "Computer science background",
    text: "BS Computer Science from Government College University Lahore with a focus on practical systems and applied AI.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              About Me
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              A builder focused on systems that keep working after launch.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {PORTFOLIO_DATA.about.description}
            </p>

            <div className="mt-8 rounded-3xl border border-border/80 bg-card/80 p-6 shadow-lg shadow-black/10 backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Core focus areas
              </p>
              <div className="mt-5 grid gap-3">
                {PORTFOLIO_DATA.about.expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/5 px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm leading-6 text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {focusPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.article
                  key={point.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-border/80 bg-card/80 p-6 shadow-lg shadow-black/10 backdrop-blur-md"
                >
                  <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{point.text}</p>
                </motion.article>
              );
            })}

            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/80 to-secondary/10 p-6 shadow-lg shadow-black/10 backdrop-blur-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Working style
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                I like building useful systems, documenting the flow, and shipping
                something that real teams can actually use without babysitting it.
              </p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
