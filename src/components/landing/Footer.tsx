import { HardHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-slate-ink)] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-[var(--color-amber-brand)] grid place-items-center">
            <HardHat className="w-4 h-4 text-[var(--color-slate-ink)]" />
          </span>
          <span className="font-display font-bold text-white">
            Kaymou Projects
          </span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Kaymou Projects. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
