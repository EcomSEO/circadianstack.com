import { Link } from "@/i18n/navigation";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-paper/70 font-mono">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link
                href={c.href}
                className="hover:text-dawn transition text-[12.5px] uppercase tracking-[0.12em]"
              >
                {c.label}
              </Link>
            ) : (
              <span className="text-paper text-[12.5px] uppercase tracking-[0.12em]">
                {c.label}
              </span>
            )}
            {i < crumbs.length - 1 && (
              <span aria-hidden className="text-rule">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
