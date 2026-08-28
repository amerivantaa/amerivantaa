// ─────────────────────────────────────────────────────────────
// All editable website copy lives here. Change text, numbers,
// and links in this one file — the components just render it.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'Amerivantaa',
  tagline: 'IT Staff Augmentation & Consulting',
  email: 'hello@amerivantaa.com',
  phone: '+1 (000) 000-0000',
  // Serving US clients remotely — swap for your real office location.
  location: 'Serving clients across the United States',
  // Formspree endpoint that forwards contact-form submissions to your
  // organization inbox. Sign up free at https://formspree.io, create a
  // form pointed at your real email address, and paste its endpoint
  // URL here (looks like 'https://formspree.io/f/xxxxxxxx').
  // Leave as-is and the form will fall back to a mailto: link.
  formEndpoint: '',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'IT Staff Augmentation & Consulting for U.S. Businesses',
  title: 'The bridge between your roadmap and the engineers who can ship it.',
  subtitle:
    'Amerivantaa connects U.S. companies with vetted developers, QA engineers, DevOps specialists, and cloud architects who work on your schedule — so you scale delivery without slowing down to hire.',
  primaryCta: { label: 'Get a free consultation', href: '#contact' },
  secondaryCta: { label: 'See how it works', href: '#process' },
}

// Honest differentiators instead of inflated stats — swap in real
// numbers (years in business, engineers placed, clients served) as
// you accumulate them.
export const differentiators = [
  { label: 'To first shortlist', value: '3–5 Days' },
  { label: 'Business-hours overlap', value: '100% US Hours' },
  { label: 'Contract lock-in', value: 'Zero' },
  { label: 'Vetting before intro', value: 'Every Candidate' },
]

export const about = {
  eyebrow: 'About Amerivantaa',
  title: 'Built to close the gap between roadmaps and the people who execute them',
  body: [
    'Hiring for a single specialist role can take longer than the project it was meant to support. Amerivantaa exists to remove that bottleneck — giving growing teams direct access to vetted engineers without the overhead of a full-time hiring cycle.',
    'We work as an extension of your team: augmented staff report to you, follow your process, and plug into your existing tools. We handle sourcing, screening, and the administrative layer behind the placement.',
  ],
  points: [
    'Direct access to pre-vetted engineers across the stack',
    'Flexible engagement models — augment one role or an entire pod',
    'Transparent, usage-based terms with no hidden lock-in',
    'You retain full control of day-to-day management and priorities',
  ],
}

export const usFocus = {
  eyebrow: 'Working with U.S. companies',
  title: 'Built around how U.S. teams actually work',
  items: [
    {
      title: 'Full overlap with your business hours',
      description: 'Engineers work EST/CST/MST/PST hours as needed — real-time standups and code review, not a 12-hour reply lag.',
    },
    {
      title: 'Contracts built for U.S. companies',
      description: 'MSA/NDA-ready paperwork, corp-to-corp or 1099 arrangements, and invoicing in USD — no cross-border guesswork on your end.',
    },
    {
      title: 'Fluent, direct communication',
      description: 'Daily standups, written updates, and Slack/Teams-native workflows — engineers who communicate the way your team already does.',
    },
    {
      title: 'Data security & IP protection',
      description: 'Signed NDAs and IP-assignment agreements before any code is touched, so your product and data stay yours.',
    },
    {
      title: 'No visa or relocation logistics',
      description: 'Engineers work remotely under your management — no sponsorship, relocation, or office-space overhead to plan around.',
    },
    {
      title: 'Cost efficiency without the compliance risk',
      description: 'Add senior engineering capacity at a lower fully-loaded cost than a local hire, without misclassification or payroll-compliance headaches.',
    },
  ],
}

// Framed as "platforms we build on," not "OEM partners" — the latter
// implies a certified reseller/partner agreement. Only relabel this as
// a partnership once you actually hold one; until then this is an
// honest list of ecosystems your engineers work in.
export const platforms = {
  eyebrow: 'Platforms we build on',
  title: 'Comfortable across the tools enterprise buyers already use',
  items: [
    'AWS', 'Microsoft Azure', 'Google Cloud', 'Salesforce',
    'Microsoft 365', 'HubSpot', 'Shopify', 'SAP',
  ],
  note: 'Working knowledge of these platforms — not a certified reseller or OEM partnership. Update this once you hold one.',
}

// What larger buyers typically check for in a vendor contract before
// signing. These are commitments to make explicitly and mean, not
// certifications to claim — swap in real certificate numbers/dates
// once you actually hold them (e.g. after a SOC 2 or ISO 27001 audit).
export const enterpriseReady = {
  eyebrow: 'Enterprise contracting',
  title: 'What larger buyers check for — and how we handle it',
  items: [
    {
      title: 'Mutual NDA & IP assignment',
      description: 'Signed before any engineer sees your codebase. All work product is assigned to you by contract, in writing.',
    },
    {
      title: 'Master Service Agreement (MSA) + SOW',
      description: 'A standard MSA covers the relationship; each engagement gets its own Statement of Work with scope, rate, and term.',
    },
    {
      title: 'Data handling & confidentiality terms',
      description: 'Contracts specify how your data and credentials are handled, stored, and destroyed at the end of an engagement.',
    },
    {
      title: 'Background-checked engineers',
      description: 'Identity and employment history verified before placement — ask us for a candidate\u2019s verification summary.',
    },
    {
      title: 'Defined SLAs',
      description: 'Response times, escalation paths, and replacement terms are written into the agreement, not left implicit.',
    },
    {
      title: 'Insurance & liability terms',
      description: 'General liability and professional liability (E&O) coverage details are shared during contracting — ask for current certificates.',
    },
  ],
  disclaimer:
    'We do not yet hold formal certifications such as SOC 2 or ISO 27001 — if these are hard requirements for your procurement process, ask us directly about current status before contracting.',
}

