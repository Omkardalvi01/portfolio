"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { CSSProperties } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { PageNavigationContext } from "@/components/PageNavigationContext";

const coverDuration = 520;
const revealDuration = 560;

function playGunCockingSound() {
  try {
    const audio = new Audio(
      "/freesound_community-berretta-9mm-cocking-slower-105410.mp3",
    );
    audio.volume = 0.35;
    void audio.play().catch(() => {
      // Keep navigation working if the browser blocks audio playback.
    });
  } catch {
    // Keep navigation working if the browser blocks audio playback.
  }
}

type Ripple = {
  href: string;
  x: number;
  y: number;
  radius: number;
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const navigationTimer = useRef<number | null>(null);
  const [ripple, setRipple] = useState<Ripple | null>(null);
  const [ripplePhase, setRipplePhase] = useState<"cover" | "reveal" | null>(null);

  const navigateFromNavbar = useCallback(
    (href: string) => {
      if (href === pathname || ripple) return;
      playGunCockingSound();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      const darkrai = document.querySelector<HTMLElement>("[data-darkrai]");
      const bounds = darkrai?.getBoundingClientRect();
      const x = bounds ? bounds.left + bounds.width / 2 : width - 64;
      const y = bounds ? bounds.top + bounds.height / 2 : height - 72;
      const radius = Math.ceil(
        Math.max(
          Math.hypot(x, y),
          Math.hypot(width - x, y),
          Math.hypot(x, height - y),
          Math.hypot(width - x, height - y),
        ),
      );

      setRipple({ href, x, y, radius });
      setRipplePhase("cover");
      navigationTimer.current = window.setTimeout(() => {
        router.push(href);
        navigationTimer.current = null;
      }, coverDuration);
    },
    [pathname, ripple, router],
  );

  useEffect(() => {
    if (!ripple || pathname !== ripple.href) return;

    if (navigationTimer.current !== null) {
      window.clearTimeout(navigationTimer.current);
      navigationTimer.current = null;
    }

    setRipplePhase("reveal");
    const timer = window.setTimeout(() => {
      setRipple(null);
      setRipplePhase(null);
    }, revealDuration);

    return () => window.clearTimeout(timer);
  }, [pathname, ripple]);

  useEffect(
    () => () => {
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
      }
    },
    [],
  );

  const rippleStyle = ripple
    ? ({
        "--ripple-x": `${ripple.x}px`,
        "--ripple-y": `${ripple.y}px`,
        "--ripple-radius": `${ripple.radius}px`,
      } as CSSProperties)
    : undefined;

  return (
    <PageNavigationContext.Provider value={navigateFromNavbar}>
      <div className="relative min-h-screen" data-ripple-active={Boolean(ripple)}>
        <div key={pathname}>{children}</div>
        <Navbar />
        {ripple && ripplePhase && (
          <div
            aria-hidden="true"
            className={`page-ripple page-ripple-${ripplePhase}`}
            style={rippleStyle}
          />
        )}
      </div>
    </PageNavigationContext.Provider>
  );
}
