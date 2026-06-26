// 1. Updated import to point directly to the local image
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-[var(--color-slate-ink)] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg overflow-hidden bg-[var(--color-amber-brand)] grid place-items-center">
            
            {/* 2. Removed the .url from the src attribute */}
            <img src={logo} alt="Kaymou Projects" className="w-full h-full object-cover" />
            
          </span>
          <span className="font-display font-bold text-white">
            Kaymou Projects
          </span>
        </div>
        <p className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Kaymou Projects · Done right the first time
        </p>
      </div>
    </footer>
  );
}