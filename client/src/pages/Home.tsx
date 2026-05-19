import { lazy, Suspense, type ReactNode } from "react";

import Seo from "@/components/Seo";
import Navigation from "@/components/Navigation";
import HeroEnhanced from "@/components/HeroEnhanced";
import MetricsBanner from "@/components/MetricsBanner";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { Skeleton } from "@/components/ui/skeleton";

const ProfessionalSummary = lazy(() => import("@/components/ProfessionalSummary"));
const About = lazy(() => import("@/components/About"));
const SkillsDetailed = lazy(() => import("@/components/SkillsDetailed"));
const ProjectsEnhanced = lazy(() => import("@/components/ProjectsEnhanced"));
const Experience = lazy(() => import("@/components/Experience"));
const Education = lazy(() => import("@/components/Education"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

function LazySection({
  id,
  children,
  fallback,
}: {
  id: string;
  children: ReactNode;
  fallback: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Suspense fallback={fallback}>{children}</Suspense>
    </section>
  );
}

function SectionSkeleton({
  centered = false,
  cardCount = 0,
  form = false,
}: {
  centered?: boolean;
  cardCount?: number;
  form?: boolean;
}) {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-20 md:py-32" aria-hidden="true">
      <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-6xl"}>
        <Skeleton className="h-4 w-28 rounded-full" />
        <Skeleton className="mt-4 h-12 w-2/3 rounded-2xl" />
        <Skeleton className="mt-4 h-5 w-full rounded-xl" />
        <Skeleton className="mt-3 h-5 w-5/6 rounded-xl" />

        {cardCount > 0 ? (
          <div className={`mt-10 grid gap-4 ${cardCount > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {Array.from({ length: cardCount }).map((_, idx) => (
              <Skeleton key={idx} className="h-40 rounded-2xl" />
            ))}
          </div>
        ) : null}

        {form ? (
          <div className="mt-10 rounded-2xl border border-border/60 bg-card/70 p-6 md:p-8">
            <div className="space-y-4">
              <Skeleton className="h-6 w-40 rounded-full" />
              <Skeleton className="h-4 w-3/4 rounded-full" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Skeleton className="h-11 rounded-xl" />
                <Skeleton className="h-11 rounded-xl" />
              </div>
              <Skeleton className="h-11 rounded-xl" />
              <Skeleton className="h-32 rounded-xl" />
              <div className="flex gap-3">
                <Skeleton className="h-11 w-40 rounded-xl" />
                <Skeleton className="h-11 w-32 rounded-xl" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function FooterSkeleton() {
  return (
    <footer className="relative border-t border-border/70 bg-[#070b14]">
      <div className="container max-w-6xl mx-auto px-4 py-16" aria-hidden="true">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Skeleton className="h-10 w-40 rounded-xl" />
            <Skeleton className="h-4 w-full rounded-full" />
            <Skeleton className="h-4 w-5/6 rounded-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-28 rounded-full" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-24 rounded-full" />
              <Skeleton className="h-4 w-24 rounded-full" />
              <Skeleton className="h-4 w-24 rounded-full" />
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-24 rounded-full" />
            <div className="flex gap-3">
              <Skeleton className="h-11 w-11 rounded-lg" />
              <Skeleton className="h-11 w-11 rounded-lg" />
              <Skeleton className="h-11 w-11 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Syed Muhammad Daniyal Haider | AI Automation Engineer & Python Developer"
        description="Portfolio of Syed Muhammad Daniyal Haider, a Junior AI Automation Engineer specializing in n8n, Make.com, RAG chatbots, FastAPI systems, and polished client experiences."
        canonicalPath="/"
      />

      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main>
        <section id="home" className="scroll-mt-24">
          <HeroEnhanced />
        </section>

        <MetricsBanner />

        <LazySection
          id="summary"
          fallback={<SectionSkeleton centered cardCount={3} />}
        >
          <ProfessionalSummary />
        </LazySection>

        <LazySection id="about" fallback={<SectionSkeleton cardCount={2} />}>
          <About />
        </LazySection>

        <LazySection id="skills" fallback={<SectionSkeleton cardCount={3} />}>
          <SkillsDetailed />
        </LazySection>

        <LazySection id="projects" fallback={<SectionSkeleton centered cardCount={3} />}>
          <ProjectsEnhanced />
        </LazySection>

        <LazySection id="experience" fallback={<SectionSkeleton cardCount={2} />}>
          <Experience />
        </LazySection>

        <LazySection id="education" fallback={<SectionSkeleton cardCount={2} />}>
          <Education />
        </LazySection>

        <LazySection id="certifications" fallback={<SectionSkeleton cardCount={3} />}>
          <Certifications />
        </LazySection>

        <LazySection id="contact" fallback={<SectionSkeleton form />}>
          <Contact />
        </LazySection>
      </main>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}
