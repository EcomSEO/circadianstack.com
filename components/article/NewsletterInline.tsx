/**
 * NewsletterInline — mid-article amber-bordered card on midnight surface.
 * Calm, healthline-grade trust signal: "Join 12,000…" copy + email + button.
 */
export function NewsletterInline() {
  return (
    <aside
      aria-label="Newsletter signup"
      className="my-10 md:my-12 rounded-md border bg-midnight-raised/65 p-5 md:p-6"
      style={{ borderColor: "rgba(230,169,64,0.45)" }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
            DISPATCH NEWSLETTER
          </div>
          <h3
            className="mt-1.5 text-paper font-semibold leading-snug"
            style={{ fontSize: "18px", letterSpacing: "-0.012em" }}
          >
            Join 12,000 reading the chronobiology log every Sunday.
          </h3>
          <p className="mt-1.5 text-paper/75 text-[14px] leading-snug max-w-md">
            One protocol breakdown per week. Primary sources only. Unsubscribe in one click.
          </p>
        </div>
        <form
          className="flex gap-2 md:max-w-sm md:flex-1"
          action="/newsletter"
          method="get"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="flex-1 min-w-0 px-3 py-2.5 bg-midnight-deep border border-rule rounded-sm text-paper text-[14px] outline-none focus-visible:border-dawn"
          />
          <button type="submit" className="btn-primary !py-2 !px-4 !min-h-0">
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
