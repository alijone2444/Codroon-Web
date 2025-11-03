"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initScrollFadeObserver } from "@/utils/scrollFadeObserver";

export default function RunFadeGlobally() {
  const pathname = usePathname(); // detects route changes

  useEffect(() => {
    // Small delay ensures new page content is rendered
    const timer = setTimeout(() => {
      initScrollFadeObserver();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]); // 👈 Re-run when path changes

  return null;
}
