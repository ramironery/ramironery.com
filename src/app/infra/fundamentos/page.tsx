import ReactMarkdown from "react-markdown";
import { getMarkdownContent } from "@/lib/content";
import { ContentHeader } from "@/components/content/ContentHeader";
import { Prerequisites } from "@/components/content/Prerequisites";
import { NextSteps } from "@/components/content/NextSteps";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default function InfraFundamentosPage() {
  const { frontmatter, content } = getMarkdownContent(
    "infra/fundamentos/o-que-e-infraestrutura.md"
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumbs
        area={frontmatter.area}
        subarea={frontmatter.subarea}
        title={frontmatter.title}
      />

      <ContentHeader meta={frontmatter} />

      <article className="prose prose-neutral">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>

      <Prerequisites items={frontmatter.prerequisites ?? []} />
      <NextSteps items={frontmatter.next_topics ?? []} />
    </main>
  );
}
