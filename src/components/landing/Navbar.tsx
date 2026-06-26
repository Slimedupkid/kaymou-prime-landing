import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

// 1. Updated this import to point directly to your image file
import logo from "@/assets/logo.jpeg";

const links = [
  { label: "Home", to: "/", hash: undefined as string | undefined },
  { label: "About Us", to: "/", hash: "about" },
  { label: "Our Services", to: "/services", hash: undefined },
  { label: "Get a Quote", to: "/", hash: "quote" },
  { label: "Contact Us", to: "/", hash: "contact" },
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
        <Link to="/" className="flex items-center gap-3 group">
          <span className="h-12 w-12 rounded-lg overflow-hidden bg-[var(--color-amber-brand)] grid place-items-center">
            
            {/* 2. Swapped the hardcoded path for the imported logo variable */}
            <img
              src={logo}
              alt="Kaymou Projects logo"
              className="h-full w-full object-cover"
            />
            
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span
              className={`font-display font-bold text-base tracking-tight transition-colors ${
                scrolled ? "text-[var(--color-slate-ink)]" : "text-white"
              }`}
            >
              Kaymou Projects
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${
                scrolled ? "text-[var(--color-amber-brand-deep)]" : "text-[var(--color-amber-brand)]"
              }`}
            >
              Done right the first time
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={l.hash}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled
                    ? "text-[var(--color-slate-ink)]/80 hover:text-[var(--color-amber-brand-deep)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          hash="quote"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-[var(--color-amber-brand)] text-[var(--color-slate-ink)] text-sm font-semibold hover:bg-[var(--color-amber-brand-deep)] hover:text-white transition-all hover:scale-[1.03]"
        >
          Get a Quote
        </Link>

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
                <li key={l.label}>
                  <Link
                    onClick={() => setOpen(false)}
                    to={l.to}
                    hash={l.hash}
                    className="block px-3 py-2.5 rounded-md text-[var(--color-slate-ink)] hover:bg-[var(--color-muted)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}