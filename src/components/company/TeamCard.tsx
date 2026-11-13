import { LinkedinIcon } from "lucide-react";
import type { TeamMember } from "@/content/team";

export function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className="group relative">
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={member.photo}
          alt={`Portrait — ${member.role}`}
          width={768}
          height={960}
          loading="lazy"
          decoding="async"
          className="photo-mono aspect-[4/5] w-full object-cover group-hover:scale-[1.04] group-hover:grayscale-0 group-focus-within:grayscale-0 [@media(hover:none)]:grayscale-0"
        />
        <span className="caption-mono absolute left-3 top-3 bg-background/90 px-2 py-1 text-foreground backdrop-blur-sm">
          {num}
        </span>
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-x-100"
        />
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 pt-5">
        <div className="min-w-0">
          <p className="caption-mono text-accent">{member.role}</p>
          <h3 className="mt-2 truncate text-[1.05rem] font-semibold tracking-tight sm:text-lg">{member.name}</h3>
        </div>
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <LinkedinIcon className="size-4" />
          </a>
        ) : (
          <span
            role="img"
            aria-label="LinkedIn profile to be added"
            title="LinkedIn profile to be added"
            className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-dashed border-border text-muted-foreground/60"
          >
            <LinkedinIcon className="size-4" />
          </span>
        )}
      </div>
      <p className="mt-3 hidden text-[0.9rem] leading-relaxed text-muted-foreground sm:block">{member.bio}</p>
    </article>
  );
}
