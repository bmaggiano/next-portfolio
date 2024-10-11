"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./card";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Stuart AI",
    body: "Your AI friendly fantasy football knowledge base",
    img: "/football.png",
    url: "https://sleeper-dashboard.vercel.app/",
  },
  {
    name: "Healthcare Download",
    body: "Over a year of work experience helping create the Mint.com of healthcare",
    img: "/hcdl.png",
    url: "https://www.healthcare-download.com/",
  },
  {
    name: "Instagram Caption Generator",
    body: "AI generated captions for Instagram posts with OpenAI",
    img: "/igcap.png",
    url: "https://instagram-caption-generator-pi.vercel.app/",
  },
  {
    name: "The Casual's Caddie",
    body: "Track your golf club distances and see how you compare to pros",
    img: "/golf.png",
    url: "https://the-casuals-caddie.herokuapp.com/",
  },
  {
    name: "Note Taking App",
    body: "Basic CRUD app for taking notes",
    img: "/notetake.png",
    url: "https://study-sheet.vercel.app/",
  },
  {
    name: "Three Tabs Three Ways",
    body: "Fun, electric, UI showcasing different ways to use tabs",
    img: "/tabs.png",
    url: "https://three-tabs-three-ways.vercel.app/",
  },
];

const ReviewCard = ({
  img,
  name,
  body,
  url,
}: {
  img: string;
  name: string;
  body: string;
  url: string;
}) => {
  return (
    <Link href={url} prefetch={true}>
      <Card className="my-4 bg-gray-50/[.10] border-none shadow-lg">
        <CardContent className="p-4 flex items-center space-x-4">
          <div className="bg-white p-2 rounded-full">
            <Image
              className="bg-white"
              width={32}
              height={32}
              alt={name}
              src={img}
            />
          </div>
          <div>
            <h2 className="text-white font-semibold">{name}</h2>
            <p className="text-gray-400 text-sm">{body}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="text-white text-3xl mb-12 font-medium sm:text-3xl md:text-6xl">
        Projects
      </h2>
      <div className="w-full sm:w-4/5">
        {projects.map((project) => {
          return (
            <motion.div
              key={project.name}
              className="rounded-md cursor-pointer hover:bg-gray-50/[.10]"
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredProject(project.name)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <ReviewCard key={project.name} {...project} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
