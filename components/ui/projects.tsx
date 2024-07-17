"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const projects = [
    {
        name: "Fantasy Football Dashboard",
        body: "Clean UI fantasy football dashboard with real data from Sleeper",
        img: "/football.png",
        url: "https://sleeper-dashboard.vercel.app/"
    },
    {
        name: "Instagram Caption Generator",
        body: "AI generated captions for Instagram posts with OpenAI",
        img: "/igcap.png",
        url: ""
    },
    {
        name: "Healthcare Download",
        body: "Over a year of work experience helping create the Mint.com of healthcare",
        img: "/hcdl.png",
        url: "https://www.healthcare-download.com/"
    },
    {
        name: "The Casual's Caddie",
        body: "Track your golf club distances and see how you compare to pros",
        img: "/golf.png",
        url: "https://the-casuals-caddie.herokuapp.com/"
    },
    {
        name: "Note Taking App",
        body: "Basic CRUD app for taking notes",
        img: "/notetake.png",
        url: "https://study-sheet.vercel.app/"
    },
    {
        name: "Three Tabs Three Ways",
        body: "Fun, electric, UI showcasing different ways to use tabs",
        img: "/tabs.png",
        url: ""
    },
];

const firstRow = projects.slice(0, projects.length / 2);
const secondRow = projects.slice(projects.length / 2);

const ReviewCard = ({
    img,
    name,
    body,
    onClick,
    url,
}: {
    img: string;
    name: string;
    body: string;
    onClick: () => void;
    url: string;
}) => {
    return (
        <figure
            onClick={onClick}
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full bg-white" width={32} height={32} alt={name} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="text-gray-400 mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function Projects() {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <h2 className="text-white text-3xl mb-12 font-medium sm:text-3xl md:text-6xl">Projects</h2>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} onClick={() => handleClick(review.url)} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} onClick={() => handleClick(review.url)} {...review} />
                ))}
            </Marquee>
            {/* Overlay gradients for aesthetic effect */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>
    );
}