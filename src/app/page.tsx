import { Newsreader, Source_Sans_3 } from "next/font/google";
import { getHomeFeed, getHomeHighlights, getHomeSidebar, getHomeTopics } from "@/lib/home-data";
import { Topbar } from "@/components/layout/Topbar";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { RightRail } from "@/components/layout/RightRail";
import { FeedList } from "@/components/content/FeedList";

const heading = Newsreader({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Home() {
  const feed = getHomeFeed();
  const highlights = getHomeHighlights();
  const topics = getHomeTopics();
  const sidebar = getHomeSidebar();

  return (
    <div
      className={`${heading.variable} ${body.variable} min-h-screen bg-[radial-gradient(1200px_circle_at_top,_#fbf7f2,_#f7f1e8_40%,_#f1ede6_100%)] text-zinc-900`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <Topbar />

      <main className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
        <LeftSidebar items={sidebar} />

        <section className="space-y-6">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                Para voce
              </p>
              <h1
                className="mt-2 text-3xl font-semibold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Conteudos organizados para guiar seu estudo
              </h1>
            </div>
            <div className="flex gap-2 text-sm text-zinc-500">
              <button
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-700"
                type="button"
              >
                Recomendados
              </button>
              <button
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-700"
                type="button"
              >
                Recentes
              </button>
            </div>
          </header>

          <FeedList items={feed} />
        </section>

        <RightRail highlights={highlights} topics={topics} />
      </main>
    </div>
  );
}
