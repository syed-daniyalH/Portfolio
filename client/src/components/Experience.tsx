import { motion } from "framer-motion";
import { CheckCircle2, Clock3, MapPin, BriefcaseBusiness } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

export default function Experience() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              Career highlights from hands-on AI automation delivery.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              The timeline below shows work done for live clients and the kind of
              operational improvements that came out of it.
            </p>
          </div>

          <div className="relative mt-12 space-y-5">
            <div className="absolute left-6 top-3 hidden h-full w-px bg-gradient-to-b from-primary via-border to-transparent lg:block" />

            {PORTFOLIO_DATA.experience.map((experience, index) => (
              <motion.article
                key={`${experience.title}-${experience.date}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative grid gap-4 lg:grid-cols-[72px_1fr]"
              >
                <div className="hidden lg:flex">
                  <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary shadow-lg shadow-primary/10">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                </div>

                <div className="rounded-3xl border border-border/80 bg-card/80 p-6 shadow-lg shadow-black/10 backdrop-blur-md md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                        {experience.company}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          {experience.location}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-primary" />
                          {experience.date}
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/80 bg-white/5 px-4 py-2 text-sm font-medium text-foreground">
                      Active delivery
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {experience.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="flex items-start gap-3 rounded-2xl border border-border/70 bg-[#0a1220] px-4 py-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm leading-7 text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/80 to-secondary/10 p-6 shadow-lg shadow-black/10 backdrop-blur-md"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "3+ active clients supported in live workflows",
                "70% manual processing reduction across automations",
                "15-20 minute lead response target maintained",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border/70 bg-[#0a1220] p-4">
                  <p className="text-sm leading-7 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
