import Link from "next/link";
import type { HomeHighlight } from "@/types/home";

export function HighlightsList({ items }: { items: HomeHighlight[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.slug} className="rounded-2xl border border-black/5 bg-white/80 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            {item.label}
          </p>
          <Link href={item.href} className="mt-2 block text-sm font-semibold text-zinc-900">
            {item.title}
          </Link>
          {item.context ? (
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">{item.context}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
