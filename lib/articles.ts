export type ArticleCategory = 'Industry' | 'Technical' | 'Decision Guide';

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'pullquote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  publishedAt: string; // ISO date
  heroImage: string;
  body: ArticleBlock[];
  readingTime: number; // minutes
  author?: { name: string; role: string };
};

// PLACEHOLDER ARTICLE — supplied with the Phase 2 journal brief.
// Replace title / excerpt / body / readingTime when ProPlus authors real
// content. Keep the slug stable if the article is being rewritten in place,
// or change the slug + add a redirect if it's a different piece.
const ARTICLE_1: Article = {
  slug: 'custom-home-plumber-vs-service-plumber',
  title: 'What separates a custom-home plumber from a service plumber',
  excerpt:
    'Why hiring the wrong category of plumbing trade can cost custom-home builders months and tens of thousands of dollars.',
  category: 'Industry',
  publishedAt: '2026-04-15',
  heroImage: '/images/article-plumber-vs-service.jpg',
  readingTime: 7,
  body: [
    {
      type: 'paragraph',
      text: 'On paper, a plumber is a plumber. They’re all licensed, they all install pipes, they all sign off on inspections. But anyone who has worked on a custom-home build with the wrong trade partner knows the categories diverge sharply once the stakes get real.',
    },
    {
      type: 'paragraph',
      text: 'A service plumber’s job is to solve a problem in front of them — a leak, a clogged drain, a failed water heater. The work is reactive. The systems they’re working on already exist; they fix or replace what’s broken. The economics of their business depend on volume: many small jobs, fast turnaround, predictable pricing.',
    },
    {
      type: 'paragraph',
      text: 'A custom-home plumber’s job is to design and install systems that don’t yet exist, for properties that don’t yet exist, in coordination with trades that don’t yet have their own work in place. Every project is a multi-month engagement. The work is proactive — every decision, from the size of the main water line to the placement of mechanical rooms, gets specified before the first pipe is cut.',
    },
    { type: 'heading', level: 2, text: 'Where the categories actually diverge' },
    {
      type: 'paragraph',
      text: 'The skills required are not the same. A service plumber can install a great water heater. A custom-home plumber can design a redundant hot-water system for a 9,000 sq ft home with three independent zones, sized correctly for the family’s expected peak draw, integrated with radiant floor heating, and coordinated with the architect’s bathroom design so nothing has to be re-routed later.',
    },
    {
      type: 'paragraph',
      text: 'The relationships required are not the same. A service plumber’s customers are homeowners with broken things. A custom-home plumber’s customers are builders, architects, and developers running multi-trade construction sites. The communication discipline, scheduling rigor, and trade coordination skills are entirely different.',
    },
    {
      type: 'paragraph',
      text: 'And critically, the consequences of getting it wrong are not the same. A misdiagnosed leak costs a service call. A misdesigned plumbing rough-in for a luxury build can mean tearing out finished walls, rescheduling other trades, and missing a homeowner’s move-in date by months.',
    },
    { type: 'heading', level: 2, text: 'What to ask before hiring' },
    {
      type: 'paragraph',
      text: 'The right questions cut through the marketing. Ask any plumbing trade what percentage of their work is new construction versus service calls. Ask how many custom homes they completed in the last twelve months. Ask for references from builders or architects, not from homeowners. Ask whether they design from architectural drawings or work from punch lists handed to them.',
    },
    {
      type: 'paragraph',
      text: 'None of these questions are trick questions. They simply identify which category the trade actually operates in. A service plumber’s honest answer will reveal a different business model than a custom-home plumber’s. Neither is wrong. They are different services for different buyers.',
    },
    {
      type: 'pullquote',
      text: 'The wrong category of plumber on a custom-home project is not a small mistake to recover from. It is a structural decision that ripples through the entire build.',
    },
    { type: 'heading', level: 2, text: 'Why it matters for builders' },
    {
      type: 'paragraph',
      text: 'Builders who hire service plumbers for custom-home work usually do so because the relationship is convenient — the trade is already on speed-dial, the prices look competitive on paper, and the work technically gets done. The hidden costs surface later: rework, schedule slippage, code-compliance friction at final inspection, callbacks from homeowners after move-in.',
    },
    {
      type: 'paragraph',
      text: 'The builders who consistently deliver high-end custom homes on time and on budget tend to have one thing in common — they treat their plumbing trade as a design partner, not a vendor. They bring them in at the schematic phase, not the framing phase. They pay for that level of involvement because the alternative costs more.',
    },
    {
      type: 'paragraph',
      text: 'For Toronto’s custom-home market, this is increasingly the standard. The homes are larger, the systems more complex, the homeowners more discerning, the timelines tighter. The cost of hiring the wrong category of plumbing trade has gone up. The cost of hiring the right one has stayed roughly constant.',
    },
    { type: 'paragraph', text: 'Choose accordingly.' },
  ],
};

