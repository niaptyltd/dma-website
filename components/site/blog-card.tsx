import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { BlogPost } from "@/lib/site";
import { formatDate } from "@/utils/format";

export function BlogCard({
  post,
  featured = false
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1">
        <div className={`relative overflow-hidden ${featured ? "h-72" : "h-56"}`}>
          <Image
            alt={post.title}
            className="object-cover transition duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            src={post.heroImage}
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-muted">
            <span>{post.category}</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className={`${featured ? "text-3xl" : "text-2xl"} font-semibold tracking-[-0.03em] text-brand-ink`}>
            {post.title}
          </h3>
          <p className="text-sm leading-7 text-brand-muted">{post.excerpt}</p>
          <p className="text-sm font-semibold text-brand-ink">Read article</p>
        </div>
      </Card>
    </Link>
  );
}
