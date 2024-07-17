import { ContentCard } from "./contentCard";

export default function Blog() {
    return (
        <main>
            <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                <h2 className="text-white text-3xl mb-12 font-medium sm:text-3xl md:text-6xl">Blog</h2>
            </div>
            <ContentCard />
        </main>

    )
}