// PLACEHOLDER ARTICLE — see notes on ARTICLE_1.
const ARTICLE_2: Article = {
  slug: 'radiant-floor-heating-vs-forced-air',
  title: 'Radiant floor heating vs forced air: a custom-home decision guide',
  excerpt:
    'The trade-offs that matter when choosing a heating system for a new custom home in a Canadian climate.',
  category: 'Decision Guide',
  publishedAt: '2026-03-08',
  heroImage: '/images/article-radiant-vs-air.jpg',
  readingTime: 8,
  body: [
    {
      type: 'paragraph',
      text: 'For a new custom home in Toronto, the heating system is one of the earliest and most consequential decisions an architect or homeowner makes. The choice between hydronic radiant floor heating and traditional forced-air is more than a comfort preference — it affects floor heights, ceiling design, ductwork, energy bills, and the room-by-room experience for decades.',
    },
    {
      type: 'paragraph',
      text: 'Both systems are legitimate. Both can be done well. The right answer depends on the home, the climate, and the priorities of the people living in it. Here are the trade-offs that actually matter.',
    },
    { type: 'heading', level: 2, text: 'How they work, briefly' },
    {
      type: 'paragraph',
      text: 'Forced-air systems heat air at a central furnace and push it through ducts into each room. The familiar pattern: warm air comes out of a vent, the room warms up, the air circulates, the thermostat eventually shuts the system off.',
    },
    {
      type: 'paragraph',
      text: 'Hydronic radiant systems heat water at a boiler and circulate it through pipes embedded in or beneath the floor. The floor itself becomes the heating element. Heat rises gently and consistently through the entire floor surface, warming the room from the ground up.',
    },
    { type: 'heading', level: 2, text: 'Comfort' },
    {
      type: 'paragraph',
      text: 'This is where radiant wins decisively. The temperature distribution in a radiant-heated room is even from ankle to head — no hot spots near vents, no cold pockets near windows. Floors are warm under bare feet. The air doesn’t blow.',
    },
    {
      type: 'paragraph',
      text: 'In bathrooms, mudrooms, and basement spaces, the comfort difference is dramatic. Stepping out of a shower onto a warm floor in February is the kind of detail that homeowners remember years after move-in.',
    },
    {
      type: 'paragraph',
      text: 'Forced-air comfort can be tuned with good design — properly sized ducts, well-placed vents, balanced returns — but the underlying physics still produce more temperature variation across a room.',
    },
    { type: 'heading', level: 2, text: 'Energy efficiency' },
    {
      type: 'paragraph',
      text: 'Radiant systems are typically more efficient because water transfers heat far better than air, and because heating a room from the floor up allows the thermostat to be set lower while feeling the same.',
    },
    {
      type: 'paragraph',
      text: 'However, radiant systems take longer to respond. The thermal mass of a concrete slab or warm floor takes hours to heat up and cool down. For homeowners who want rapid temperature changes — turning the heat way down when leaving in the morning and up again before getting home — forced-air responds faster.',
    },
    {
      type: 'paragraph',
      text: 'Zoned radiant systems with smart controls can mitigate this, but the underlying tradeoff remains.',
    },
    { type: 'heading', level: 2, text: 'Cost — upfront and lifetime' },
    {
      type: 'paragraph',
      text: 'Radiant systems cost more to install. The piping, the boiler, the manifold, the floor preparation, and the system commissioning all add to the project budget. Forced-air, especially in a home that already needs ductwork for air conditioning and ventilation, is usually 30 to 50 percent cheaper to install.',
    },
    {
      type: 'paragraph',
      text: 'Over a 20-year lifetime, radiant typically wins on operating cost — lower energy bills, longer system life, fewer moving parts to fail. Whether the upfront premium is worth the lifetime savings depends on how long the homeowner expects to stay in the home.',
    },
    { type: 'heading', level: 2, text: 'What the architecture wants' },
    {
      type: 'paragraph',
      text: 'This matters more than people expect. A home with high ceilings, large windows, and open-plan living spaces benefits enormously from radiant — forced-air struggles to heat tall volumes evenly and produces visible drafts near large glazing.',
    },
    {
      type: 'paragraph',
      text: 'A home with a more compartmentalized layout, lower ceilings, and a need for whole-house air conditioning may be better served by a well-designed forced-air system, since the ductwork pulls double duty for cooling and ventilation.',
    },
    {
      type: 'pullquote',
      text: 'The right system follows the home’s design. A bad radiant install is worse than a great forced-air install.',
    },
    { type: 'heading', level: 2, text: 'The realistic answer for most Toronto custom homes' },
    {
      type: 'paragraph',
      text: 'In practice, most high-end custom homes in Toronto end up with a hybrid: hydronic radiant for the main floor, bathrooms, and basement, with forced-air handling the second floor and providing summer cooling. This approach gets the comfort and efficiency benefits of radiant in the spaces where it matters most, while avoiding the cost of running radiant throughout.',
    },
    {
      type: 'paragraph',
      text: 'The key is involving the plumbing trade and HVAC contractor early enough in the design phase that the systems are coordinated, not retrofitted. By the time framing is up, the decision has already been made — for better or worse.',
    },
    {
      type: 'paragraph',
      text: 'The homeowners who report being happiest with their heating systems years after move-in tend to have one thing in common: their trades were brought in during schematic design, not after permits.',
    },
  ],
};

