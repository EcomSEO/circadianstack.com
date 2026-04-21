"use client";

import { FormEvent, useState } from "react";

export function EmailCapture({
  headline = "Get your personalized 7-day Protocol.",
  subhead = "Take the 3-min Chronotype Quiz → get a personalized PDF with 3 Protocol cards tailored to your circadian phase. Free.",
  variant = "inline",
  buttonLabel = "Start the quiz",
}: {
  headline?: string;
  subhead?: string;
  variant?: "inline" | "end-of-article";
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 400));
    setStatus("ok");
  }

  const wrapper =
    variant === "end-of-article"
      ? "my-12 p-8 rounded-lg bg-dawn/10 border border-dawn/20 text-center"
      : "my-12 p-8 rounded-lg bg-paper/5 border border-paper/10 text-center";

  return (
    <section id="email-capture" className={wrapper}>
      <h2 className="font-serif text-2xl text-paper mb-2">{headline}</h2>
      <p className="text-paper/80 max-w-xl mx-auto">{subhead}</p>
      {status === "ok" ? (
        <p className="mt-6 text-dawn">Thanks — check your inbox.</p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto"
        >
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-md border border-paper/20 px-4 py-3 bg-midnight text-paper"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-md bg-dawn px-6 py-3 text-midnight font-semibold hover:bg-ember transition disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : buttonLabel}
          </button>
        </form>
      )}
      <p className="mt-4 text-xs text-paper/50 max-w-md mx-auto">
        By subscribing, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
        One useful email a week. Unsubscribe anytime.
      </p>
    </section>
  );
}
