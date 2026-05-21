import Image from 'next/image';
import Link from 'next/link';
import { SectionLabel } from '@/components/primitives/SectionLabel';

type Project = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  tag: string;
  span: string;
  aspect: string;
};

const PROJECTS: Project[] = [
  {
    href: '/projects/forest-hill-residence',
    image: '/images/projects-1.jpg',
    imageAlt: 'Forest Hill residence rough-in plumbing',
    title: 'Forest Hill Residence',
    tag: 'Custom Home · 2026',
    span: 'md:col-span-7',
    aspect: 'aspect-[7/5]',
  },
  {
    href: '/projects/rosedale-heated-floors',
    image: '/images/projects-2.jpg',
    imageAlt: 'Rosedale heated floor system',
    title: 'Rosedale Heated Floors',
    tag: 'Radiant Heating · 2026',
    span: 'md:col-span-5',
    aspect: 'aspect-[5/6]',
  },
  {
    href: '/projects/yorkville-townhomes',
    image: '/images/projects-3.jpg',
    imageAlt: 'Yorkville townhomes installation',
    title: 'Yorkville Townhomes',
    tag: 'Subdivision · 12 units · 2025',
    span: 'md:col-span-6',
    aspect: 'aspect-[6/5]',
  },
  {
    href: '/projects/lawrence-park-driveway',
    image: '/images/projects-4.jpg',
    imageAlt: 'Lawrence Park heated driveway',
    title: 'Lawrence Park Driveway',
    tag: 'Snow Melting · 2026',
    span: 'md:col-span-6',
    aspect: 'aspect-[6/5]',
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-cream px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">05 / Selected work</SectionLabel>
            <h2 className="font-display text-[clamp(48px,6vw,96px)] font-light leading-none tracking-[-0.03em] text-ink">
              Recent{' '}
              <em className="font-normal italic text-red-brand">projects</em>.
            </h2>
          </div>
          <p className="max-w-[380px] text-[15px] leading-[1.6] text-grey-1">
            A small selection of recent custom homes, renovations, and radiant
            heating projects across the Greater Toronto Area.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {PROJECTS.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              data-cursor="hover"
              className={`group relative overflow-hidden rounded-sm ${project.span}`}
            >
              <div
                className={`relative ${project.aspect} overflow-hidden rounded-sm`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.08]"
                />
              </div>
              <div className="flex items-start justify-between gap-5 px-1 pt-5">
                <h3 className="font-display text-[22px] font-normal leading-[1.1] tracking-[-0.02em] text-ink">
                  {project.title}
                </h3>
                <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.15em] text-grey-1">
                  {project.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
