import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { contact } from "@/content/site";
import { Logo } from "./Logo";

function FooterHeading({ children }: { children: ReactNode }) {
  return <h3 className="caption-mono mb-5 text-on-navy-muted">{children}</h3>;
}

const linkCls = "link-underline text-[0.9rem] text-on-navy/85 transition-colors hover:text-on-navy";

/** Shows a real link when configured, otherwise a clearly-pending label. */
function ExternalOrPending({ href, label }: { href: string; label: string }) {
  if (href) {
    return (
      <a href={href} className={linkCls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {label}
      </a>
    );
  }
  return (
    <span className="text-[0.9rem] text-on-navy-muted/70" title="To be added">
      {label} <span className="caption-mono ml-1 text-[0.6rem]">— soon</span>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="surface-navy border-t border-navy-line">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-on-navy-muted">
            Building technology solutions that help businesses innovate, transform, and grow.
          </p>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading>Company</FooterHeading>
          <ul className="space-y-3">
            <li><Link to="/company" className={linkCls}>About Us</Link></li>
            <li><Link to="/company" hash="people" className={linkCls}>Our Team</Link></li>
            <li><Link to="/work" className={linkCls}>Our Work</Link></li>
            <li><Link to="/contact" className={linkCls}>Careers</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterHeading>Solutions</FooterHeading>
          <ul className="space-y-3">
            <li><Link to="/solutions" hash="software" className={linkCls}>Software Development</Link></li>
            <li><Link to="/solutions" hash="cloud" className={linkCls}>Cloud &amp; DevOps</Link></li>
            <li><Link to="/solutions" hash="ai" className={linkCls}>AI &amp; Automation</Link></li>
            <li><Link to="/solutions" hash="consulting" className={linkCls}>IT Consulting</Link></li>
            <li><Link to="/solutions" hash="qa" className={linkCls}>QA &amp; Testing</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading>Connect</FooterHeading>
          <ul className="space-y-3">
            <li><Link to="/contact" className={linkCls}>Contact Us</Link></li>
            <li><ExternalOrPending href={contact.linkedin} label="LinkedIn" /></li>
            <li>
              <ExternalOrPending href={contact.email ? `mailto:${contact.email}` : ""} label="Email" />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-line">
        <div className="container-site flex flex-col gap-4 py-6 text-[0.8rem] text-on-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 Amerivantaa. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link to="/privacy" className="link-underline hover:text-on-navy">Privacy Policy</Link></li>
            <li><Link to="/terms" className="link-underline hover:text-on-navy">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
