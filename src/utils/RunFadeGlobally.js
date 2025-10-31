"use client";
import { useEffect } from "react";
import { initScrollFadeObserver } from "@/utils/scrollFadeObserver";

export default function RunFadeGlobally() {
  useEffect(() => {
    initScrollFadeObserver();
  }, []);

  return null;
}
