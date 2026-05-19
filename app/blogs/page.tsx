import { BlogsGrid } from "@/components/sections/blogs/blogs-grid";

export const metadata = {
  title: "Blog — Farhan Ali",
  description: "Notes on sustainability, NCEC regulations, and air pollution control technologies.",
};

export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">Blog</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">Field notes & longer reads.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Short essays on regulations, instruments, and the practical side of being an environmental engineer.
      </p>

      <BlogsGrid />
    </div>
  );
}
