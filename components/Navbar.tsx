"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, Code2, UserRound } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
      {/* Gradient fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Navigation bar */}
      <div className="relative flex justify-center mb-6">
        <nav className="relative bg-[#3c3836] border border-[#665c54] rounded-full px-5 py-3 shadow-lg pointer-events-auto">
          <div className="flex items-center">
            <Link
              href="/"
              className={`px-4 transition-colors duration-200 ${
                pathname === "/"
                  ? "text-[#fabd2f]"
                  : "text-[#a89984] hover:text-[#ebdbb2]"
              }`}
              aria-label="Home"
            >
              <UserRound className="text-xl" />
            </Link>

            <div className="text-[#7c6f64] text-sm">|</div>

            <Link
              href="/projects"
              className={`px-4 transition-colors duration-200 ${
                pathname === "/projects"
                  ? "text-[#fabd2f]"
                  : "text-[#a89984] hover:text-[#ebdbb2]"
              }`}
              aria-label="Projects"
            >
              <Code2 className="text-xl" />
            </Link>

            <div className="text-[#7c6f64] text-sm">|</div>

            <Link
              href="/experience"
              className={`px-4 transition-colors duration-200 ${
                pathname === "/experience"
                  ? "text-[#fabd2f]"
                  : "text-[#a89984] hover:text-[#ebdbb2]"
              }`}
              aria-label="Work Experience"
            >
              <BriefcaseBusiness className="text-xl" />
            </Link>

          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
