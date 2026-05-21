import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ARTICLES,
  formatPublishedDate,
  getArticleBySlug,
  getRelatedArticles,
} from '@/lib/articles';
import { CTA } from '@/components/sections/CTA';
import { ArticleBody } from '@/components/shared/ArticleBody';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { JsonLd } from '@/components/shared/JsonLd';
import { PageHero } from '@/components/shared/PageHero';
import { SubscribeBand } from '@/components/shared/SubscribeBand';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { articleSchema } from '@/lib/seo';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return { title: 'Article not found' };
  }
  const url = `/journal/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} | ProPlus Plumbing`,
      description: article.excerpt,
      url,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author.name] : undefined,
      images: [article.heroImage],
    },
    twitter: {
      title: `${article.title} | ProPlus Plumbing`,
      description: article.excerpt,
      images: [article.heroImage],
    },
  };
}

export default function ArticlePage({ params }: Params) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, 2);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <main>
      <PageHero
        backgroundImage={article.heroImage}
        imageOpacity={0.55}
        eyebrow={
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{formatPublishedDate(article.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime} min read</span>
          </span>
        }
        headline={article.title}
        byline={
          article.author && (
            <span>
              By{' '}
              <span className="text-white">{article.author.name}</span>
              {article.author.role && (
                <span className="text-white/60">
                  {' '}
                  · {article.author.role}
                </span>
              )}
            </span>
          )
        }
      />

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <ArticleBody blocks={article.body} />
      </section>

      {related.length > 0 && (
        <section className="bg-paper px-6 pb-24 md:px-12 md:pb-32">
          <div className="mx-auto max-w-[1100px] border-t border-line pt-16 md:pt-20">
            <SectionLabel className="mb-10">Related reading</SectionLabel>
            <div className="grid gap-10 md:grid-cols-2 md:gap-8">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      <SubscribeBand />
      <CTA />
      </main>
    </>
  );
}
