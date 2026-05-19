"use client";

import { useState } from "react";
import { Send, CheckCircle2, Calendar } from "lucide-react";

const industries = ["Cement", "Petroleum", "Textile", "Automotive", "Hospital", "Hydropower", "Other"];
const slots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

const inputCls =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 shadow-sm";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block mt-4">
      <span className="block text-xs font-medium text-muted-foreground mb-1">{label}</span>
      {children}
    </label>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState<string | null>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="lg:col-span-2 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-md"
    >
      {submitted ? (
        <div className="py-16 text-center">
          <div className="mx-auto size-14 grid place-items-center rounded-full bg-brand-gradient text-brand-foreground shadow-md">
            <CheckCircle2 className="size-7" />
          </div>
          <div className="mt-4 font-display text-2xl font-bold">Request received!</div>
          <p className="mt-2 text-muted-foreground">I'll confirm your slot by email shortly.</p>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name"><input required placeholder="Jane Doe" className={inputCls} /></Field>
            <Field label="Email"><input required type="email" placeholder="you@company.com" className={inputCls} /></Field>
          </div>
          <Field label="Company">
            <input placeholder="Optional" className={inputCls} />
          </Field>
          <Field label="Industry type">
            <div className="flex flex-wrap gap-2">
              {industries.map((i) => (
                <label key={i} className="cursor-pointer">
                  <input type="radio" name="industry" className="peer sr-only" defaultChecked={i === "Cement"} />
                  <span className="rounded-full border border-border bg-background px-3 py-1.5 text-sm transition-colors peer-checked:bg-brand-gradient peer-checked:text-brand-foreground peer-checked:border-brand-dark shadow-sm">
                    {i}
                  </span>
                </label>
              ))}
            </div>
          </Field>

          <Field label="Tell me about your project">
            <textarea rows={4} placeholder="Site, scope, timelines…" className={`${inputCls} resize-none`} />
          </Field>

          <div className="mt-6 rounded-2xl border border-border bg-brand-soft/40 p-5 shadow-sm">
            <div className="flex items-center gap-2 font-semibold">
              <Calendar className="size-4 text-brand" /> Pick a slot
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`${inputCls} mt-1`}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Time</label>
                <div className="mt-1 flex flex-wrap gap-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSlot(s)}
                      className={`rounded-lg border px-3 py-1.5 text-sm transition-colors shadow-sm ${
                        slot === s
                          ? "bg-brand-gradient text-brand-foreground border-brand shadow-md"
                          : "bg-card border-border hover:border-brand/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 group inline-flex items-center gap-2 rounded-xl bg-highlight px-6 py-3 text-sm font-semibold text-highlight-foreground shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
          >
            Send & request booking
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </>
      )}
    </form>
  );
}
