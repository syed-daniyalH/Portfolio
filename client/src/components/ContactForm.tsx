import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PORTFOLIO_DATA } from "@/const";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  projectType: z.string().trim().min(1, "Please choose a project type."),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more detail.")
    .max(2000, "Please keep the message under 2000 characters."),
  company: z.string().trim().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  projectType: "",
  message: "",
  company: "",
};

export function buildMailtoHref(values: ContactFormValues) {
  const subject = `Project Inquiry - ${values.projectType}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Project Type: ${values.projectType}`,
    "",
    values.message,
  ].join("\n");

  return `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    if (values.company?.trim()) {
      toast.error("Submission blocked.");
      return;
    }

    // TODO: Replace the mailto flow with a backend submission endpoint when one is available.
    toast.success("Opening your email app...");
    window.open(buildMailtoHref(values), "_self", "noopener,noreferrer");
    form.reset(defaultValues);
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <div className="rounded-3xl border border-border/80 bg-card/80 p-6 shadow-2xl shadow-black/15 backdrop-blur-md md:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">Direct message</p>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">Send a project brief</h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          Share the type of work you need, the business goal, and any systems
          already in place. The form opens your email client with everything
          prefilled.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <input
            {...form.register("company")}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="sr-only"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PORTFOLIO_DATA.contact.projectTypes.map((projectType) => (
                      <SelectItem key={projectType} value={projectType}>
                        {projectType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about the project, timeline, and business outcome you want."
                    rows={6}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Share the outcome you want, the timeline, and any systems you
                  already use.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Preparing
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset(defaultValues)}
              className="rounded-full border-border/80"
            >
              Reset Form
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Prefer direct email?{" "}
            <a
              className="text-primary hover:underline"
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            >
              {PORTFOLIO_DATA.personal.email}
            </a>
          </p>
        </form>
      </Form>
    </div>
  );
}
