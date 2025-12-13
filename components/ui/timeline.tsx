"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export interface TimelineItem {
  year: string;
  title: string;
  description?: string;
  techStack?: string[];
  current?: boolean;
}

interface CareerTimelineProps {
  items?: TimelineItem[];
}

const defaultCareerData: TimelineItem[] = [
  {
    year: "2025",
    title: "Strongmind",
    description: "Building innovative educational technology solutions",
    techStack: ["React", "TypeScript", "Node.js", "AWS"],
    current: true,
  },
  {
    year: "2024",
    title: "Stuart AI",
    description:
      "Developing AI-powered applications and machine learning solutions",
    techStack: ["Python", "TensorFlow", "React", "PostgreSQL"],
  },
  {
    year: "2023",
    title: "Healthcare Download",
    description: "Creating healthcare data management systems",
    techStack: ["Next.js", "TypeScript", "GraphQL", "MongoDB"],
  },
  {
    year: "2022",
    title: "Bootcamp",
    description: "Intensive full-stack development training",
    techStack: ["JavaScript", "React", "Express", "SQL"],
  },
];

export function CareerTimeline({
  items = defaultCareerData,
}: CareerTimelineProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="w-full sm:w-4/5">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700 md:left-[72px]" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {/* Year */}
                <div className="flex items-start gap-4 md:w-16 md:flex-shrink-0">
                  <div className="relative z-10 flex h-3 w-3 items-center justify-center">
                    <div
                      className={`h-3 w-3 rounded-full border-2 ${
                        item.current
                          ? "border-white bg-white"
                          : "border-gray-400 bg-gray-400"
                      }`}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 md:hidden">
                    {item.year}
                  </span>
                </div>

                <div className="hidden md:block md:w-12 md:flex-shrink-0 md:text-right">
                  <span className="text-sm font-medium text-gray-400">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2 -ml-7 md:ml-0">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    {item.current && (
                      <Badge variant="secondary" className="text-xs">
                        Current
                      </Badge>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}

                  {item.techStack && item.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs font-normal border-gray-600 text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
