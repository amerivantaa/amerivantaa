/**
 * Editable site content for Amerivantaa.
 * Anything marked PLACEHOLDER must be replaced with verified information before launch.
 */

export const contact = {
  /** PLACEHOLDER — add the verified business email, e.g. "hello@yourdomain.com". */
  email: "",
  /** PLACEHOLDER — add the company LinkedIn page URL. */
  linkedin: "",
};

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/work", label: "Our Work" },
  { to: "/company", label: "Company" },
  { to: "/insights", label: "Insights" },
] as const;

export type Service = { id: string; title: string; summary: string; points: string[] };

export const services: Service[] = [
  {
    id: "software",
    title: "Custom Software Development",
    summary: "Purpose-built software designed around how your business actually operates.",
    points: ["Product discovery", "Modern architectures", "Long-term maintainability"],
  },
  {
    id: "web-apps",
    title: "Web and Application Development",
    summary: "Fast, accessible web and mobile experiences your customers rely on.",
    points: ["Web platforms", "Customer portals", "Mobile-ready interfaces"],
  },
  {
    id: "enterprise",
    title: "Enterprise Software Solutions",
    summary: "Robust systems that integrate with the platforms you already depend on.",
    points: ["System integration", "Legacy modernization", "Workflow platforms"],
  },
  {
    id: "ai",
    title: "AI and Automation",
    summary: "Practical AI and automation that remove friction from everyday work.",
    points: ["Intelligent automation", "Machine learning", "Process automation"],
  },
  {
    id: "cloud",
    title: "Cloud Solutions and DevOps",
    summary: "Reliable cloud foundations and delivery pipelines that scale with you.",
    points: ["Cloud migration", "CI/CD pipelines", "Infrastructure as code"],
  },
  {
    id: "data",
    title: "Data Engineering and Analytics",
    summary: "Trustworthy data pipelines and analytics that inform better decisions.",
    points: ["Data pipelines", "Streaming & integration", "Reporting & insight"],
  },
  {
    id: "qa",
    title: "Quality Assurance and Software Testing",
    summary: "Disciplined testing that protects releases, performance and reputation.",
    points: ["Manual & automated testing", "API testing", "Performance testing"],
  },
  {
    id: "consulting",
    title: "IT Consulting and Technology Advisory",
    summary: "Clear, independent guidance on technology strategy and investment.",
    points: ["Technology roadmaps", "Architecture reviews", "Vendor evaluation"],
  },
  {
    id: "staffing",
    title: "Technology Staffing",
    summary: "Skilled engineers who integrate with your team and your way of working.",
    points: ["Dedicated engineers", "Team augmentation", "Flexible engagement"],
  },
  {
    id: "managed",
    title: "Managed IT Services",
    summary: "Ongoing monitoring, support and optimization of your critical systems.",
    points: ["Monitoring & support", "Optimization", "Service continuity"],
  },
];

export const industries = [
  {
    id: "banking",
    title: "Banking and Financial Services",
    summary:
      "Secure, compliant platforms for institutions where reliability and trust are non-negotiable.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    summary:
      "Technology that supports care teams, protects sensitive data and improves patient experiences.",
  },
  {
    id: "fintech",
    title: "FinTech",
    summary:
      "Scalable products built for speed, regulatory awareness and seamless customer journeys.",
  },
  {
    id: "insurance",
    title: "Insurance",
    summary:
      "Modernized policy, claims and customer platforms that reduce manual work and delays.",
  },
  {
    id: "retail",
    title: "Retail and E-commerce",
    summary:
      "Commerce experiences and operational systems that keep pace with customer expectations.",
  },
  {
    id: "enterprise",
    title: "Enterprise Technology",
    summary:
      "Integration, modernization and automation for complex, multi-system organizations.",
  },
];

export const serviceOptions = [
  ...services.map((s) => s.title),
  "Not sure yet — let's discuss",
] as const;
