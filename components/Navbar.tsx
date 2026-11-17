"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, Code2, UserRound } from "lucide-react";

const items = [
  { href: "/", label: "Home", Icon: UserRound, position: "top-3.5 left-7" },
  { href: "/projects", label: "Projects", Icon: Code2, position: "top-1/2 -translate-y-1/2 left-20" },
  { href: "/experience", label: "Experience", Icon: BriefcaseBusiness, position: "bottom-3.5 left-7" },
];

const sectionAngles: Record<string, number> = {
  "/": 0,
  "/projects": 60,
  "/experience": 120,
};

const Navbar = () => {
  const pathname = usePathname();
  const activeAngle = sectionAngles[pathname] ?? 0;

  return (
    <nav
      aria-label="Main navigation"
      className="fixed left-0 top-1/2 z-50 h-64 w-32 -translate-y-1/2"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 128 256"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[-6px_0_12px_rgba(0,0,0,0.2)]"
      >
        <path
          d="M0 0 A128 128 0 0 1 0 256 L0 208 A80 80 0 0 0 0 48 Z"
          fill="#3c3836"
          fillOpacity="0.96"
          stroke="#665c54"
          strokeWidth="1"
        />
        <path
          d="M0 0 A128 128 0 0 1 111 64 L69.3 88 A80 80 0 0 0 0 48 Z"
          fill="#fabd2f"
          fillOpacity="0.2"
          stroke="#fabd2f"
          strokeOpacity="0.75"
          strokeWidth="1"
          className="origin-[0px_128px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{
            transform: `rotate(${activeAngle}deg)`,
            transformBox: "view-box",
          }}
        />
        <path d="M69.3 88 111 64M69.3 168 111 192" fill="none" stroke="#665c54" strokeWidth="1" />
      </svg>
      {items.map(({ href, label, Icon, position }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            className={`group absolute ${position} z-10 flex h-12 w-12 items-center justify-center rounded-full text-[#a89984] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fabd2f]`}
          >
            <Icon size={26} strokeWidth={1.8} />
            <span className="pointer-events-none absolute left-[calc(100%+0.75rem)] whitespace-nowrap rounded-md border border-[#665c54] bg-[#282828] px-3 py-1.5 text-xs font-medium text-[#ebdbb2] opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
