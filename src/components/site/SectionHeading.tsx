import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  layout?: "stacked" | "split";
  className?: string;
  titleAs?: "h1" | "h2";
};

export function Eyebrow({ children, tone = "light", className }: { children: ReactNode; tone?: "light" | "dark"; className?: string }) {
  return (
    <p className={cn("eyebrow inline-flex items-center gap-3", tone === "dark" ? "text-on-navy-muted" : "text-accent", className)}>
      <span aria-hidden className={cn("h-px w-6", tone === "dark" ? "bg-accent" : "bg-accent")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  layout = "stacked",
  className,
  titleAs: Title = "h2",
}: SectionHeadingProps) {
  const muted = tone === "dark" ? "text-on-navy-muted" : "text-muted-foreground";
  if (layout === "split") {
    return (
      <div className={cn("grid gap-8 lg:grid-cols-12 lg:gap-12", className)}>
        <Reveal className="lg:col-span-7">
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
          <Title className="display-lg mt-5">{title}</Title>
        </Reveal>
        {description && (
          <Reveal delay={0.1} className="lg:col-span-5 lg:self-end">
            <p className={cn("lede", muted)}>{description}</p>
          </Reveal>
        )}
      </div>
    );
  }
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <Title className="display-lg mt-5">{title}</Title>
      {description && <p className={cn("lede mt-6 max-w-2xl", muted)}>{description}</p>}
    </Reveal>
  );
}
