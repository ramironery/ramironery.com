import Link from "next/link";

export function Topbar() {
  return (
    <div className="sticky top-0 z-30 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-6 py-4">
        <button
          aria-label="Abrir menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-sm text-zinc-700 lg:hidden"
          type="button"
        >
          <span className="text-lg">≡</span>
        </button>

        <Link href="/" className="text-lg font-semibold tracking-tight">
          IT Hub
        </Link>

        <div className="flex flex-1 items-center">
          <label className="relative w-full max-w-xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-zinc-400">
              ⌕
            </span>
            <input
              type="search"
              placeholder="Buscar aulas, tópicos e trilhas"
              className="w-full rounded-full border border-black/10 bg-white px-10 py-2 text-sm text-zinc-700 shadow-sm focus:border-black/30 focus:outline-none"
            />
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="hidden rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-black/30 lg:inline-flex"
            type="button"
          >
            Entrar
          </button>
          <button
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            type="button"
          >
            Nova aula
          </button>
        </div>
      </div>
    </div>
  );
}
