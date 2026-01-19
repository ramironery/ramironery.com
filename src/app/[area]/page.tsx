import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubareasForArea } from "@/lib/content-index";

function areaTitle(area: string) {
  const map: Record<string, string> = {
    infra: "Infraestrutura",
    dev: "Desenvolvimento",
    cloud: "Cloud",
    ia: "Inteligência Artificial",
  };
  return map[area] ?? area;
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;

  if (!area) notFound();

  const subareas = getSubareasForArea(area);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{areaTitle(area)}</h1>

      {subareas.length === 0 ? (
        <p className="text-gray-600">Nenhuma subárea cadastrada ainda.</p>
      ) : (
        <ul className="list-disc pl-6">
          {subareas.map((s) => (
            <li key={s}>
              <Link className="underline" href={`/${area}/${s}`}>
                {s.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
