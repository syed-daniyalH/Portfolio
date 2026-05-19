import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof PORTFOLIO_DATA.projects)[number];
  featured?: boolean;
}) {
  const liveHref = project.links?.live ?? (project.liveDemo ? project.link : undefined);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -5 }}
      className={`group rounded-3xl border bg-card/80 p-6 shadow-lg shadow-black/10 backdrop-blur-md transition-colors ${
        featured
          ? "border-primary/20 ring-1 ring-primary/10"
          : "border-border/80"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {featured ? "Featured case study" : "Client automation"}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">{project.title}</h3>
          {project.subtitle ? (
            <p className="mt-1 text-sm font-medium text-muted-foreground">{project.subtitle}</p>
          ) : null}
        </div>
        <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
          <BriefcaseBusiness className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="rounded-2xl border border-border/80 bg-[#0a1220] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Problem
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground">{project.problem}</p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-[#0a1220] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Solution
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground">{project.solution}</p>
        </div>
        <div className="rounded-2xl border border-accent/15 bg-accent/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Result
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground">{project.result}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border/80 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {liveHref ? (
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary/90"
          >
            Live Demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      ) : null}
    </motion.article>
  );
}

export default function ProjectsEnhanced() {
  const featuredProjects = PORTFOLIO_DATA.projects.filter((project) => project.featured);
  const otherProjects = PORTFOLIO_DATA.projects.filter((project) => !project.featured);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
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
              Featured Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              Case studies that show the business impact behind the automation.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Each project below was built around a real workflow problem and
              shipped with measurable time savings, faster response times, or
              less manual data handling.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>

          {otherProjects.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
