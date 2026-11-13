import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500",
        scrolled
          ? "border-b border-border bg-background/90 shadow-header backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className={cn(
          "absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="relative block px-3.5 py-2 text-[0.875rem] font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 hover:after:scale-x-100"
                  activeProps={{ className: "!text-foreground after:!scale-x-100", "aria-current": "page" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">
              Let's Talk
              <ArrowUpRight className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="!size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col border-l-0 bg-background p-0 sm:max-w-sm [&>button]:hidden">
              <div className="flex h-[4.5rem] items-center justify-between border-b border-border px-6">
                <SheetTitle asChild>
                  <span><Logo /></span>
                </SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="!size-5" />
                  </Button>
                </SheetClose>
              </div>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="divide-y divide-border">
                  {navItems.map((item, i) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        activeOptions={{ exact: item.to === "/" }}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline justify-between py-4 text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
                        activeProps={{ className: "!text-accent", "aria-current": "page" }}
                      >
                        {item.label}
                        <span className="caption-mono text-muted-foreground">0{i + 1}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="border-t border-border p-6">
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Let's Talk <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
