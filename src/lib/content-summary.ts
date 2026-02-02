import "server-only";
import fs from "fs";
import matter from "gray-matter";

const summaryCache = new Map<string, string>();

function stripMarkdown(input: string) {
  return input
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^>+/gm, " ")
    .replace(/^#+\s+/gm, " ")
    .replace(/[*_~]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function summarizeMarkdownFile(filePath: string, maxLength = 180) {
  if (summaryCache.has(filePath)) return summaryCache.get(filePath)!;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fromFrontmatter = typeof data.summary === "string" ? data.summary : "";
  const base = fromFrontmatter || stripMarkdown(content);

  const summary = base.length > maxLength ? `${base.slice(0, maxLength - 1)}…` : base;
  summaryCache.set(filePath, summary);
  return summary;
}
