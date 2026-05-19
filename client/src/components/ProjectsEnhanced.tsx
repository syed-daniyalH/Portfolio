import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Image as ImageIcon } from "lucide-react";
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

type WorkflowSnip = {
  title: string;
  summary: string;
  steps: string[];
};

const WORKFLOW_SNIPS: Record<number, WorkflowSnip[]> = {
  2: [
    {
      title: "Twilio intake + data lookup",
      summary:
        "Inbound SMS is authenticated, matched against services, and checked against dealership records before dispatch logic runs.",
      steps: [
        "Twilio",
        "HTTP Auth token",
        "HTTP GET Services",
        "HTTP GET Dealerships",
        "Array aggregator",
        "Services checker",
      ],
    },
    {
      title: "AI routing + response",
      summary:
        "The Brain decides the route, The Translator normalizes the payload, and the router returns the customer response.",
      steps: ["The Brain", "The Translator", "Router", "HTTP", "Response", "Ignore"],
    },
  ],
  3: [
    {
      title: "Webhook intake + OCR parse",
      summary:
        "Race notes and images enter the intake flow, are parsed, and move through OCR and AI extraction.",
      steps: ["Webhooks", "JSON parser", "Set Variable", "Open AI OCR HTTP", "JSON"],
    },
    {
      title: "Structured reporting",
      summary:
        "Extracted race metrics are normalized and written into reporting outputs for the web app and sheets.",
      steps: [
        "Backend POST",
        "Router",
        "Write to PRESSURES",
        "Write to ALIGNMENT",
        "Write to SUSPENSION",
        "Tire history",
        "Tire inventory",
        "Tire temperatures",
        "Tracks",
      ],
    },
  ],
};

function SnipsDialog({
  projectTitle,
  open,
  onOpenChange,
  snips,
}: {
  projectTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  snips: WorkflowSnip[];
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl border-border/80 bg-[#08111f] p-0 text-foreground shadow-2xl shadow-black/40">
        <div className="border-b border-border/70 px-6 py-5 md:px-8">
          <DialogHeader className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Workflow snips
              </span>
              <span className="rounded-full border border-border/70 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Make.com
              </span>
            </div>
            <DialogTitle className="text-2xl font-semibold text-foreground md:text-3xl">
              {projectTitle}
            </DialogTitle>
            <DialogDescription className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              These snapshots mirror the actual workflow structure behind the project so visitors can
              inspect the automation path instead of only reading the summary.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
          {snips.map((snip, idx) => (
            <div
              key={snip.title}
              className="rounded-3xl border border-border/80 bg-card/70 p-5 shadow-lg shadow-black/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Snip {idx + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{snip.title}</h3>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                  <ImageIcon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">{snip.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {snip.steps.map((step, stepIdx) => (
                  <span
                    key={`${snip.title}-${step}`}
                    className="rounded-full border border-border/80 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {String(stepIdx + 1).padStart(2, "0")}. {step}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border/70 px-6 py-5 md:px-8">
          <p className="text-xs text-muted-foreground">
            Workflow snapshots from the live Make.com scenarios.
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
  const [snipsOpen, setSnipsOpen] = useState(false);
  const projectSnips = WORKFLOW_SNIPS[project.id] ?? [];
  const liveHref = project.links?.live ?? (project.liveDemo ? project.link : undefined);
  const hasSnips = projectSnips.length > 0;

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

          {hasSnips ? (
            <Button
              type="button"
              variant="outline"
              className="rounded-full border-border/80"
              onClick={() => setSnipsOpen(true)}
            >
              View Snips
              <ImageIcon className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </motion.article>

      {hasSnips ? (
        <SnipsDialog
          projectTitle={`${project.title} workflow snapshots`}
          open={snipsOpen}
          onOpenChange={setSnipsOpen}
          snips={projectSnips}
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
