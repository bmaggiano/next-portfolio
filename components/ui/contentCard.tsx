"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function ContentCard({ title, description, image, readTime, id, lighter }: { title: string, description: string, image: string, readTime: number, id: string, lighter?: boolean }) {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/blog/${id}`)} className="sm:max-w-xs w-full group/card">
            <div
                className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
                    "bg-cover bg-center"
                )}
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className={cn("absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black ",
                    lighter ? `group-hover/card:opacity-50 bg-black opacity-70 bg-center` : `group-hover/card:opacity-60 bg-black opacity-80 bg-center`)}
                ></div>
                <div className="flex flex-row justify-end items-center space-x-4 z-10">

                    <div className="flex flex-col">

                        <p className="text-sm text-gray-300">{readTime} min read</p>
                    </div>
                </div>
                <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {title}
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