// PLACEHOLDER ARTICLE — see notes on ARTICLE_1.
const ARTICLE_3: Article = {
  slug: 'hidden-costs-of-plumbing-rough-in-mistakes',
  title: 'The hidden costs of plumbing rough-in mistakes',
  excerpt:
    'Why the most expensive plumbing problems happen before a single fixture is installed.',
  category: 'Technical',
  publishedAt: '2026-02-20',
  heroImage: '/images/article-rough-in.jpg',
  readingTime: 6,
  body: [
    {
      type: 'paragraph',
      text: 'Plumbing failures in a finished custom home tend to make the news — the burst pipe, the flooded basement, the warranty callback that turns into a six-figure repair. But ask any builder who has been through one, and they’ll tell you the same thing: the most expensive mistakes happen earlier than that. They happen during rough-in.',
    },
    {
      type: 'paragraph',
      text: 'Rough-in is the phase where the plumbing system is installed before walls are closed and floors are finished. It is the bones of every plumbing system that follows. Get it right, and the rest of the project flows. Get it wrong, and the consequences ripple through every subsequent trade and every subsequent decade of the home’s life.',
    },
    { type: 'heading', level: 2, text: 'What rough-in actually involves' },
    {
      type: 'paragraph',
      text: 'During rough-in, the plumber installs the supply lines (hot and cold water), drain lines (waste and vent stacks), gas lines, and any radiant or snow-melt piping. Fixtures are not yet present. The work happens inside walls, beneath floors, and above ceilings — places that will become impossible to access cheaply once the project is finished.',
    },
    {
      type: 'paragraph',
      text: 'The decisions made at this phase are not just about whether water will flow. They affect water pressure throughout the home, drainage capacity under peak use, the noise levels of running water at night, energy losses in hot water lines, and the long-term durability of every fitting.',
    },
    { type: 'heading', level: 2, text: 'The four costliest mistakes' },
    {
      type: 'paragraph',
      text: 'First — undersized supply lines. A custom home with multiple bathrooms, a soaker tub, a large kitchen, and irrigation needs adequate main-line capacity. Cutting corners here means low pressure at peak use, expensive retrofits to upgrade, and chronic homeowner complaints. The cost of upsizing during rough-in is small. The cost of correcting it later involves opening walls.',
    },
    {
      type: 'paragraph',
      text: 'Second — incorrect drain slope. Waste lines need to fall at a precise rate to clear properly. Too shallow, they clog. Too steep, water races ahead and solids settle. These mistakes don’t show up at inspection. They show up two to five years after move-in, when the homeowner is dealing with recurring blockages and a plumber is tearing into finished floors to diagnose them.',
    },
    {
      type: 'paragraph',
      text: 'Third — missing or undersized vent stacks. Drains need air to flow properly. A vent stack that is sized incorrectly, omitted entirely, or routed badly creates suction problems, gurgling drains, and slow flushes. Correcting this in a finished home is one of the most disruptive plumbing repairs that exists.',
    },
    {
      type: 'paragraph',
      text: 'Fourth — poor coordination with other trades. The plumber’s pipes occupy the same space as the electrician’s wires, the framer’s joists, and the HVAC contractor’s ducts. When coordination breaks down at rough-in, the rework cascades. Joists get notched in places they shouldn’t be. Ducts get re-routed. Walls get furred out. The project loses days, sometimes weeks.',
    },
    { type: 'heading', level: 2, text: 'What good rough-in looks like' },
    {
      type: 'paragraph',
      text: 'A disciplined rough-in starts with full architectural drawings, not a punch list. The plumbing trade reviews the design, flags concerns, sizes the systems correctly for actual loads, and coordinates with HVAC and electrical before cutting anything. Inspections are scheduled at the right moments, not bunched at the end. The work is photographed and documented before walls close, so any future repair has a record to work from.',
    },
    {
      type: 'pullquote',
      text: 'You cannot see good plumbing rough-in in a finished home. But you can see bad plumbing rough-in for the next thirty years.',
    },
    { type: 'heading', level: 2, text: 'Why the math always favors getting it right' },
    {
      type: 'paragraph',
      text: 'The cost premium for a disciplined rough-in is usually 10 to 20 percent over a rushed one. The cost of fixing rough-in mistakes after the home is finished is often 5 to 10 times what the original installation would have cost — and that assumes the homeowner is willing to live through the disruption.',
    },
    {
      type: 'paragraph',
      text: 'For builders, architects, and homeowners deciding where to allocate the plumbing budget on a custom-home project, the answer is simple. Spend it at rough-in. Everything else flows from there.',
    },
  ],
};

