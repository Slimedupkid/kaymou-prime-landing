import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Kaymou Projects construction site at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, color-mix(in oklab, var(--color-slate-ink) 85%, transparent) 0%, color-mix(in oklab, var(--color-slate-ink) 65%, transparent) 60%, color-mix(in oklab, var(--color-slate-ink) 40%, transparent) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white/90 text-xs font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber-brand)]" />
            Civil Engineering & Construction
          </span>

          <h1 className="mt-6 font-display text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            Embracing the <span className="text-[var(--color-amber-brand)]">initiatives</span> of construction.
          </h1>

          <p className="mt-6 max-w-xl text-white/80 text-lg leading-relaxed">
            Kaymou Projects delivers premium road works, tar surfacing and paving
            backed by a relentless commitment to safety, quality, and on-time
            execution.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--color-amber-brand)] text-[var(--color-slate-ink)] font-semibold shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-full text-white/90 hover:text-white font-medium"
            >
              <PlayCircle className="w-5 h-5" />
              About Us
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { n: "12+", l: "Years of Expertise" },
              { n: "240+", l: "Projects Delivered" },
              { n: "99%", l: "Safety Record" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-bold text-[var(--color-amber-brand)]">
                  {s.n}
                </div>
                <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-wide">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
