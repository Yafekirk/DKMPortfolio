"use client";

import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site";
import { socialProfile } from "@/data/socialLinks";
import { contactSchema } from "@/lib/validations";
import { Loader2, Mail, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactPageContent() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const parsed = contactSchema.safeParse(form);

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(
          data.message ?? "Something went wrong. Please try again later.",
        );
        return;
      }

      setStatus("success");
      setStatusMessage(data.message ?? "Message sent successfully.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setStatusMessage("Unable to send your message right now.");
    }
  }

  return (
    <div className="bg-background-secondary pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageIntro
          eyebrow="Contact"
          title="Let's Work Together"
          description="I'm always open to learning opportunities, internships, collaborations, and exciting projects. Feel free to reach out!"
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                Contact Information
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                Prefer email or social platforms? Use the details below, or send
                a message through the form.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card-elevated p-4">
                  <Mail className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground-muted">
                      Email
                    </p>
                    <a
                      href={socialProfile.mailto}
                      className="mt-1 text-sm text-foreground hover:text-accent"
                    >
                      {socialProfile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card-elevated p-4">
                  <GitHubIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground-muted">
                      GitHub
                    </p>
                    <a
                      href={socialProfile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-foreground hover:text-accent"
                    >
                      github.com/{siteConfig.githubUsername}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card-elevated p-4">
                  <LinkedInIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground-muted">
                      LinkedIn
                    </p>
                    <a
                      href={socialProfile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-foreground hover:text-accent"
                    >
                      Dustin Kirk Manalastas
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card-elevated p-4">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground-muted">
                      Focus
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      Internships, collaborations, and web development projects
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-foreground">
                  Social Links
                </p>
                <SocialLinks />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-border bg-card p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  id="name"
                  value={form.name}
                  error={errors.name}
                  onChange={(value) =>
                    setForm((prev) => ({ ...prev, name: value }))
                  }
                />
                <Field
                  label="Email Address"
                  id="email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(value) =>
                    setForm((prev) => ({ ...prev, email: value }))
                  }
                />
              </div>

              <div className="mt-5">
                <Field
                  label="Subject"
                  id="subject"
                  value={form.subject}
                  error={errors.subject}
                  onChange={(value) =>
                    setForm((prev) => ({ ...prev, subject: value }))
                  }
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus-visible:ring-2 focus-visible:ring-ring"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                ) : null}
              </div>

              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    website: event.target.value,
                  }))
                }
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-0 w-0 opacity-0"
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                {statusMessage ? (
                  <p
                    className={
                      status === "success"
                        ? "text-sm text-accent"
                        : "text-sm text-red-500"
                    }
                    role="status"
                  >
                    {statusMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus-visible:ring-2 focus-visible:ring-ring"
        aria-invalid={Boolean(error)}
      />
      {error ? <p className="mt-1.5 text-xs text-red-500">{error}</p> : null}
    </div>
  );
}
