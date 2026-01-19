import Link from "next/link";
import { resolveMany } from "@/lib/navigation";

export function Prerequisites({ items }: { items: string[] }) {
  if (!items?.length) return null;

  const resolved = resolveMany(items);

  return (
    <section className="mt-10">
      <h3 className="font-semibold mb-2">Pré-requisitos</h3>
      <ul className="list-disc pl-6">
        {resolved.map(({ slug, ref }) => (
          <li key={slug}>
            {ref ? (
              <Link className="underline" href={ref.href}>
                {ref.title}
              </Link>
            ) : (
              <span>{slug}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
