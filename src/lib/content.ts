import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ContentMeta } from "@/types/content";

const CONTENT_ROOT = path.join(process.cwd(), "src/app");

interface MarkdownContent {
  frontmatter: ContentMeta & {
    prerequisites?: string[];
    next_topics?: string[];
  };
  content: string;
}

export function getMarkdownContent(filePath: string): MarkdownContent {
  const fullPath = path.join(CONTENT_ROOT, filePath);
  const file = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(file);

  return {
    frontmatter: data as MarkdownContent["frontmatter"],
    content,
  };
}
