export type HomeFeedItem = {
  slug: string;
  href: string;
  title: string;
  summary: string;
  area: string;
  subarea: string;
  category: string;
  tags: string[];
  author?: string;
  coverImage?: string;
};

export type HomeHighlight = {
  slug: string;
  href: string;
  title: string;
  label: string;
  context?: string;
};

export type HomeTopic = {
  slug: string;
  name: string;
  count?: number;
};

export type HomeSidebarItem = {
  label: string;
  href: string;
  icon: string;
};
