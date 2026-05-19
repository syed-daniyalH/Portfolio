import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

export default function Certifications() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
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
              Certifications
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              Learning that supports the automation and backend work.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PORTFOLIO_DATA.certifications.map((cert, index) => (
              <motion.article
                key={`${cert.title}-${cert.date}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-border/80 bg-card/80 p-5 shadow-lg shadow-black/10 backdrop-blur-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cert.issuer} - {cert.date}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
