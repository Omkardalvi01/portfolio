"use client";

import { createContext, useContext } from "react";

export type NavigateFromNavbar = (href: string) => void;

export const PageNavigationContext =
  createContext<NavigateFromNavbar | null>(null);

export function useNavbarNavigation() {
  const navigate = useContext(PageNavigationContext);

  if (!navigate) {
    throw new Error("useNavbarNavigation must be used inside PageTransition");
  }

  return navigate;
}
