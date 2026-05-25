import { ContactInfo } from "@/components/sections/contact/contact-info";
import { ContactForm } from "@/components/sections/contact/contact-form";

export const metadata = {
  title: "Contact — Farhan Ali",
  description: "Get in touch or book a consulting slot with Farhan Ali.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden z-0 min-h-[calc(100vh-4rem)] pb-16">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_80%)] pointer-events-none" />
      <div className="absolute top-20 right-0 sm:right-12 size-96 rounded-full bg-brand/10 dark:bg-brand/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-20 left-0 sm:left-12 size-96 rounded-full bg-highlight/15 dark:bg-highlight/10 blur-3xl -z-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

