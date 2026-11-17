"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, Code2, UserRound } from "lucide-react";

const navigation = [
  { href: "/", label: "Home", Icon: UserRound },
  { href: "/projects", label: "Projects", Icon: Code2 },
  { href: "/experience", label: "Work Experience", Icon: BriefcaseBusiness },
];

export default function Navbar() {
  const pathname = usePathname();
  const activeIndex = navigation.findIndex(({ href }) => href === pathname);

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-50 w-full">
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#111111] to-transparent" />

      <div className="relative mb-6 flex justify-center">
        <nav
          aria-label="Main navigation"
          className="pointer-events-auto rounded-full border border-[#3c3836] bg-[#111111] px-2 py-2 shadow-lg"
        >
          <div className="relative flex items-center">
            {activeIndex >= 0 && (
              <span
                aria-hidden="true"
                className="navbar-active-indicator absolute left-0 top-0 h-10 w-14 rounded-full bg-[#282828]"
                style={{ transform: `translateX(${activeIndex * 64}px)` }}
              />
            )}

            {navigation.map(({ href, label, Icon }, index) => {
              const isActive = pathname === href;

              return (
                <div className="relative flex items-center" key={href}>
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="w-2 text-center text-sm text-[#7c6f64]"
                    >
                      |
                    </span>
                  )}
                  <Link
                    href={href}
                    aria-label={label}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative z-10 flex h-10 w-14 items-center justify-center transition-colors duration-200 ${
                      isActive
                        ? "text-[#fabd2f]"
                        : "text-[#a89984] hover:text-[#ebdbb2]"
                    }`}
                  >
                    <Icon aria-hidden="true" size={20} />
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