// PLACEHOLDER ARTICLE — see notes on ARTICLE_1.
const ARTICLE_4: Article = {
  slug: 'plumbing-permits-toronto-custom-homes',
  title:
    'Plumbing permits for custom homes in Toronto: what builders need to know',
  excerpt:
    'Why getting permits right at the start of a custom build prevents the most expensive problems at the end.',
  category: 'Technical',
  publishedAt: '2026-01-22',
  heroImage: '/images/article-permits.jpg',
  readingTime: 6,
  body: [
    {
      type: 'paragraph',
      text: 'On every custom home build in Toronto, the question of plumbing permits comes up early. Sometimes too late. The right time to think about permits is during the design phase, before a single trench is dug. The wrong time is when the framing inspector mentions in passing that the city expects to see plumbing drawings stamped by a Professional Engineer.',
    },
    {
      type: 'paragraph',
      text: 'The City of Toronto regulates plumbing under the Ontario Building Code and Municipal Code Chapter 681. For any custom home build, renovation, or major addition that involves new piping, relocated fixtures, or connections to the municipal water and drainage systems, a plumbing permit is required. This is not optional. It is not a formality. And the consequences of skipping it can extend well beyond a fine.',
    },
    { type: 'heading', level: 2, text: 'What requires a permit' },
    {
      type: 'paragraph',
      text: 'Any new plumbing installation in a new build automatically requires a permit. Beyond new construction, the threshold for renovations is lower than most homeowners expect. Adding a bathroom, kitchen sink, or laundry room where one did not previously exist requires a permit. So does relocating any existing fixture if the work involves altering piping. Replacing a faucet or toilet in the same position is the rare exception that does not require a permit, since no piping changes.',
    },
    {
      type: 'paragraph',
      text: 'Builders working on custom homes are essentially always inside the permit envelope. The question is not whether you need one, but how to manage the application and inspection process so it does not delay the project.',
    },
    { type: 'heading', level: 2, text: 'What the permit application requires' },
    {
      type: 'paragraph',
      text: 'A plumbing permit application in Toronto requires more than a one-page form. The city expects detailed plumbing drawings showing fixture locations, pipe routes, drain slopes, vent stack placement, and connection points to municipal services. For larger or more complex custom homes, these drawings may need to be stamped by a Professional Engineer registered with Professional Engineers Ontario.',
    },
    {
      type: 'paragraph',
      text: 'The application also requires the plumbing contractor’s license information, the property owner’s authorization, and the building permit number if a separate building permit has already been issued for the broader scope of work.',
    },
    {
      type: 'paragraph',
      text: 'Application fees for residential plumbing permits typically range from a few hundred dollars for small renovations to several thousand dollars for full custom-home builds, calculated based on the number of fixtures and the scope of the system.',
    },
    { type: 'heading', level: 2, text: 'Timeline and inspections' },
    {
      type: 'paragraph',
      text: 'Most plumbing permit applications in Toronto are processed within five to ten business days, assuming the application is complete and the drawings are clear. Incomplete applications, ambiguous drawings, or applications missing the engineer’s stamp on systems that require one will be returned for revisions, costing additional time.',
    },
    {
      type: 'paragraph',
      text: 'Once the permit is issued, inspections happen at multiple checkpoints during the work. The plumbing rough-in inspection is the most critical. City inspectors verify that pipes are correctly sized, drains are sloped correctly, vents are placed and sized correctly, and that the system follows the approved drawings. This inspection must pass before walls are closed. Any deficiency at rough-in means opening walls later, which is far more expensive than fixing the problem at the inspection itself.',
    },
    {
      type: 'paragraph',
      text: 'A final inspection occurs after all fixtures are installed and the system is operational. This inspection verifies that the finished work matches the permit and complies with the Ontario Building Code.',
    },
    { type: 'heading', level: 2, text: 'What happens if you skip the permit' },
    {
      type: 'paragraph',
      text: 'The financial consequences of unpermitted plumbing work can show up years after the build is complete. Home insurance policies can be denied or voided if the insurer discovers that water damage originated from unpermitted plumbing. Resale value can drop dramatically when a home inspection or lawyer’s title search reveals unpermitted work, since buyers and lenders treat it as a serious risk.',
    },
    {
      type: 'paragraph',
      text: 'The city itself can require unpermitted work to be opened up, inspected after the fact, and rebuilt to code, which is the most expensive scenario possible.',
    },
    {
      type: 'pullquote',
      text: 'Permits are not bureaucratic friction. They are the documentation trail that protects the property’s insurability, resale value, and legal standing for decades.',
    },
    { type: 'heading', level: 2, text: 'How builders manage this well' },
    {
      type: 'paragraph',
      text: 'The builders who run the smoothest custom-home projects in Toronto treat permits as a design-phase concern, not a construction-phase concern. They bring their plumbing trade into the conversation early, get permit-ready drawings produced before excavation, and schedule inspections proactively so they never become a bottleneck.',
    },
    {
      type: 'paragraph',
      text: 'At ProPlus Plumbing, we work with builders and architects from the schematic phase forward, ensuring that the plumbing system is designed to permit-ready standards from the start and that inspection scheduling fits cleanly into the overall project timeline.',
    },
    {
      type: 'paragraph',
      text: 'For builders considering a custom home or major renovation in Toronto, the permit conversation should happen in the first meeting with your plumbing trade. Not the last.',
    },
  ],
};

