import Link from "next/link";
import type { HomeSidebarItem } from "@/types/home";

function Icon({ name }: { name: string }) {
  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
        <path d="M3 11.5L12 4l9 7.5" strokeWidth="1.5" />
        <path d="M5 10.5V20h14v-9.5" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
      <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1.5" />
    </svg>
  );
}

export function SidebarNavItem({ item }: { item: HomeSidebarItem }) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-700 transition hover:bg-black/5"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 text-zinc-600">
        <Icon name={item.icon} />
      </span>
      <span className="font-medium">{item.label}</span>
    </Link>
  );
}
