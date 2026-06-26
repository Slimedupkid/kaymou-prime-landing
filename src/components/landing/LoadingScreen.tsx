import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// 1. Updated the import to point directly to your logo file
import logo from "@/assets/logo.jpeg";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hide = () => setVisible(false);
    if (document.readyState === "complete") {
      const t = window.setTimeout(hide, 900);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(hide, 2200);
    window.addEventListener("load", hide, { once: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[var(--color-slate-ink)]"
        >
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, var(--color-amber-brand) 0, transparent 40%), radial-gradient(circle at 70% 70%, var(--color-amber-brand) 0, transparent 45%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-24 h-24 rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] ring-2 ring-[var(--color-amber-brand)]/40"
            >
              
              {/* 2. Dropped the .url from the src attribute */}
              <img
                src={logo}
                alt="Kaymou Projects"
                className="w-full h-full object-cover"
              />
              
            </motion.div>

            <div className="text-center">
              <div className="font-display text-white text-2xl font-bold tracking-tight">
                Kaymou <span className="text-[var(--color-amber-brand)]">Projects</span>
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.32em] text-white/60">
                Done right the first time
              </div>
            </div>

            <div className="relative w-48 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[var(--color-amber-brand)] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}