import Link from "next/link";
import { areaTitle, resolveTopic, subareaTitle } from "@/lib/navigation";

export function Breadcrumbs({
  area,
  subarea,
  title,
}: {
  area: string;
  subarea: string;
  title: string;
}) {
  const areaHref = `/${area}`;
  const subareaRef = resolveTopic(subarea);
  const subareaHref = subareaRef?.href ?? `/${area}/${subarea}`;

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
          <Link className="underline" href={areaHref}>
            {areaTitle(area)}
          </Link>
        </li>
        <li>›</li>
        <li>
          <Link className="underline" href={subareaHref}>
            {subareaTitle(area, subarea)}
          </Link>
        </li>
        <li>›</li>
        <li className="text-gray-900">{title}</li>
      </ol>
    </nav>
  );
}
