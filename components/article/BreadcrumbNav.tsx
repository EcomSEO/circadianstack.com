import { Link } from "@/i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

/** Inline breadcrumb + JSON-LD BreadcrumbList. */
export function BreadcrumbNav({ crumbs }: { crumbs: { label: string; href?: string }[] }) {
  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate flex flex-wrap items-center gap-x-2 gap-y-1"
      >
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-rule">›</span>}
            {c.href ? (
              <Link href={c.href} className="hover:text-dawn transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-paper/85 normal-case tracking-normal font-sans text-[12px]">
                {c.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
