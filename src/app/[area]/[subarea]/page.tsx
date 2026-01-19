import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicsForSubarea } from "@/lib/content-index";

function humanize(s: string) {
  return s.replace(/-/g, " ");
}

export default async function SubareaPage({
  params,
}: {
  params: Promise<{ area: string; subarea: string }>;
}) {
  const { area, subarea } = await params;

  if (!area || !subarea) notFound();

  const topics = getTopicsForSubarea(area, subarea);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{humanize(subarea)}</h1>

      {topics.length === 0 ? (
        <p className="text-gray-600">Nenhum tópico cadastrado ainda.</p>
      ) : (
        <ul className="list-disc pl-6">
          {topics.map((t) => (
            <li key={t.id}>
              <Link className="underline" href={t.href}>
                {t.meta.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
