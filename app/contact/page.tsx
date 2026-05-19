import { ContactInfo } from "@/components/sections/contact/contact-info";
import { ContactForm } from "@/components/sections/contact/contact-form";

export const metadata = {
  title: "Contact — Farhan Ali",
  description: "Get in touch or book a consulting slot with Farhan Ali.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">Contact</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">Let's talk emissions.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Send a note or book a slot — I'll get back within one working day.
      </p>

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
