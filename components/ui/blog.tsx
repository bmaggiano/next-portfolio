import { ContentCard } from "./contentCard";
import { blogContent } from "@/app/blogContent";

export default function Blog() {
  return (
    <main className="mt-8">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <h2 className="text-white text-3xl mb-12 font-medium sm:text-3xl md:text-6xl">
          Blog
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {blogContent.map((blog, index) => (
          <ContentCard key={index} {...blog} />
        ))}
      </div>
    </main>
  );
}
