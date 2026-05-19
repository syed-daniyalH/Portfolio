import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { PORTFOLIO_DATA } from "@/const";
import ContactForm from "@/components/ContactForm";

const iconMap: Record<string, ReactNode> = {
  Mail: <Mail className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Github: <Github className="h-5 w-5" />,
};

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
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
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              {PORTFOLIO_DATA.contact.headline}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              {PORTFOLIO_DATA.contact.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {PORTFOLIO_DATA.contact.methods.map((method) => {
                  const Icon = iconMap[method.icon] ?? <Mail className="h-5 w-5" />;
                  const href =
                    method.icon === "Mail"
                      ? `mailto:${PORTFOLIO_DATA.personal.email}`
                      : method.icon === "Linkedin"
                      ? PORTFOLIO_DATA.personal.linkedin
                      : PORTFOLIO_DATA.personal.github;

                  return (
                    <motion.a
                      key={method.label}
                      href={href}
                      target={method.icon === "Mail" ? undefined : "_blank"}
                      rel={method.icon === "Mail" ? undefined : "noopener noreferrer"}
                      aria-label={`Open ${method.label} profile`}
                      whileHover={{ y: -4 }}
                      className="group rounded-3xl border border-border/80 bg-card/80 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:border-primary/20 hover:bg-white/5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                          {Icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            {method.label}
                          </p>
                          <p className="mt-2 text-sm font-medium text-foreground">
                            {method.display ?? method.value}
                          </p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/80 to-secondary/10 p-6 shadow-lg shadow-black/10 backdrop-blur-md"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Best fit projects
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>AI automation and workflow systems</li>
                  <li>RAG chatbots and knowledge retrieval apps</li>
                  <li>CRM, billing, and lead handling integrations</li>
                  <li>Backend APIs that support real operations</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <ContactForm />
            </motion.div>
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Typically responsive within business hours. Available for freelance,
            contract, and full-time opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
