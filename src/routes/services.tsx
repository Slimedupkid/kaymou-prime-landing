import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Contact } from "@/components/landing/Contact";
import { Reveal } from "@/components/landing/Reveal";
import { services } from "@/components/landing/servicesData";
import work1 from "@/assets/client/work-1.jpeg.asset.json";
import work2 from "@/assets/client/work-2.jpeg.asset.json";
import work4 from "@/assets/client/work-4.jpeg.asset.json";
import work5 from "@/assets/client/work-5.jpeg.asset.json";
import work6 from "@/assets/client/work-6.jpeg.asset.json";
import work7 from "@/assets/client/work-7.jpeg.asset.json";
import work8 from "@/assets/client/work-8.jpeg.asset.json";
import work9 from "@/assets/client/work-9.jpeg.asset.json";
import workVideo from "@/assets/client/work-video.mp4.asset.json";

const gallery = [
  { src: work1.url, alt: "Newly surfaced road with fresh line marking" },
  { src: work2.url, alt: "Asphalt driveway compaction in progress" },
  { src: work7.url, alt: "Steep driveway tar surfacing" },
  { src: work8.url, alt: "Team laying and compacting asphalt" },
  { src: work5.url, alt: "Kaymou team performing road repairs" },
  { src: work6.url, alt: "Interlocking paving alongside roadway" },
  { src: work9.url, alt: "Decorative pattern paving installation" },
  { src: work4.url, alt: "Completed tar surfacing at residential site" },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Kaymou Projects" },
      {
        name: "description",
        content:
          "Solar, plant hire, tar surfacing, paving, kerbing, building, concrete, rigging, structural engineering, quantity surveying, road works, sewage and cleaning by Kaymou Projects.",
      },
      { property: "og:title", content: "Our Services — Kaymou Projects" },
      {
        property: "og:description",
        content:
          "Full-spectrum civil engineering and construction services delivered end-to-end.",
      },
      { property: "og:image", content: work1.url },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[var(--color-slate-ink)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, var(--color-amber-brand) 0, transparent 35%), radial-gradient(circle at 85% 80%, var(--color-amber-brand) 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[var(--color-amber-brand)] text-sm font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <Reveal>
            <span className="text-[var(--color-amber-brand)] font-semibold text-sm tracking-widest uppercase">
              Our Services
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
              Everything you need to{" "}
              <span className="text-[var(--color-amber-brand)]">build, surface and power</span> a project.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-white/75 text-lg leading-relaxed">
              From solar installations and structural engineering through to
              paving, tar surfacing and post-construction cleaning — Kaymou
              Projects is your single point of accountability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(i % 6) * 0.04}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="group h-full bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] overflow-hidden flex flex-col transition-shadow"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-slate-ink)]/60 to-transparent" />
                      <span className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[var(--color-amber-brand)] grid place-items-center shadow-lg">
                        <Icon className="w-5 h-5 text-[var(--color-slate-ink)]" />
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="font-display text-xl font-bold text-[var(--color-slate-ink)]">
                        {s.title}
                      </h2>
                      <p className="mt-2 text-[var(--color-muted-foreground)] text-sm leading-relaxed flex-1">
                        {s.desc}
                      </p>
                      <Link
                        to="/"
                        hash="quote"
                        className="mt-5 inline-flex items-center gap-1.5 text-[var(--color-amber-brand-deep)] font-semibold text-sm group-hover:gap-2.5 transition-all"
                      >
                        Request a quote
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="py-24 lg:py-32 bg-[var(--color-slate-surface)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <span className="text-[var(--color-amber-brand-deep)] font-semibold text-sm tracking-widest uppercase">
                Recent Work
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-[var(--color-slate-ink)] leading-tight">
                Real projects, delivered on site.
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <div className="mb-6 rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] bg-black aspect-video">
              <video
                src={workVideo.url}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) * 0.04}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
