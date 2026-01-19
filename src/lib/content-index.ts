import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ContentMeta } from "@/types/content";

export type TopicEntry = {
  id: string;       // area:subarea:topic
  slug: string;     // topic slug (nome do arquivo sem .md)
  area: string;
  subarea: string;
  href: string;     // /infra/redes/o-que-e-redes
  filePath: string; // absoluto no disco
  meta: ContentMeta;
};

export type ContentIndex = {
  topicsById: Map<string, TopicEntry>;
  idBySimpleSlug: Map<string, string>; // slug -> id (somente se slug for único)
  collisions: Set<string>;
  areas: string[];
  subareasByArea: Map<string, string[]>;
  topicsByAreaSubarea: Map<string, TopicEntry[]>;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

let _cache: ContentIndex | null = null;

function isMarkdown(file: string) {
  return file.endsWith(".md") || file.endsWith(".mdx");
}

function walkFiles(dir: string, out: string[] = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkFiles(full, out);
    else if (e.isFile() && isMarkdown(e.name)) out.push(full);
  }
  return out;
}

function readTopic(filePath: string): TopicEntry | null {
  // Espera: content/<area>/<subarea>/<topic>.md
  const rel = path.relative(CONTENT_ROOT, filePath);
  const parts = rel.split(path.sep);

  if (parts.length !== 3) return null;

  const [area, subarea, fileName] = parts;
  const slug = fileName.replace(/\.mdx?$/, "");

  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  const meta = data as Partial<ContentMeta>;

  const safeMeta: ContentMeta = {
    title: meta.title ?? slug,
    area: meta.area ?? area,
    subarea: meta.subarea ?? subarea,
    category: meta.category ?? "geral",
    prerequisites: Array.isArray(meta.prerequisites) ? meta.prerequisites : [],
    next_topics: Array.isArray(meta.next_topics) ? meta.next_topics : [],
    tags: Array.isArray(meta.tags) ? meta.tags : [],
  };

  const href = `/${area}/${subarea}/${slug}`;
  const id = `${area}:${subarea}:${slug}`;

  return {
    id,
    slug,
    area,
    subarea,
    href,
    filePath,
    meta: safeMeta,
  };
}

function buildIndex(): ContentIndex {
  if (!fs.existsSync(CONTENT_ROOT)) {
    throw new Error(`Pasta de conteúdo não encontrada: ${CONTENT_ROOT}`);
  }

  const files = walkFiles(CONTENT_ROOT);

  const topicsById = new Map<string, TopicEntry>();
  const idBySimpleSlug = new Map<string, string>();
  const collisions = new Set<string>();

  const subareasByAreaSet = new Map<string, Set<string>>();
  const topicsByAreaSubarea = new Map<string, TopicEntry[]>();

  for (const fp of files) {
    const topic = readTopic(fp);
    if (!topic) continue;

    topicsById.set(topic.id, topic);

    // slug simples -> id (só funciona se for único)
    if (idBySimpleSlug.has(topic.slug)) {
      collisions.add(topic.slug);
    } else {
      idBySimpleSlug.set(topic.slug, topic.id);
    }

    if (!subareasByAreaSet.has(topic.area)) subareasByAreaSet.set(topic.area, new Set());
    subareasByAreaSet.get(topic.area)!.add(topic.subarea);

    const key = `${topic.area}:${topic.subarea}`;
    if (!topicsByAreaSubarea.has(key)) topicsByAreaSubarea.set(key, []);
    topicsByAreaSubarea.get(key)!.push(topic);
  }

  // Ordena tópicos por título
  for (const list of topicsByAreaSubarea.values()) {
    list.sort((a, b) => a.meta.title.localeCompare(b.meta.title, "pt-BR"));
  }

  const areas = Array.from(subareasByAreaSet.keys()).sort();

  const subareasByArea = new Map<string, string[]>();
  for (const [area, set] of subareasByAreaSet.entries()) {
    subareasByArea.set(area, Array.from(set).sort());
  }

  // Remove slugs que colidem (pra não resolver errado)
  for (const slug of collisions) {
    idBySimpleSlug.delete(slug);
  }

  return {
    topicsById,
    idBySimpleSlug,
    collisions,
    areas,
    subareasByArea,
    topicsByAreaSubarea,
  };
}

export function getContentIndex(): ContentIndex {
  if (_cache) return _cache;
  _cache = buildIndex();
  return _cache;
}

/**
 * Resolve refs que podem ser:
 * - "o-que-e-redes" (slug simples, se for único no projeto)
 * - "infra:redes:o-que-e-redes" (id completo, sempre funciona)
 */
export function resolveTopicRef(ref: string): TopicEntry | null {
  const idx = getContentIndex();
  if (!ref) return null;

  if (ref.includes(":")) return idx.topicsById.get(ref) ?? null;

  const id = idx.idBySimpleSlug.get(ref);
  return id ? idx.topicsById.get(id) ?? null : null;
}

export function getTopicsForSubarea(area: string, subarea: string) {
  const idx = getContentIndex();
  return idx.topicsByAreaSubarea.get(`${area}:${subarea}`) ?? [];
}

export function getSubareasForArea(area: string) {
  const idx = getContentIndex();
  return idx.subareasByArea.get(area) ?? [];
}

export function getMarkdownByRoute(area: string, subarea: string, topic: string) {
  if (!area || !subarea || !topic) return null;

  const filePathMd = path.join(CONTENT_ROOT, area, subarea, `${topic}.md`);
  const filePathMdx = path.join(CONTENT_ROOT, area, subarea, `${topic}.mdx`);

  const fp = fs.existsSync(filePathMd)
    ? filePathMd
    : fs.existsSync(filePathMdx)
    ? filePathMdx
    : null;

  if (!fp) return null;

  const raw = fs.readFileSync(fp, "utf8");
  const { data, content } = matter(raw);

  return {
    frontmatter: data as ContentMeta,
    content,
  };
}