// PLACEHOLDER ARTICLE — see notes on ARTICLE_1.
const ARTICLE_5: Article = {
  slug: 'radiant-floor-heating-cost-toronto',
  title: 'What does radiant floor heating actually cost in a Toronto custom home?',
  excerpt:
    'A practical breakdown of installation costs, operating costs, and the long-term economics of hydronic radiant heating.',
  category: 'Decision Guide',
  publishedAt: '2026-01-08',
  heroImage: '/images/article-radiant-cost.jpg',
  readingTime: 8,
  body: [
    {
      type: 'paragraph',
      text: 'Of all the questions homeowners and builders ask when considering radiant floor heating, the most common is also the hardest to answer cleanly: what does it actually cost? The honest answer is that it depends, but the variables that matter are knowable. With a clear framework, you can estimate the budget for a radiant system on a Toronto custom home within a useful range before the design is finalized.',
    },
    { type: 'heading', level: 2, text: 'The two parts of the cost' },
    {
      type: 'paragraph',
      text: 'Radiant floor heating cost breaks into two distinct categories that often get conflated in marketing materials. The first is the radiant system itself: the tubing, manifolds, insulation, and labor to install the in-floor components. The second is the heat source: the boiler or water heater that produces the hot water circulating through the system.',
    },
    {
      type: 'paragraph',
      text: 'Quotes that show only a per-square-foot price are usually quoting the radiant system alone, not the full installed system. For a custom home, both costs need to be in the budget.',
    },
    { type: 'heading', level: 2, text: 'What the radiant system itself costs' },
    {
      type: 'paragraph',
      text: 'For a new-construction custom home in Toronto, the radiant system installed cost typically ranges from $10 to $20 per square foot, depending on the type of system, the floor assembly, and the complexity of the layout.',
    },
    {
      type: 'paragraph',
      text: 'Electric radiant systems sit at the lower end of this range, usually $10 to $15 per square foot, and are most often used for retrofits or single-room applications like primary bathrooms or basements. Hydronic radiant systems, which use heated water circulated through PEX tubing, sit at the higher end, typically $15 to $30 per square foot installed.',
    },
    {
      type: 'paragraph',
      text: 'For a hydronic system over a concrete basement slab, the cost is lower because the tubing is laid directly into the slab during the pour. For systems over wood subflooring or in a retrofit on a finished floor, the cost is higher because additional layers, fastening systems, and floor preparation are needed.',
    },
    { type: 'heading', level: 2, text: 'What the heat source costs' },
    {
      type: 'paragraph',
      text: 'The heat source for hydronic radiant is either a dedicated boiler or an integrated system that uses the home’s existing hot water heater. For a small or medium project, a radiant mixing panel installed off an existing water heater costs around $4,000 to $6,000.',
    },
    {
      type: 'paragraph',
      text: 'For a larger custom home, a dedicated high-efficiency boiler is typically required. A modern condensing boiler sized for a 4,000 to 6,000 square foot home, including the boiler room buildout, controls, manifolds, and commissioning, costs roughly $12,000 to $25,000 depending on the manufacturer and specification.',
    },
    {
      type: 'paragraph',
      text: 'When the radiant heating is part of a broader hydronic strategy that also handles domestic hot water, pool heating, or snow melting, the boiler sizing increases and the cost scales with it.',
    },
    { type: 'heading', level: 2, text: 'Total installed cost for a custom home' },
    {
      type: 'paragraph',
      text: 'For a representative example, a new 4,000 square foot custom home in Toronto with hydronic radiant on the main floor and basement, integrated with a high-efficiency boiler also handling domestic hot water, will typically run between $50,000 and $90,000 fully installed. Smaller homes or partial radiant coverage land lower. Larger homes with full-house radiant including a second floor, integrated snow-melt, and premium boiler systems can exceed $120,000.',
    },
    {
      type: 'paragraph',
      text: 'These numbers feel large until you compare them against the upfront cost of a comparable high-efficiency forced-air system with all the ductwork, returns, balancing, and zoning controls required for a custom home of similar size. The radiant premium is real but smaller than most homeowners assume. Typically 30 to 50 percent above forced-air for the heating component, often offset by the elimination of separate ductwork for the heating function.',
    },
    { type: 'heading', level: 2, text: 'What it costs to operate' },
    {
      type: 'paragraph',
      text: 'Operating costs for hydronic radiant systems in Toronto are typically 10 to 30 percent lower than equivalent forced-air systems, primarily because water transfers heat more efficiently than air and because radiant systems can run at lower thermostat settings while feeling equivalently warm.',
    },
    {
      type: 'paragraph',
      text: 'For a 4,000 square foot home, expected annual heating costs with hydronic radiant range from $1,200 to $2,800, depending on the home’s envelope, the climate that year, and the homeowner’s thermostat preferences. Modern condensing boilers operating at 95 percent or higher efficiency are the single largest driver of these operating savings.',
    },
    {
      type: 'pullquote',
      text: 'The math on radiant heating favors long ownership. The upfront premium pays back in operating savings over 15 to 25 years of system life.',
    },
    { type: 'heading', level: 2, text: 'Rebates and incentives' },
    {
      type: 'paragraph',
      text: 'Ontario homeowners installing radiant heating as part of an energy-efficient home upgrade may qualify for rebates through programs like the Canada Greener Homes Grant, which offers up to $5,000 for qualifying energy efficiency improvements. Some local utility companies also offer rebates for high-efficiency boilers and integrated radiant systems.',
    },
    {
      type: 'paragraph',
      text: 'These rebates typically require pre-approval and post-installation verification, so they need to be factored into the project timeline.',
    },
    { type: 'heading', level: 2, text: 'The bigger decision' },
    {
      type: 'paragraph',
      text: 'The cost question matters, but it is rarely the deciding factor. For most custom-home buyers in Toronto, the choice between radiant and forced-air comes down to comfort, system longevity, and architectural compatibility. The cost premium for radiant is real but moderate. The comfort premium, on a properly designed and installed system, lasts for the life of the home.',
    },
  ],
};

