import type { HomeHighlight, HomeTopic } from "@/types/home";
import { HighlightsList } from "@/components/content/HighlightsList";
import { TopicsList } from "@/components/content/TopicsList";

export function RightRail({
  highlights,
  topics,
}: {
  highlights: HomeHighlight[];
  topics: HomeTopic[];
}) {
  return (
    <aside className="hidden w-full max-w-[280px] flex-col gap-6 lg:flex">
      <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Destaques
        </h3>
        <div className="mt-4">
          <HighlightsList items={highlights} />
        </div>
      </div>

      <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Topicos recomendados
        </h3>
        <div className="mt-4">
          <TopicsList items={topics} />
        </div>
      </div>
    </aside>
  );
}