export const services = [
  {
    tag: 'Core offering',
    title: 'Staff Augmentation',
    description:
      'We place vetted engineers directly inside your team, working your hours, your tools, your process. You manage the work; we handle sourcing, vetting, and the admin behind it.',
    featured: true,
  },
  {
    tag: 'For full ownership',
    title: 'Dedicated Teams',
    description:
      'A ready-made pod — developers, QA, and a lead — that takes a project end-to-end when you need output, not just headcount.',
  },
  {
    tag: 'Before you build',
    title: 'IT Consulting',
    description:
      'Advisory on architecture, tooling, and technology choices, so the team you bring in is solving the right problem from day one.',
  },
  {
    tag: 'Built from scratch',
    title: 'Custom Software Development',
    description:
      'End-to-end design and development of web, mobile, and enterprise applications tailored to your workflow — not a template stretched to fit.',
  },
]

export const techStack = {
  eyebrow: 'Talent across the stack',
  title: 'Skills we place, organized the way you hire',
  categories: [
    { label: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'] },
    { label: 'Backend', items: ['Node.js', 'Python', 'Java', '.NET', 'PHP'] },
    { label: 'Mobile', items: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'] },
    { label: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Google Cloud', 'CI/CD', 'Kubernetes'] },
    { label: 'Data', items: ['SQL / PostgreSQL', 'MongoDB', 'Data Engineering', 'Analytics'] },
    { label: 'QA', items: ['Manual Testing', 'Automation', 'Performance Testing'] },
  ],
}

export const industries = {
  eyebrow: 'Industries',
  title: 'Where staff augmentation moves the needle most',
  items: [
    'Healthcare',
    'FinTech',
    'Retail & E-Commerce',
    'Logistics',
    'Real Estate',
    'Travel & Hospitality',
    'EdTech',
    'SaaS & B2B Software',
  ],
}

export const process = {
  eyebrow: 'How it works',
  title: "From gap to onboarded, in days — not months",
  steps: [
    {
      title: 'Share the gap',
      description: 'Tell us the role, must-have skills, timeline, and budget. A short call is usually enough.',
    },
    {
      title: 'Curated shortlist',
      description: "We screen for skill and fit, and send a short list of profiles that actually match — not a resume dump.",
    },
    {
      title: 'Interview & select',
      description: 'You talk to the candidates and choose who joins. No pressure, no obligation to pick anyone.',
    },
    {
      title: 'Onboard & scale',
      description: 'Your new team member starts under your management. Scale the engagement up, down, or off whenever the project calls for it.',
    },
  ],
}

export const whyUs = {
  eyebrow: 'Why Amerivantaa',
  title: 'Built for how staffing should actually work',
  items: [
    { title: 'Speed to start', description: 'Engagements typically begin within days of a signed agreement, not weeks of back-and-forth.' },
    { title: 'No long-term lock-in', description: 'Engagements scale with your project. Ramp up for a sprint, ramp down when it is done.' },
    { title: 'Vetting before you see a profile', description: 'Every candidate is screened for the specific skill and seniority you asked for, before their profile reaches you.' },
    { title: 'You stay in control', description: 'Augmented staff work inside your workflow and report to you. We handle sourcing and admin, not your project decisions.' },
  ],
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Everything you need to know',
  items: [
    {
      q: 'What is IT staff augmentation?',
      a: 'It is a flexible engagement model where you add vetted engineers to your existing team on a contract basis, rather than hiring full-time. They work under your management and process, and the engagement scales up or down with your project.',
    },
    {
      q: 'How is this different from a staffing agency?',
      a: 'We focus specifically on technical roles and screen every candidate against the exact skill and seniority you need before you ever see a profile, so you are choosing between qualified finalists rather than sorting through a resume pile.',
    },
    {
      q: 'How quickly can someone start?',
      a: 'Once a role is scoped, a shortlist typically comes back within days. Time-to-start after you select a candidate depends on notice periods, but most engagements begin quickly.',
    },
    {
      q: 'Is there a minimum contract length?',
      a: 'No. Engagements are structured to scale with your actual need — for a single sprint, an ongoing role, or anything in between.',
    },
    {
      q: 'Who manages the engineer day-to-day?',
      a: 'You do. Augmented staff report into your team and follow your workflow. We handle sourcing, screening, and the administrative side of the engagement.',
    },
    {
      q: 'Do your engineers work U.S. business hours?',
      a: 'Yes. Schedules are set to overlap with your team\u2019s working hours — EST, CST, MST, or PST — so standups, reviews, and pairing happen in real time, not across a full day\u2019s delay.',
    },
    {
      q: 'How does billing and contracting work for a U.S. company?',
      a: 'Engagements are invoiced in USD with MSA/NDA paperwork structured for U.S. businesses, either corp-to-corp or 1099, so there\u2019s no cross-border administrative burden on your side.',
    },
    {
      q: 'What about data security and IP ownership?',
      a: 'NDAs and IP-assignment agreements are signed before any engineer touches your codebase or data, so all work product remains fully owned by your company.',
    },
  ],
}

export const cta = {
  title: 'Have a gap to fill?',
  subtitle: "Tell us the role and timeline — we'll come back with a plan, not a sales pitch.",
}

export const footer = {
  description:
    'Amerivantaa connects growing teams with vetted IT talent through flexible staff augmentation and consulting engagements.',
  companyLinks: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
  serviceLinks: [
    { label: 'Staff Augmentation', href: '#services' },
    { label: 'Dedicated Teams', href: '#services' },
    { label: 'IT Consulting', href: '#services' },
  ],
}