// PLACEHOLDER ARTICLE — see notes on ARTICLE_1.
const ARTICLE_6: Article = {
  slug: 'heated-driveway-snow-melting-cost-toronto',
  title: 'Heated driveways in Toronto: what they cost and when they make sense',
  excerpt:
    'The economics of snow-melt systems for luxury Toronto properties, and the design considerations that affect their value.',
  category: 'Decision Guide',
  publishedAt: '2025-11-14',
  heroImage: '/images/article-heated-driveway.jpg',
  readingTime: 7,
  body: [
    {
      type: 'paragraph',
      text: 'Toronto averages 122 centimeters of snowfall per winter, distributed across roughly 40 to 60 snow events between November and April. For luxury homeowners with steep driveways, multi-car garages, long walkways, or simply less appetite for shoveling and salting, a heated driveway is no longer an exotic feature. It is increasingly a standard upgrade on new custom homes and major property renovations.',
    },
    {
      type: 'paragraph',
      text: 'The question for most homeowners is whether the investment makes sense for their specific property. The answer depends on the driveway size, the system type, the integration with existing heating infrastructure, and how the homeowner values convenience, safety, and property protection during Toronto winters.',
    },
    { type: 'heading', level: 2, text: 'What snow-melt systems actually do' },
    {
      type: 'paragraph',
      text: 'A heated driveway uses either electric heating cables or hydronic tubing embedded beneath the driveway surface to maintain the surface temperature above freezing during snowfall. When the system detects falling snow through automated weather sensors, it activates and melts the snow as it lands, preventing accumulation entirely.',
    },
    {
      type: 'paragraph',
      text: 'Properly designed systems use surface and ambient temperature sensors combined with moisture detection to activate only when actually needed, minimizing operating costs. The driveway stays clear, the homeowner does not shovel, and salt damage to the driveway surface, the car, and surrounding landscaping is eliminated.',
    },
    { type: 'heading', level: 2, text: 'What it costs to install' },
    {
      type: 'paragraph',
      text: 'For a new construction custom home in Toronto, installing a hydronic snow-melt system in a typical 1,000 square foot driveway costs between $25,000 and $45,000 fully installed, including the tubing, controls, sensors, and the additional boiler capacity to handle the load.',
    },
    {
      type: 'paragraph',
      text: 'Electric snow-melt systems are less expensive to install, typically $16,000 to $35,000 for a 1,000 square foot driveway, but operating costs are significantly higher than hydronic systems. For luxury Toronto custom homes, hydronic is the standard choice because it integrates with the home’s existing heating system and produces dramatically lower lifetime operating costs.',
    },
    {
      type: 'paragraph',
      text: 'Retrofitting a heated driveway into an existing driveway is also possible but more expensive than installing during new construction. The driveway surface must be cut, grooved, and resurfaced after the heating elements are placed, often pushing retrofit costs above $50,000 for a comparable area.',
    },
    { type: 'heading', level: 2, text: 'What it costs to operate' },
    {
      type: 'paragraph',
      text: 'Operating costs for snow-melt systems vary widely depending on the system type, the integration with the home’s broader heating infrastructure, and the severity of the winter. For a 1,000 square foot driveway in Toronto, expected annual operating costs range from $200 to $700 for a hydronic system, and significantly higher for an electric system.',
    },
    {
      type: 'paragraph',
      text: 'The number that matters more than the per-winter cost is the cost per snow event. Modern smart-controlled systems activate only during actual snowfall and only on the areas that need it, so an average winter with 50 snow events might cost $4 to $15 per event to keep the driveway clear.',
    },
    { type: 'heading', level: 2, text: 'When it makes sense' },
    {
      type: 'paragraph',
      text: 'The economics favor heated driveways most clearly in three situations. First, on properties with steep or terraced driveways where shoveling is physically difficult and accumulated snow creates safety hazards. Second, on properties where the homeowners are older, frequently travel, or otherwise unable to commit to manual snow removal. Third, on properties where the driveway surface is high-end stone, concrete, or pavers that would be damaged by salt or aggressive plowing.',
    },
    {
      type: 'paragraph',
      text: 'The economics are less compelling on small, flat driveways with good salt tolerance where shoveling is straightforward and the home is occupied year-round by people willing to handle it.',
    },
    {
      type: 'pullquote',
      text: 'A heated driveway is not a snow-removal solution. It is a property protection system that happens to also eliminate snow removal.',
    },
    { type: 'heading', level: 2, text: 'Design considerations that affect cost' },
    {
      type: 'paragraph',
      text: 'The driveway surface material affects both installation cost and long-term performance. Concrete and asphalt drives accept embedded heating elements straightforwardly. Paving stones add complexity but result in the most premium finished look. Natural stone driveways require the most careful design to avoid thermal damage to expensive surfaces.',
    },
    {
      type: 'paragraph',
      text: 'Integration with the home’s existing or planned hydronic system also matters significantly. When the same boiler that heats the home’s radiant floors also handles the driveway snow-melt and the domestic hot water, the system is materially more efficient and less expensive to install than separate systems for each function.',
    },
    {
      type: 'paragraph',
      text: 'For luxury custom homes in Toronto, the smart design move is to plan the snow-melt system into the home’s overall mechanical strategy from the schematic phase forward, so the boiler sizing, manifold layout, and control system handle all hydronic loads as one integrated system.',
    },
  ],
};

// Sorted newest first by publishedAt.
export const ARTICLES: Article[] = [
  ARTICLE_1,
  ARTICLE_2,
  ARTICLE_3,
  ARTICLE_4,
  ARTICLE_5,
  ARTICLE_6,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 2): Article[] {
  return ARTICLES.filter((a) => a.slug !== slug).slice(0, count);
}

export function formatPublishedDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-CA', {
    month: 'long',
    year: 'numeric',
  });
}
