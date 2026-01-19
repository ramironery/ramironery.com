import Link from "next/link";
import { resolveTopicRef } from "@/lib/content-index";

export function NextSteps({ items }: { items: string[] }) {
  if (!items?.length) return null;

  return (
    <section className="mt-10">
      <h3 className="font-semibold mb-2">Próximos passos</h3>
      <ul className="list-disc pl-6">
        {items.map((ref) => {
          const t = resolveTopicRef(ref);
          return (
            <li key={ref}>
              {t ? (
                <Link className="underline" href={t.href}>
                  {t.meta.title}
                </Link>
              ) : (
                <span>{ref}</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
