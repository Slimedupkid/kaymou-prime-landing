import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

function Field({
  label,
  type = "text",
  textarea,
  ...rest
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  name: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  const shared = {
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value),
    value,
    className:
      "peer w-full bg-[var(--color-slate-surface)] rounded-xl px-4 pt-6 pb-2.5 text-[var(--color-slate-ink)] outline-none border border-transparent focus:border-[var(--color-amber-brand)] focus:bg-white transition-all",
    ...rest,
  };

  return (
    <label className="relative block">
      {textarea ? (
        <textarea rows={5} {...(shared as any)} />
      ) : (
        <input type={type} {...(shared as any)} />
      )}
      <span
        className={`absolute left-4 pointer-events-none transition-all ${
          active
            ? "top-2 text-xs text-[var(--color-amber-brand-deep)] font-medium"
            : "top-4 text-sm text-[var(--color-muted-foreground)]"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

const contactItems = [
  { Icon: Phone, label: "Phone", value: "+27 (0) 11 234 5678" },
  { Icon: Mail, label: "Email", value: "info@kaymouprojects.co.za" },
  { Icon: MapPin, label: "Office", value: "12 Industrial Road, Johannesburg" },
];

export function Contact() {
  return (
    <section
      id="quote"
      className="py-28 lg:py-36 bg-[var(--color-slate-ink)] text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--color-amber-brand) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-amber-brand) 0, transparent 40%)",
        }}
      />
      <div id="contact" className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <Reveal>
            <span className="text-[var(--color-amber-brand)] font-semibold text-sm tracking-widest uppercase">
              Get a Quote
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              Let's build something <span className="text-[var(--color-amber-brand)]">remarkable</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-md">
              Tell us about your project. We'll respond within one business day
              with a transparent, no-obligation quote.
            </p>
          </Reveal>

          <ul className="mt-12 space-y-6">
            {contactItems.map(({ Icon, label, value }, i) => (
              <Reveal key={label} delay={0.15 + i * 0.05}>
                <li className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-xl bg-[var(--color-amber-brand)]/15 border border-[var(--color-amber-brand)]/25 grid place-items-center shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-amber-brand)]" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">
                      {label}
                    </div>
                    <div className="mt-1 text-white font-medium">{value}</div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch shortly.");
            }}
            className="bg-white rounded-3xl p-8 lg:p-10 text-[var(--color-slate-ink)] shadow-[var(--shadow-elevated)]"
          >
            <h3 className="font-display text-2xl font-bold">Request a Quote</h3>
            <p className="text-[var(--color-muted-foreground)] text-sm mt-1">
              Fill in the details below and we'll be in touch.
            </p>

            <div className="mt-8 space-y-4">
              <Field name="name" label="Full Name" required />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="phone" type="tel" label="Contact Number" required />
                <Field name="email" type="email" label="Email Address" required />
              </div>
              <Field name="message" label="Tell us about your project" textarea required />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[var(--color-slate-ink)] text-white font-semibold hover:bg-[var(--color-amber-brand)] hover:text-[var(--color-slate-ink)] transition-colors"
              >
                Send Request
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
