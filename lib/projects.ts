export type ProjectCategory =
  | 'Custom Homes'
  | 'Renovations'
  | 'Floor Heating'
  | 'Snow Melting';

export type Project = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: ProjectCategory;
  year: string;
  span: 'sm' | 'md' | 'lg';
};

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  'Custom Homes',
  'Renovations',
  'Floor Heating',
  'Snow Melting',
] as const;

// Photos in this grid are dedicated to /projects only. None of them are
// reused on the homepage Projects section (which uses projects-1..4.jpg) or
// on any service-detail Featured Work block (which use {service}-grid-*.jpg).
export const PROJECTS: Project[] = [
  {
    id: 'lawrence-park-custom',
    src: '/images/projects-grid-1.jpg',
    alt: 'Custom home plumbing rough-in for a Lawrence Park residence — Toronto',
    title: 'Lawrence Park Residence',
    category: 'Custom Homes',
    year: '2025',
    span: 'md',
  },
  {
    id: 'davisville-custom',
    src: '/images/projects-grid-2.jpg',
    alt: 'Custom home plumbing detail for a Davisville Toronto build',
    title: 'Davisville Custom Build',
    category: 'Custom Homes',
    year: '2025',
    span: 'sm',
  },
  {
    id: 'high-park-renovation',
    src: '/images/projects-grid-3.jpg',
    alt: 'Major plumbing renovation in a High Park Toronto home',
    title: 'High Park Renovation',
    category: 'Renovations',
    year: '2024',
    span: 'md',
  },
  {
    id: 'leaside-renovation',
    src: '/images/projects-grid-4.jpg',
    alt: 'Plumbing renovation rough-in for a Leaside Toronto home',
    title: 'Leaside Renovation',
    category: 'Renovations',
    year: '2024',
    span: 'sm',
  },
  {
    id: 'moore-park-heated',
    src: '/images/projects-grid-5.jpg',
    alt: 'Hydronic radiant heating manifold for a Moore Park Toronto home',
    title: 'Moore Park Heated Floors',
    category: 'Floor Heating',
    year: '2025',
    span: 'md',
  },
  {
    id: 'summerhill-heated',
    src: '/images/projects-grid-6.jpg',
    alt: 'Radiant floor heating loops laid in a Summerhill Toronto residence',
    title: 'Summerhill Hydronic',
    category: 'Floor Heating',
    year: '2025',
    span: 'sm',
  },
  {
    id: 'bridle-path-snow',
    src: '/images/projects-grid-7.jpg',
    alt: 'Heated driveway snow-melting installation at a Bridle Path Toronto property',
    title: 'Bridle Path Driveway',
    category: 'Snow Melting',
    year: '2026',
    span: 'md',
  },
  {
    id: 'rosedale-snow',
    src: '/images/projects-grid-8.jpg',
    alt: 'Snow-melting walkway system at a Rosedale Toronto entrance',
    title: 'Rosedale Entrance',
    category: 'Snow Melting',
    year: '2026',
    span: 'sm',
  },
];
