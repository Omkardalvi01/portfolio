"use client";

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { techIcons } from "@/lib/techIcons";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  // Check if URLs are valid (not undefined or empty)
  const hasLiveUrl = liveUrl && liveUrl.trim() !== "";
  const hasGithubUrl = githubUrl && githubUrl.trim() !== "";

  return (
    <div
      className="relative group block h-full w-full p-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute inset-0 block h-full w-full rounded-3xl bg-[#504945]/80"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-20 flex h-full min-h-[18rem] w-full flex-col overflow-hidden rounded-lg border-2 border-[#665c54] bg-[#282828] shadow-[3px_3px_0_#665c54] transition-all duration-300 hover:shadow-[5px_5px_0_#665c54] sm:shadow-[4px_4px_0_#665c54] sm:hover:shadow-[6px_6px_0_#665c54]">
      {/* Dotted Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "8px 8px",
        }}
      />

      {/* Project content */}
      <div className="relative z-10 flex h-full flex-col p-4 sm:p-5 space-y-3 sm:space-y-4">
        {/* Title and Links */}
        <div className="flex min-h-14 items-start justify-between gap-3">
          <h3 className="max-w-[calc(100%-3rem)] text-lg leading-7 sm:text-xl font-bold text-[#ebdbb2] tracking-tight">
            {title}
          </h3>
          <div className="flex space-x-3">
            {hasGithubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a89984] hover:text-[#fabd2f] text-base sm:text-lg transition-all duration-300 transform hover:scale-110"
                aria-label={`GitHub repository for ${title}`}
              >
                <FaGithub />
              </Link>
            )}
            {hasLiveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a89984] hover:text-[#fabd2f] text-base sm:text-lg transition-all duration-300 transform hover:scale-110"
                aria-label={`Live demo for ${title}`}
              >
                <FaExternalLinkAlt />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[#bdae93] text-sm sm:text-base leading-relaxed transition-colors duration-200 hover:text-[#ebdbb2]">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tech.map((techItem, i) => {
            const Icon = techIcons[techItem] || null;
            return (
              <div
                key={i}
                className="flex items-center bg-[#3c3836] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-[#504945] transition-colors duration-300"
              >
                {Icon ? (
                  <Icon className={`text-[#fabd2f] text-sm sm:mr-1.5`} />
                ) : (
                  <span className="text-[#d5c4a1] text-xs sm:hidden">
                    {techItem}
                  </span>
                )}
                <span className="text-[#d5c4a1] text-sm hidden sm:inline">
                  {techItem}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}
