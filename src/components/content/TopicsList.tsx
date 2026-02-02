import type { HomeTopic } from "@/types/home";

export function TopicsList({ items }: { items: HomeTopic[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((topic) => (
        <button
          key={topic.slug}
          className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-black/30"
          type="button"
        >
          {topic.name}
          {topic.count ? (
            <span className="ml-2 text-[10px] text-zinc-400">{topic.count}</span>
          ) : null}
        </button>
      ))}
    </div>
  );
}
