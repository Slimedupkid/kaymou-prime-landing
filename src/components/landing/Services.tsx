import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { services } from "./servicesData";

export function Services() {
  const preview = services.slice(0, 8);

  return (
    <section id="services" className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-[var(--color-amber-brand-deep)] font-semibold text-sm tracking-widest uppercase">
                Our Services
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--color-slate-ink)] leading-tight">
                Comprehensive civil works, delivered end-to-end.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-[var(--color-muted-foreground)] max-w-md">
              From the first survey to the final inspection, we own every detail
              so you get a project that's safe, on time and on budget.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preview.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group h-full bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] overflow-hidden flex flex-col transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[var(--color-amber-brand)] grid place-items-center shadow-lg">
                      <Icon className="w-5 h-5 text-[var(--color-slate-ink)]" />
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg font-bold text-[var(--color-slate-ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[var(--color-muted-foreground)] text-sm leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <a
                      href="/#quote"
                      className="mt-5 inline-flex items-center gap-1.5 text-[var(--color-amber-brand-deep)] font-semibold text-sm group-hover:gap-2.5 transition-all"
                    >
                      Request a quote
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-slate-ink)] text-white font-semibold hover:bg-[var(--color-amber-brand)] hover:text-[var(--color-slate-ink)] transition-colors"
            >
              View all {services.length} services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
