import { getMarkdownContent } from "@/lib/content";
import { ContentHeader } from "@/components/content/ContentHeader";
import { Prerequisites } from "@/components/content/Prerequisites";
import { NextSteps } from "@/components/content/NextSteps";
import ReactMarkdown from "react-markdown";

export default function InfraSistemasOperacionaisPage() {
  const { frontmatter, content } = getMarkdownContent(
    "infra/sistemas-operacionais/o-que-sao-sistemas-operacionais.md"
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <ContentHeader meta={frontmatter} />

      <article className="prose prose-neutral">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>

      <Prerequisites items={frontmatter.prerequisites} />
      <NextSteps items={frontmatter.next_topics} />
    </main>
  );
}
