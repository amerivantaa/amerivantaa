import { Link } from "@tanstack/react-router";
import markLight from "@/assets/brand/amerivantaa-mark.png.asset.json";
import markDark from "@/assets/brand/amerivantaa-mark-dark.png.asset.json";
import wordLight from "@/assets/brand/amerivantaa-wordmark-light.png.asset.json";
import wordDark from "@/assets/brand/amerivantaa-wordmark-dark.png.asset.json";
import { cn } from "@/lib/utils";

/** AMERIVANTAA logo lockup: A-V mark + wordmark, using the supplied brand artwork. */
export function Logo({
  tone = "dark",
  className,
  size = "md",
}: {
  tone?: "dark" | "light";
  className?: string;
  size?: "md" | "lg";
}) {
  const mark = tone === "dark" ? markLight : markDark;
  const word = tone === "dark" ? wordLight : wordDark;
  const markH = size === "lg" ? 40 : 30;
  const wordH = size === "lg" ? 15 : 12;
  const markW = Math.round((tone === "dark" ? 605 / 478 : 378 / 297) * markH);
  const wordW = Math.round((tone === "dark" ? 1100 / 88 : 923 / 74) * wordH);
  return (
    <Link
      to="/"
      aria-label="Amerivantaa — home"
      className={cn("group inline-flex shrink-0 items-center gap-3", className)}
    >
      <img
        src={mark.url}
        alt=""
        width={markW}
        height={markH}
        style={{ height: markH, width: markW }}
        className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-translate-y-0.5"
      />
      <img src={word.url} alt="Amerivantaa" width={wordW} height={wordH} style={{ height: wordH, width: wordW }} />
    </Link>
  );
}
