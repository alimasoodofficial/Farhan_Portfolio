import { BlogsGrid } from "@/components/sections/blogs/blogs-grid";

export const metadata = {
  title: "Blog — Farhan Ali",
  description: "Notes on sustainability, NCEC regulations, and air pollution control technologies.",
};

export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-8">
      <BlogsGrid />
    </div>
  );
}
