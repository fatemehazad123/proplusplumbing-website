import Image from 'next/image';
import type { ArticleBlock } from '@/lib/articles';

function Paragraph({ text }: { text: string }) {
  return (
    <p className="mb-7 text-[17px] leading-[1.75] text-ink md:text-[18px]">
      {text}
    </p>
  );
}

function Heading({ level, text }: { level: 2 | 3; text: string }) {
  if (level === 2) {
    return (
      <h2 className="mb-4 mt-14 font-display text-[28px] font-medium leading-tight tracking-[-0.02em] text-ink md:text-[32px]">
        {text}
      </h2>
    );
  }
  return (
    <h3 className="mb-3 mt-10 font-display text-[22px] font-medium leading-tight tracking-[-0.01em] text-ink">
      {text}
    </h3>
  );
}

function Pullquote({ text }: { text: string }) {
  return (
    <figure className="my-12 flex gap-6 py-2 md:gap-8">
      <span
        aria-hidden="true"
        className="block w-1 shrink-0 bg-red-brand"
      />
      <blockquote className="font-display text-[24px] font-light italic leading-[1.45] tracking-[-0.01em] text-ink md:text-[28px]">
        {text}
      </blockquote>
    </figure>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="my-8 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[17px] leading-[1.7] text-ink md:text-[18px]"
        >
          <span
            aria-hidden="true"
            className="mt-3 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-red-brand"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function BodyImage({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className="my-12">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-cream">
        <Image
          src={src}
          alt={caption ?? ''}
          fill
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-[13px] italic leading-[1.6] text-grey-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mx-auto max-w-[720px]">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case 'paragraph':
            return <Paragraph key={key} text={block.text} />;
          case 'heading':
            return <Heading key={key} level={block.level} text={block.text} />;
          case 'pullquote':
            return <Pullquote key={key} text={block.text} />;
          case 'list':
            return <List key={key} items={block.items} />;
          case 'image':
            return (
              <BodyImage key={key} src={block.src} caption={block.caption} />
            );
        }
      })}
    </div>
  );
}
