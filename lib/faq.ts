// FAQ source of truth. Edits here propagate to:
//   - /faq page (renders the accordion)
//   - the FAQPage JSON-LD schema (built from this data via lib/seo.ts)
//   - the "Frequently asked" cross-link section on each service detail page
//     (each service page passes faqIds that resolve here)

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQCategory = {
  id: string;
  label: string;
  headline: string;
  questions: FAQItem[];
};

export const faqs: FAQCategory[] = [
  {
    id: 'working-with-proplus',
    label: '01 / Working with us',
    headline: 'Working with ProPlus',
    questions: [
      {
        id: 'project-types',
        question:
          'What types of projects does ProPlus Plumbing specialize in?',
        answer:
          'We specialize in custom home plumbing, major renovations, radiant floor heating systems, and snow melting systems for luxury residential and commercial properties across Toronto and the Greater Toronto Area. We are not a service plumbing or emergency repair business. Every project we take on is designed and installed end to end.',
      },
      {
        id: 'service-area',
        question: 'What areas of the GTA do you serve?',
        answer:
          'ProPlus Plumbing serves Toronto, North York, Vaughan, Markham, Richmond Hill, and the broader Greater Toronto Area. For larger projects outside this region, please contact us directly to discuss feasibility.',
      },
      {
        id: 'typical-clients',
        question: 'Who are your typical clients?',
        answer:
          'We work primarily with custom home builders, architectural firms, luxury homeowners, subdivision developers, and property managers. Our clients are typically planning new builds, major renovations, or premium heating systems where quality and reliability matter more than the lowest possible price.',
      },
      {
        id: 'consultation-process',
        question: 'How does the consultation and quoting process work?',
        answer:
          'After your initial consultation request, we schedule a site visit or meeting with you, your builder, and your architect. We review the project scope, design intent, and timeline, then provide a detailed quote with line-item pricing, materials specification, and projected schedule. There is no charge for the consultation.',
      },
      {
        id: 'licensed-insured',
        question: 'Are you licensed and insured?',
        answer:
          'Yes. ProPlus Plumbing Inc. is fully licensed in Ontario, bonded, and carries comprehensive general liability and workers compensation insurance. License and insurance documentation is available on request.',
      },
      {
        id: 'years-in-business',
        question: 'How long has ProPlus been in business?',
        answer:
          'ProPlus Plumbing Inc. opened in 2015 as a family-owned and operated business. Over a decade of experience, we have completed over 150 custom home plumbing projects across Toronto.',
      },
    ],
  },
  {
    id: 'permits-code',
    label: '02 / Permits & code compliance',
    headline: 'Permits and code compliance',
    questions: [
      {
        id: 'need-permit',
        question: 'Do I need a plumbing permit for my custom home project?',
        answer:
          'Yes. Any new construction or significant alteration to plumbing systems in Toronto requires a City of Toronto plumbing permit issued under the Ontario Building Code. This includes new homes, additions, major renovations, fixture relocations, and changes to drainage or supply systems. Only direct fixture replacements without piping changes are exempt.',
      },
      {
        id: 'permit-handler',
        question: 'Who handles the permit application?',
        answer:
          'ProPlus Plumbing handles the full permit application process on your behalf, including preparing the required plumbing drawings, submitting the application, scheduling inspections, and managing all communication with City of Toronto plumbing inspectors through to final sign-off.',
      },
      {
        id: 'permit-timeline',
        question: 'How long does it take to get a plumbing permit in Toronto?',
        answer:
          'For a complete, well-prepared application, residential plumbing permits in Toronto are typically issued within five to ten business days. Larger custom-home projects or projects requiring engineered drawings may take longer. We build permit timelines into our project schedules from the start.',
      },
      {
        id: 'unpermitted-work',
        question: 'What happens if plumbing work is done without a permit?',
        answer:
          'Unpermitted plumbing work can void home insurance coverage in the event of a water damage claim, reduce property resale value, and result in city orders requiring the work to be opened up and rebuilt to code. We do not perform unpermitted work.',
      },
      {
        id: 'inspection-guarantee',
        question: 'Is your work guaranteed to pass inspection?',
        answer:
          'Yes. All our work is designed and installed to the latest Ontario Building Code. We schedule inspections proactively and our work consistently passes inspection on the first attempt. In the rare case of an inspector deficiency, we correct it at no additional cost to the client.',
      },
    ],
  },
  {
    id: 'custom-home-plumbing',
    label: '03 / Custom home plumbing',
    headline: 'Custom home plumbing',
    questions: [
      {
        id: 'what-included',
        question: 'What does plumbing for a new custom home include?',
        answer:
          'Complete plumbing for a new custom home includes the water supply system, the drain-waste-vent system, all fixture installations, hot water tank or boiler installation, gas line installation for appliances, and any integrated radiant or snow-melt systems. We design and install everything end to end.',
      },
      {
        id: 'rough-in-duration',
        question: 'How long does plumbing rough-in take for a custom home?',
        answer:
          'Plumbing rough-in for a typical 4,000 to 6,000 square foot custom home takes two to four weeks, scheduled in coordination with framing and other trades. Final fixture installation happens later in the project after drywall, flooring, and finishes are in place.',
      },
      {
        id: 'subdivisions',
        question: 'Can you work on subdivision or multi-unit developments?',
        answer:
          'Yes. ProPlus Plumbing scales operations for subdivision developments, expanding crew and resources to handle multiple homes simultaneously while maintaining consistent quality and code compliance across every unit. We work with developers on projects ranging from small townhouse developments to multi-home subdivisions.',
      },
      {
        id: 'trade-coordination',
        question: 'Do you coordinate with other trades on a project?',
        answer:
          'Yes. Tight coordination with HVAC, electrical, and framing trades is essential to a successful custom home build. We participate in trade coordination meetings, sequence our work to integrate cleanly with other trades, and maintain disciplined site cleanliness and communication throughout the project.',
      },
      {
        id: 'system-lifespan',
        question:
          'How long do well-installed custom home plumbing systems last?',
        answer:
          'A custom home plumbing system installed correctly with quality materials should last 50 years or more for the underlying piping infrastructure, with fixtures and water heaters replaced on shorter cycles. Proper sizing, correct slope, code-compliant installation, and quality materials are the determining factors.',
      },
    ],
  },
  {
    id: 'radiant-snowmelt',
    label: '04 / Radiant heating & snow melting',
    headline: 'Radiant heating and snow melting',
    questions: [
      {
        id: 'radiant-cost',
        question:
          'How much does radiant floor heating cost in a Toronto custom home?',
        answer:
          'For a new construction custom home, radiant floor heating typically costs $15 to $30 per square foot for the in-floor system, plus $12,000 to $25,000 for a dedicated high-efficiency boiler. Total installed cost for a 4,000 square foot home with hydronic radiant on the main floor and basement typically ranges from $50,000 to $90,000.',
      },
      {
        id: 'radiant-worth-it',
        question: 'Is radiant heating worth the investment?',
        answer:
          'For most luxury custom homes in Toronto, yes. Radiant heating offers superior comfort, even temperature distribution, 10 to 30 percent lower operating costs than equivalent forced-air systems, and a 15 to 25 year operating life. The upfront premium typically pays back over the life of the home through operating savings and improved resale value.',
      },
      {
        id: 'heated-driveway-cost',
        question: 'How much does a heated driveway cost?',
        answer:
          'For new construction, a heated driveway system for a 1,000 square foot driveway costs between $25,000 and $45,000 fully installed for a hydronic system, plus integration with the home heating infrastructure. Operating costs typically range from $200 to $700 per Toronto winter depending on weather severity.',
      },
      {
        id: 'integrated-system',
        question:
          'Can you integrate radiant heating, snow melting, and domestic hot water in one system?',
        answer:
          'Yes. For most luxury custom homes, the smart design integrates all hydronic loads, radiant floor heating, snow melting, pool heating where applicable, and domestic hot water, into a single boiler system. This approach is significantly more efficient and less expensive than separate systems for each function.',
      },
      {
        id: 'radiant-lifespan',
        question:
          'How long do radiant heating and snow melting systems last?',
        answer:
          'A properly designed and installed hydronic radiant system has an operating life of 25 to 50 years. The underlying PEX tubing, when correctly sized and installed, has an expected life beyond 50 years. The boiler typically requires replacement every 15 to 25 years depending on the manufacturer and maintenance.',
      },
      {
        id: 'rebates',
        question: 'What rebates are available for radiant heating in Ontario?',
        answer:
          'The Canada Greener Homes Grant offers up to $5,000 for qualifying energy-efficient home upgrades, which can include high-efficiency boilers and radiant heating systems. Some local utility companies offer additional rebates. We help clients identify and apply for applicable programs during the design phase.',
      },
    ],
  },
];

export function getFAQById(id: string): FAQItem | undefined {
  for (const category of faqs) {
    for (const item of category.questions) {
      if (item.id === id) return item;
    }
  }
  return undefined;
}
