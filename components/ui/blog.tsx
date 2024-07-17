import { ContentCard } from "./contentCard";
import { blogContent } from "@/app/blogContent";

export default function Blog() {
    return (
        <main className="mt-8">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                <h2 className="text-white text-3xl mb-12 font-medium sm:text-3xl md:text-6xl">Blog</h2>
            </div>
            <div className="flex sm:flex-row flex-col justify-center sm:justify-evenly gap-y-2 sm:gap-y-0 gap-x-12">
                {blogContent.map((blog, index) => (
                    <ContentCard key={index} {...blog} />
                ))}
            </div>
        </main>

    )
}