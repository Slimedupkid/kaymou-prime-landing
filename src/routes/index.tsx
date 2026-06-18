import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaymou Projects — Civil Engineering & Construction" },
      {
        name: "description",
        content:
          "Premium road works, tar surfacing, paving and civil engineering by Kaymou Projects. Safety-first, on-time delivery for public and private clients.",
      },
      { property: "og:title", content: "Kaymou Projects — Civil Engineering & Construction" },
      {
        property: "og:description",
        content:
          "Premium road works, tar surfacing, paving and civil engineering. Safety-first, on-time delivery.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
