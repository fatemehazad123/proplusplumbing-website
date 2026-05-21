// PLACEHOLDER TESTIMONIALS — supplied with the Phase 2 brief. NOT real
// client quotes. Replace each entry below with verified testimonials when
// ProPlus provides them. Used on both the homepage and /for-builders, so
// edits here propagate to both.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'In ten years of custom home builds, ProPlus is the only plumbing trade I never have to chase. They show up when they say they will, the work passes inspection first try, and they coordinate with our other trades without being asked. Worth every dollar.',
    name: 'Michael Chen',
    role: 'Principal Builder, Northbridge Custom Homes',
  },
  {
    quote:
      'We brought ProPlus in for our luxury renovation on a tight six-month timeline. They redesigned the entire mechanical room, integrated radiant floor heating in three zones, and finished a week ahead of schedule. The hidden work is some of the most disciplined I’ve seen in 22 years of practice.',
    name: 'Sarah Whitman',
    role: 'Senior Architect, Whitman & Associates Architecture',
  },
  {
    quote:
      'For our subdivision development of 14 custom homes, ProPlus scaled their crew to meet our schedule and delivered consistent quality across every unit. No callbacks, no warranty issues two years in. They’re our default plumbing partner for everything now.',
    name: 'David Reyes',
    role: 'Project Director, Cordwood Developments',
  },
];

// TODO: Replace with ProPlus's actual Google Business Profile reviews URL
// once they share it. Used on both the homepage and /for-builders.
export const GOOGLE_REVIEWS_URL = 'https://g.page/r/PLACEHOLDER';
