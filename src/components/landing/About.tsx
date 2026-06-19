import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import about2 from "@/assets/about-2.jpg";
import portrait from "@/assets/client/about-portrait.jpeg.asset.json";
import banner from "@/assets/client/about-banner.png.asset.json";

const points = [
  "Well trained and skilled staff",
  "Proven track record of delivery",
  "Continuous infrastructure upgrades",
  "Industry-leading safety standards",
];

export function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-[var(--color-slate-surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Collage */}
        <Reveal>
          <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[560px]">
            <img
              src={portrait.url}
              alt="Kaymou Projects team member in branded safety gear"
              loading="lazy"
              className="col-span-4 row-span-6 w-full h-full object-cover object-top rounded-2xl shadow-[var(--shadow-elevated)]"
            />
            <img
              src={banner.url}
              alt="Kaymou Projects team — embracing the initiatives of construction"
              loading="lazy"
              className="col-span-2 row-span-3 w-full h-full object-cover rounded-2xl"
            />
            <img
              src={about2}
              alt="Freshly paved highway with lane markings"
              loading="lazy"
              className="col-span-2 row-span-3 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="text-[var(--color-amber-brand-deep)] font-semibold text-sm tracking-widest uppercase">
              About Kaymou
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--color-slate-ink)] leading-tight">
              Building infrastructure that stands the test of time.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[var(--color-muted-foreground)] text-lg leading-relaxed">
              We are committed to safety, the continuous upgrading of
              infrastructure, and rigorous training of our staff. Every project
              is engineered with precision and delivered with pride —
              from neighbourhood paving to large-scale civil works.
            </p>
          </Reveal>

          <ul className="mt-10 grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.15 + i * 0.05}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-[var(--color-amber-brand-deep)] shrink-0" />
                  <span className="text-[var(--color-slate-ink)] font-medium">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.4}>
            <a
              href="#services"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-slate-ink)] text-white font-semibold hover:bg-[var(--color-slate-ink)]/90 transition-all hover:scale-[1.03]"
            >
              Explore our services
            </a>
          </Reveal>
        </div>
      </div>

      {/* Wide team banner */}
      <Reveal delay={0.1}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 lg:mt-24">
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)]">
            <img
              src={banner.url}
              alt="Kaymou Projects team at work — embracing the initiatives of construction"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
