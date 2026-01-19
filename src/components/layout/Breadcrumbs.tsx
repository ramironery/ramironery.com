import Link from "next/link";

function areaTitle(area: string) {
  const map: Record<string, string> = {
    infra: "Infraestrutura",
    dev: "Desenvolvimento",
    cloud: "Cloud",
    ia: "Inteligência Artificial",
  };
  return map[area] ?? area;
}

function humanize(s: string) {
  return s.replace(/-/g, " ");
}

export function Breadcrumbs({
  area,
  subarea,
  title,
}: {
  area: string;
  subarea: string;
  title: string;
}) {
  return (
    <nav className="text-sm mb-6">
      <ol className="flex flex-wrap gap-2 text-gray-600">
        <li>
          <Link className="underline" href="/">
            Home
          </Link>
        </li>
        <li>›</li>
        <li>
          <Link className="underline" href={`/${area}`}>
            {areaTitle(area)}
          </Link>
        </li>
        <li>›</li>
        <li>
          <Link className="underline" href={`/${area}/${subarea}`}>
            {humanize(subarea)}
          </Link>
        </li>
        <li>›</li>
        <li className="text-gray-900">{title}</li>
      </ol>
    </nav>
  );
}
