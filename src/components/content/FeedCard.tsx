import Link from "next/link";
import type { HomeFeedItem } from "@/types/home";

export function FeedCard({ item }: { item: HomeFeedItem }) {
  return (
    <article className="flex gap-6 rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <span>{item.area}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-300" />
          <span>{item.subarea}</span>
        </div>
        <Link href={item.href} className="mt-3 block">
          <h3 className="text-xl font-semibold leading-snug text-zinc-900">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            {item.summary}
          </p>
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
          <span className="rounded-full bg-zinc-100 px-3 py-1">
            {item.category}
          </span>
          {item.author ? <span>Por {item.author}</span> : null}
        </div>
      </div>
      <div className="hidden w-28 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-600 text-white sm:flex">
        <span className="text-2xl font-semibold">
          {item.area.slice(0, 2).toUpperCase()}
        </span>
        <span className="text-xs uppercase tracking-[0.25em]">Hub</span>
      </div>
    </article>
  );
}
