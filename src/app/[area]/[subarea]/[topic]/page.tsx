import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { getMarkdownByRoute } from "@/lib/content-index";
import { ContentHeader } from "@/components/content/ContentHeader";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Prerequisites } from "@/components/content/Prerequisites";
import { NextSteps } from "@/components/content/NextSteps";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ area: string; subarea: string; topic: string }>;
}) {
  const { area, subarea, topic } = await params;

  if (!area || !subarea || !topic) notFound();

  const data = getMarkdownByRoute(area, subarea, topic);
  if (!data) notFound();

  const meta = data.frontmatter;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumbs area={meta.area} subarea={meta.subarea} title={meta.title} />

      <ContentHeader meta={meta} />

      <article className="prose prose-neutral">
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </article>

      <Prerequisites items={meta.prerequisites ?? []} />
      <NextSteps items={meta.next_topics ?? []} />
    </main>
  );
}
