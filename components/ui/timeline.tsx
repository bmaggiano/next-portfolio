"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export interface TimelineItem {
  year: string;
  title: string;
  description?: string;
  techStack?: string[];
  current?: boolean;
  dateRange?: string;
}

interface CareerTimelineProps {
  items?: TimelineItem[];
}

const defaultCareerData: TimelineItem[] = [
  {
    year: "2025",
    title: "StrongMind",
    description:
      "Platform engineer at a large-scale ed-tech company, building and maintaining core infrastructure and shared services across a complex, multi-language codebase while shipping features for both internal teams and end users.",
    techStack: ["Ruby on Rails", "Python", ".NET", "C#", "AWS", "Azure"],
    current: true,
    dateRange: "January 2025 - Present",
  },
  {
    year: "2024",
    title: "Stuart AI",
    description:
      "Built and launched an AI-powered fantasy sports analytics platform using Next.js and Node.js, integrating LLM-driven analysis, historical data pipelines, and third-party APIs to generate real-time predictions and recommendations.",
    techStack: ["NextJs", "Node", "OpenAI", "PostgreSQL"],
    dateRange: "July 2024 - January 2025",
  },
  {
    year: "2023",
    title: "Healthcare Download",
    description:
      "Built and maintained secure React and Next.js applications at an early-stage healthcare startup, implementing OAuth 2.0 authentication, Redis-backed session management, and third-party integrations with health insurance provider systems.",
    techStack: ["Next.js", "TypeScript", "Sequelize", "Node.js", "Redis"],
    dateRange: "June 2023 - June 2024",
  },
  {
    year: "2022",
    title: "University of Arizona – Full-Stack Coding Bootcamp",
    description:
      "Completed an immersive, project-based MERN bootcamp focused on designing, building, and deploying full-stack web applications.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
    dateRange: "September 2022 - December 2022",
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
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-gray-700" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Year dot and marker */}
                <div className="flex items-start shrink-0">
                  <div className="relative z-10 flex h-3 w-3 items-center justify-center">
                    <div
                      className={`h-3 w-3 rounded-full border-2 ${
                        item.current
                          ? "border-white bg-white"
                          : "border-gray-400 bg-gray-400"
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      {item.current && (
                        <Badge variant="secondary" className="text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    {item.dateRange && (
                      <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
                        {item.dateRange}
                      </span>
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
