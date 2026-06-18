import { useEffect, useState } from "react";
import { Menu, X, HardHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Get a Quote", href: "#quote" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span
            className={`w-9 h-9 rounded-lg grid place-items-center transition-colors ${
              scrolled ? "bg-[var(--color-amber-brand)]" : "bg-[var(--color-amber-brand)]"
            }`}
          >
            <HardHat className="w-5 h-5 text-[var(--color-slate-ink)]" />
          </span>
          <span
            className={`font-display font-bold text-lg tracking-tight transition-colors ${
              scrolled ? "text-[var(--color-slate-ink)]" : "text-white"
            }`}
          >
            Kaymou<span className="text-[var(--color-amber-brand)]">.</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled
                    ? "text-[var(--color-slate-ink)]/80 hover:text-[var(--color-amber-brand-deep)]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#quote"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-[var(--color-amber-brand)] text-[var(--color-slate-ink)] text-sm font-semibold hover:bg-[var(--color-amber-brand-deep)] hover:text-white transition-all hover:scale-[1.03]"
        >
          Get a Quote
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${
            scrolled ? "text-[var(--color-slate-ink)]" : "text-white"
          }`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-[var(--color-border)]"
          >
            <ul className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-3 py-2.5 rounded-md text-[var(--color-slate-ink)] hover:bg-[var(--color-muted)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
