import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/articles';
import { formatPublishedDate } from '@/lib/articles';
import { ArrowRight } from '@/components/primitives/icons';

export function ArticleCard({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      data-cursor="hover"
      className="group flex flex-col rounded-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/[0.08]"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-cream">
        <Image
          src={article.heroImage}
          alt=""
          fill
          sizes={compact ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey-1">
          {article.category} · {formatPublishedDate(article.publishedAt)}
        </div>
        <h3
          className={`mt-3 line-clamp-2 font-display font-medium leading-[1.25] tracking-[-0.01em] text-ink ${
            compact ? 'text-[18px]' : 'text-[22px]'
          }`}
        >
          {article.title}
        </h3>
        {!compact && (
          <p className="mt-3 line-clamp-3 text-[14px] leading-[1.6] text-grey-1">
            {article.excerpt}
          </p>
        )}
        <div className="mt-5 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.12em] text-ink">
          <span className="border-b border-ink/20 pb-0.5 transition-colors duration-300 group-hover:border-ink">
            Read more
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/40 transition-all duration-300 group-hover:-rotate-45 group-hover:border-red-brand group-hover:bg-red-brand group-hover:text-white">
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
