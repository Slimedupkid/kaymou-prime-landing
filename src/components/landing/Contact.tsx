import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid contact number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Please give us a few details").max(2000),
});

function Field({
  label,
  type = "text",
  textarea,
  error,
  ...rest
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  name: string;
  required?: boolean;
  error?: string;
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
    className: `peer w-full bg-[var(--color-slate-surface)] rounded-xl px-4 pt-6 pb-2.5 text-[var(--color-slate-ink)] outline-none border transition-all ${
      error
        ? "border-red-400 focus:border-red-500"
        : "border-transparent focus:border-[var(--color-amber-brand)] focus:bg-white"
    }`,
    ...rest,
  };

  return (
    <div>
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
      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
}

const contactItems = [
  {
    Icon: Phone,
    label: "Phone",
    lines: ["072 067 3976", "061 523 5934", "(086) 590 2178"],
  },
  { Icon: Mail, label: "Email", lines: ["info@kaymou.co.za"] },
  {
    Icon: MapPin,
    label: "Durban Office",
    lines: ["333 Anton Lembede Street", "Durban, 4001"],
  },
  {
    Icon: MapPin,
    label: "Johannesburg Office",
    lines: ["38 Melle Street", "Braamfontein, Johannesburg, 2001"],
  },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");
    setErrorMsg("");

    try {
      // FormSubmit.co — free contact-form forwarding service, no signup required.
      // The first submission triggers a one-time confirmation email to the
      // recipient address. After confirming, every submission is delivered.
      const res = await fetch("https://formsubmit.co/ajax/info@kaymou.co.za", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...parsed.data,
          _subject: `New quote request from ${parsed.data.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean };
      if (json.success === false) throw new Error("Submission rejected");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

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
            {contactItems.map(({ Icon, label, lines }, i) => (
              <Reveal key={label} delay={0.1 + i * 0.05}>
                <li className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-xl bg-[var(--color-amber-brand)]/15 border border-[var(--color-amber-brand)]/25 grid place-items-center shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-amber-brand)]" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">
                      {label}
                    </div>
                    <div className="mt-1 text-white font-medium space-y-0.5">
                      {lines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="bg-white rounded-3xl p-8 lg:p-10 text-[var(--color-slate-ink)] shadow-[var(--shadow-elevated)]"
          >
            <h3 className="font-display text-2xl font-bold">Request a Quote</h3>
            <p className="text-[var(--color-muted-foreground)] text-sm mt-1">
              Fill in the details below and we'll be in touch.
            </p>

            {status === "success" ? (
              <div className="mt-8 p-6 rounded-2xl bg-green-50 border border-green-200 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Message sent</h4>
                  <p className="mt-1 text-sm text-green-800">
                    Thanks — we've received your request and will reply within
                    one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-3 text-sm font-semibold text-green-900 underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                <Field name="name" label="Full Name" required error={errors.name} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field name="phone" type="tel" label="Contact Number" required error={errors.phone} />
                  <Field name="email" type="email" label="Email Address" required error={errors.email} />
                </div>
                <Field name="message" label="Tell us about your project" textarea required error={errors.message} />

                {status === "error" && (
                  <p className="text-sm text-red-600 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" /> Couldn't send your
                    message ({errorMsg}). Please email info@kaymou.co.za directly.
                  </p>
                )}

                <motion.button
                  whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[var(--color-slate-ink)] text-white font-semibold hover:bg-[var(--color-amber-brand)] hover:text-[var(--color-slate-ink)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Request"}
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
