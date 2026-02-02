import type { HomeSidebarItem } from "@/types/home";
import { SidebarNavItem } from "@/components/layout/SidebarNavItem";

export function LeftSidebar({ items }: { items: HomeSidebarItem[] }) {
  return (
    <aside className="hidden w-full max-w-[240px] flex-col gap-6 lg:flex">
      <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Navegacao
        </h2>
        <div className="mt-4 flex flex-col gap-1">
          {items.map((item) => (
            <SidebarNavItem key={item.href} item={item} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-black/5 bg-white/70 p-4 text-sm text-zinc-600 shadow-sm">
        <p className="font-medium text-zinc-800">Acompanhe autores e trilhas</p>
        <p className="mt-2 text-xs leading-relaxed">
          Crie sua lista de leitura para estudar por etapas e acompanhar novos
          conteudos.
        </p>
        <button
          className="mt-4 w-full rounded-full border border-black/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-700 transition hover:border-black/30"
          type="button"
        >
          Comecar
        </button>
      </div>
    </aside>
  );
}
