import { Link } from "@/i18n/navigation";
import type { Hub } from "@/lib/content/hubs";

export function HubCard({ hub }: { hub: Hub }) {
  return (
    <Link
      href={`/guides/${hub.slug}`}
      className="group block p-6 bg-midnight-raised/60 border border-rule rounded-sm hover:border-dawn/40 transition h-full"
    >
      <h3 className="font-serif text-xl text-paper mb-2 group-hover:text-dawn transition">
        {hub.name}
      </h3>
      <p className="text-sm text-paper/75 leading-relaxed">{hub.oneLiner}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-dawn caps-label">
        Browse
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
