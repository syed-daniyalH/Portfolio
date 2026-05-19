import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PORTFOLIO_DATA } from "@/const";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function scrollToTarget(href: string, setIsOpen?: (value: boolean) => void) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  setIsOpen?.(false);
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const displayName = PORTFOLIO_DATA.personal.name;
  const mobileMenuId = "primary-mobile-navigation";

  const navIdList = useMemo(
    () => NAV_ITEMS.map((item) => item.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navIdList
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navIdList]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      aria-label="Primary"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-[#070b14]/90 shadow-[0_12px_40px_rgba(7,11,20,0.55)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <motion.button
          type="button"
          aria-label="Go to home section"
          onClick={() => scrollToTarget("#home")}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 rounded-full border border-border/80 bg-white/5 px-3 py-2 text-left backdrop-blur-md transition-colors hover:bg-white/10"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-slate-950 shadow-lg shadow-primary/20">
            SMDH
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-foreground">{displayName}</div>
            <div className="text-xs text-muted-foreground">{PORTFOLIO_DATA.personal.title}</div>
          </div>
        </motion.button>

        <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/80 bg-card/70 px-2 py-1 shadow-lg shadow-black/10 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <motion.button
                key={item.href}
                type="button"
                onClick={() => scrollToTarget(item.href)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-4 -bottom-px h-px rounded-full bg-gradient-to-r from-primary to-secondary" />
                ) : null}
              </motion.button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            <ArrowDownToLine className="h-4 w-4" />
            Download Resume
          </motion.a>
        </div>

        <motion.button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls={mobileMenuId}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-border/80 bg-card/70 p-2.5 text-foreground backdrop-blur-md transition-colors hover:bg-white/5 lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={mobileMenuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24 }}
            className="border-t border-border/70 bg-[#070b14]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container mx-auto max-w-7xl px-4 py-4">
              <div className="grid gap-2 rounded-3xl border border-border/70 bg-card/80 p-3 shadow-xl shadow-black/20">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");

                  return (
                    <motion.button
                      key={item.href}
                      type="button"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      onClick={() => scrollToTarget(item.href, setIsOpen)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-foreground"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive ? <span className="h-2 w-2 rounded-full bg-primary" /> : null}
                    </motion.button>
                  );
                })}

                <motion.a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary/90"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
