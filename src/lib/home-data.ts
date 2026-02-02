import "server-only";
import { getContentIndex, TopicEntry } from "@/lib/content-index";
import { areaTitle } from "@/lib/navigation";
import { summarizeMarkdownFile } from "@/lib/content-summary";
import type {
  HomeFeedItem,
  HomeHighlight,
  HomeTopic,
  HomeSidebarItem,
} from "@/types/home";

const highlightSlugs = [
  "o-que-e-infraestrutura",
  "o-que-e-sistema-operacional",
  "o-que-e-redes",
];

function topicToFeedItem(topic: TopicEntry): HomeFeedItem {
  return {
    slug: topic.slug,
    href: topic.href,
    title: topic.meta.title,
    summary: topic.meta.summary ?? summarizeMarkdownFile(topic.filePath),
    area: topic.area,
    subarea: topic.subarea,
    category: topic.meta.category,
    tags: topic.meta.tags,
    author: topic.meta.author,
    coverImage: topic.meta.coverImage,
  };
}

export function getHomeFeed(limit = 12): HomeFeedItem[] {
  const idx = getContentIndex();
  const allTopics: TopicEntry[] = [];

  for (const list of idx.topicsByAreaSubarea.values()) {
    allTopics.push(...list);
  }

  return allTopics
    .sort((a, b) => a.meta.title.localeCompare(b.meta.title, "pt-BR"))
    .map(topicToFeedItem)
    .slice(0, limit);
}

export function getHomeHighlights(): HomeHighlight[] {
  const idx = getContentIndex();
  const highlights: HomeHighlight[] = [];

  for (const slug of highlightSlugs) {
    const id = idx.idBySimpleSlug.get(slug);
    if (!id) continue;
    const topic = idx.topicsById.get(id);
    if (!topic) continue;
    highlights.push({
      slug: topic.slug,
      href: topic.href,
      title: topic.meta.title,
      label: "Destaque",
      context: topic.meta.summary ?? summarizeMarkdownFile(topic.filePath, 120),
    });
  }

  return highlights.slice(0, 3);
}

export function getHomeTopics(limit = 6): HomeTopic[] {
  const idx = getContentIndex();
  const counts = new Map<string, number>();

  for (const topic of idx.topicsById.values()) {
    for (const tag of topic.meta.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  const topics = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      count,
    }));

  if (topics.length > 0) return topics;

  return idx.areas.slice(0, limit).map((area) => ({
    name: areaTitle(area),
    slug: area,
  }));
}

export function getHomeSidebar(): HomeSidebarItem[] {
  const idx = getContentIndex();
  const items: HomeSidebarItem[] = [
    { label: "Home", href: "/", icon: "home" },
  ];

  for (const area of idx.areas) {
    items.push({
      label: areaTitle(area),
      href: `/${area}`,
      icon: "stack",
    });
  }

  return items;
}
