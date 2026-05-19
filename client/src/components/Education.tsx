import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

export default function Education() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
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
              Education
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              Computer science training with a focus on applied systems.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-border/80 bg-card/80 p-6 shadow-lg shadow-black/10 backdrop-blur-md md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    Degree
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">
                    {PORTFOLIO_DATA.education.degree}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {PORTFOLIO_DATA.education.institution}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {PORTFOLIO_DATA.education.location} - {PORTFOLIO_DATA.education.duration}
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border/80 bg-[#0a1220] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Final Year Project
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground">{PORTFOLIO_DATA.education.fyp}</p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl border border-border/80 bg-card/80 p-6 shadow-lg shadow-black/10 backdrop-blur-md md:p-7"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Relevant Coursework</h3>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {PORTFOLIO_DATA.education.coursework.map((course) => (
                  <div
                    key={course}
                    className="rounded-2xl border border-border/70 bg-[#0a1220] px-4 py-3 text-sm text-foreground"
                  >
                    {course}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 to-secondary/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Why it matters
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  The degree gives the portfolio a solid CS foundation while the
                  project work shows applied automation, AI integration, and
                  product delivery skills.
                </p>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
