import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Github, Image as ImageIcon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/const";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type WorkflowPreview = {
  badge: string;
  headline: string;
  intro: string;
  footer: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
    caption: string;
  };
};

const WORKFLOW_PREVIEWS: Record<number, WorkflowPreview> = {
  2: {
    badge: "Make.com Scenarios",
    headline: "Dispatch Alex scenario screenshot",
    intro:
      "This is the original visual workflow screenshot from the Dispatch Alex project, showing the production-style operations flow instead of a recreated UI mockup.",
    footer: "Original screenshot from the live Make.com scenario.",
    highlights: ["Twilio intake", "Service lookup", "AI routing", "Invoice follow-up"],
    image: {
      src: "/workflows/dispatch-alex-dashboard.png",
      alt: "Dispatch Alex Make.com scenario screenshot",
      caption:
        "Original Dispatch Alex screenshot showing the live operations dashboard and workflow path.",
    },
  },
  3: {
    badge: "Make.com Scenarios",
    headline: "SM2 Racing scenario screenshot",
    intro:
      "This is the original Make.com workflow screenshot for SM2 Racing, showing the intake, OCR, and structured reporting pipeline.",
    footer: "Original screenshot from the live Make.com scenario.",
    highlights: ["Webhooks", "OCR parsing", "Google Sheets", "Structured reporting"],
    image: {
      src: "/workflows/sm2-racing-workflow.png",
      alt: "SM2 Racing Make.com workflow screenshot",
      caption:
        "Original SM2 Racing screenshot showing the data intake flow and reporting path.",
    },
  },
  5: {
    badge: "n8n Workflow",
    headline: "LinkedIn content automation workflow",
    intro:
      "This is the original n8n export attached to the project. It shows the full research, drafting, approval, and publishing loop behind the LinkedIn automation.",
    footer: "Original workflow snapshot from the live n8n automation.",
    highlights: ["Schedule trigger", "AI drafting", "Approval loop", "LinkedIn publishing"],
    image: {
      src: "/workflows/linkedin-content-automation-scenario.svg",
      alt: "n8n workflow for LinkedIn content automation",
      caption:
        "Original LinkedIn content automation scenario showing research, content generation, approval, and publishing flow.",
    },
  },
};

function WorkflowPreviewDialog({
  open,
  onOpenChange,
  preview,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preview: WorkflowPreview;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl border-border/80 bg-[#08111f] p-0 text-foreground shadow-2xl shadow-black/40">
        <div className="border-b border-border/70 px-6 py-5 md:px-8">
          <DialogHeader className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {preview.badge}
              </span>
              <span className="rounded-full border border-border/70 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Original export
              </span>
            </div>
            <DialogTitle className="text-2xl font-semibold text-foreground md:text-3xl">
              {preview.headline}
            </DialogTitle>
            <DialogDescription className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              {preview.intro}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="space-y-4 p-6 md:p-8">
          <div className="overflow-hidden rounded-3xl border border-border/80 bg-card/70 shadow-lg shadow-black/10">
            <figure className="space-y-0">
              <div className="bg-[#060d18] p-4 sm:p-5">
                <img
                  src={preview.image.src}
                  alt={preview.image.alt}
                  className="max-h-[72vh] w-full rounded-2xl border border-border/60 object-contain shadow-2xl shadow-black/30"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="border-t border-border/80 px-5 py-4 sm:px-6">
                <p className="text-sm leading-7 text-muted-foreground">{preview.image.caption}</p>
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-wrap gap-2">
            {preview.highlights.map((label) => (
              <span
                key={label}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border/70 px-6 py-5 md:px-8">
          <p className="text-xs text-muted-foreground">
            {preview.footer}
          </p>
          <DialogClose asChild>
            <Button type="button" variant="outline" className="rounded-full border-border/80">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof PORTFOLIO_DATA.projects)[number];
  featured?: boolean;
}) {
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const workflowPreview = WORKFLOW_PREVIEWS[project.id];
  const liveHref = project.links?.live ?? (project.liveDemo ? project.link : undefined);
  const repoHref = (project.links as { github?: string } | undefined)?.github;
  const hasWorkflowPreview = Boolean(workflowPreview);
  const workflowButtonLabel = workflowPreview?.badge === "n8n Workflow" ? "View n8n Workflow" : "Make.com Scenarios";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        whileHover={{ y: -5 }}
        className={`group rounded-3xl border bg-card/80 p-6 shadow-lg shadow-black/10 backdrop-blur-md transition-colors ${
          featured ? "border-primary/20 ring-1 ring-primary/10" : "border-border/80"
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

        <div className="mt-6 flex flex-wrap gap-3">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary/90"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}

          {repoHref ? (
            <a
              href={repoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/5 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10"
              aria-label={`Open GitHub repository for ${project.title}`}
            >
              GitHub Repo
              <Github className="h-4 w-4" />
            </a>
          ) : null}

          {hasWorkflowPreview ? (
            <Button
              type="button"
              variant="outline"
              className="rounded-full border-border/80"
              onClick={() => setWorkflowOpen(true)}
              aria-label={`Open ${workflowButtonLabel.toLowerCase()} for ${project.title}`}
            >
              {workflowButtonLabel}
              <ImageIcon className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </motion.article>

      {hasWorkflowPreview && workflowPreview ? (
        <WorkflowPreviewDialog
          open={workflowOpen}
          onOpenChange={setWorkflowOpen}
          preview={workflowPreview}
        />
      ) : null}
    </>
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
