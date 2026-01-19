import { ContentMeta } from "@/types/content";

export function ContentHeader({ meta }: { meta: ContentMeta }) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold">{meta.title}</h1>
      <p className="text-sm text-gray-500 mt-2">
        Área: {meta.area} • Subárea: {meta.subarea}
      </p>
    </header>
  );
}
