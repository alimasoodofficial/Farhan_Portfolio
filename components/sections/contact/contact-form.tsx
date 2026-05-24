"use client";

import { useState } from "react";
import { Send, CheckCircle2, Calendar, Clock, User, Mail, Building, Info, FileText } from "lucide-react";

const industries = ["Cement", "Petroleum", "Textile", "Automotive", "Hospital", "Hydropower", "Other"];
const slots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

const inputCls =
  "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10 shadow-inner dark:bg-muted/10 dark:border-border/60";

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block mt-5 first:mt-0">
      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
        {icon && <span className="text-brand/80">{icon}</span>}
        {label}
      </span>
      <div className="relative rounded-xl transition-all duration-300">
        {children}
      </div>
    </label>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("Cement");
  const [project, setProject] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:col-span-2 rounded-3xl border border-border bg-card/75 backdrop-blur-lg p-6 sm:p-10 shadow-lg dark:bg-card/40 transition-all duration-300 hover:shadow-xl hover:border-brand/20"
    >
      {submitted ? (
        <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-500">
          <div className="mx-auto size-16 grid place-items-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/20">
            <CheckCircle2 className="size-8" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-extrabold text-foreground">
            Request Received!
          </h2>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            Thanks, <span className="font-semibold text-foreground">{name}</span>. I've received your inquiry and will verify our calendar slot.
          </p>

          {/* Premium Consultation Receipt Badge */}
          <div className="mt-8 mx-auto max-w-md rounded-2xl border border-brand/20 bg-brand-soft/30 p-6 text-left dark:bg-brand-soft/5">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-4 flex items-center gap-1.5 border-b border-brand/10 pb-2">
              <Info className="size-3.5" /> Booking Summary
            </div>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Requested By:</span>
                <span className="font-semibold">{name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Industry Focus:</span>
                <span className="inline-flex items-center rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand dark:bg-brand/20 dark:text-brand-foreground">
                  {industry}
                </span>
              </div>
              {company && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Company:</span>
                  <span className="font-semibold">{company}</span>
                </div>
              )}
              {date && (
                <div className="flex justify-between items-center border-t border-dashed border-border pt-3 mt-3">
                  <span className="text-muted-foreground flex items-center gap-1"><Calendar className="size-4 text-brand" /> Date:</span>
                  <span className="font-bold text-brand">{date}</span>
                </div>
              )}
              {slot && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-1"><Clock className="size-4 text-brand" /> Time Slot:</span>
                  <span className="font-bold text-brand">{slot} AST (UTC+3)</span>
                </div>
              )}
            </div>
          </div>
          
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setDate("");
              setSlot(null);
              setName("");
              setEmail("");
              setCompany("");
              setIndustry("Cement");
              setProject("");
            }}
            className="mt-8 inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted hover:scale-[1.02] cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full name" icon={<User className="size-3.5" />}>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className={inputCls}
              />
            </Field>
            <Field label="Email address" icon={<Mail className="size-3.5" />}>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={inputCls}
              />
            </Field>
          </div>

          <Field label="Company name" icon={<Building className="size-3.5" />}>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Optional (e.g. Aramco, Holcim)"
              className={inputCls}
            />
          </Field>

          <Field label="Industry sector focus">
            <div className="flex flex-wrap gap-2 mt-1">
              {industries.map((ind) => (
                <label key={ind} className="cursor-pointer">
                  <input
                    type="radio"
                    name="industry"
                    value={ind}
                    checked={industry === ind}
                    onChange={() => setIndustry(ind)}
                    className="peer sr-only"
                  />
                  <span className="inline-flex rounded-xl border border-border bg-background/50 px-3.5 py-2 text-xs font-semibold text-foreground transition-all shadow-sm peer-checked:bg-brand-gradient peer-checked:text-brand-foreground peer-checked:border-brand peer-checked:shadow-brand/10 peer-checked:scale-[1.04] hover:bg-muted dark:bg-muted/10 dark:border-border/60">
                    {ind}
                  </span>
                </label>
              ))}
            </div>
          </Field>

          <Field label="Tell me about your project scope" icon={<FileText className="size-3.5" />}>
            <textarea
              required
              rows={4}
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="E.g., We need to conduct a stacks carbon emissions audit for a cement plant in Dammam by Q3..."
              className={`${inputCls} resize-none`}
            />
          </Field>

          {/* Complete Booking Slot Section */}
          <div className="mt-8 rounded-2xl border border-brand/20 bg-brand-soft/40 p-5 sm:p-6 shadow-sm dark:bg-brand-soft/5">
            <div className="flex items-center gap-2 font-bold text-foreground">
              <Calendar className="size-4.5 text-brand" /> Pick a Consulting Slot (Optional)
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Select a date and hour for a provisional 30-minute introductory call.
            </p>
            
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Select Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`${inputCls} mt-1.5`}
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">Available Time Slots</label>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSlot(slot === s ? null : s)}
                      className={`rounded-xl border px-3 py-2 text-xs font-bold shadow-sm transition-all duration-200 cursor-pointer ${
                        slot === s
                          ? "bg-brand-gradient text-brand-foreground border-brand shadow-md shadow-brand/10 scale-[1.04]"
                          : "bg-background/50 text-foreground border-border hover:bg-muted dark:bg-muted/10 dark:border-border/60 hover:border-brand/40"
                      }`}
                    >
                      {s} AST
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient hover:bg-brand-gradient-hover text-brand-foreground px-8 py-3.5 text-sm font-bold shadow-md transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-brand/20 cursor-pointer"
          >
            Send Message & Request Slot
            <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </button>
        </div>
      )}
    </form>
  );
}

