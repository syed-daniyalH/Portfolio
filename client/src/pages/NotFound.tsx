import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Seo from "@/components/Seo";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-20">
      <Seo
        title="404 | Syed Muhammad Daniyal Haider"
        description="The page you requested could not be found."
        noindex
      />

      <Card className="w-full max-w-lg border-border/80 bg-card/85 shadow-2xl shadow-black/30 backdrop-blur-md">
        <CardContent className="p-8 text-center md:p-10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
            <AlertCircle className="h-10 w-10" />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-primary">Page not found</p>
          <h1 className="mt-4 text-5xl font-semibold text-foreground">404</h1>
          <h2 className="mt-3 text-xl font-semibold text-foreground">
            The page you are looking for does not exist.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            It may have been moved, renamed, or deleted. The main portfolio is
            just one click away.
          </p>

          <Button
            type="button"
            onClick={() => setLocation("/")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
