import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Mail, href: `mailto:${PORTFOLIO_DATA.personal.email}`, label: "Email" },
  { icon: Linkedin, href: PORTFOLIO_DATA.personal.linkedin, label: "LinkedIn" },
  { icon: Github, href: PORTFOLIO_DATA.personal.github, label: "GitHub" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-[#070b14]">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-slate-950">
                SMDH
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">
                  {PORTFOLIO_DATA.personal.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Junior AI Automation Engineer | Python Developer
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              Building practical automation systems, RAG chatbots, and backend
              APIs for real business workflows.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Quick Links
            </p>
            <div className="mt-4 grid gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-2 text-sm text-foreground transition-colors hover:bg-white/5"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {social.label}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/70 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Copyright {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            Built for speed, clarity, and recruiter readiness
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
}
