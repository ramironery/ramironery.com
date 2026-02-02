import type { HomeFeedItem } from "@/types/home";
import { FeedCard } from "@/components/content/FeedCard";

export function FeedList({ items }: { items: HomeFeedItem[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <FeedCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
