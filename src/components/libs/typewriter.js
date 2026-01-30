"use client";
import { useState, useEffect, useRef } from "react";

export default function Typewriter({ text, speed = 50, className = "" }) {
  // Initialize with full text to match server-side rendering and prevent hydration mismatch
  const [displayedText, setDisplayedText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only animate once on client mount, and only on client-side navigation
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Check if this is a client-side navigation (not initial page load)
    // We detect this by checking if the component mounts after the page has been interactive
    const isClientNavigation = document.readyState === 'complete';

    if (isClientNavigation) {
      // Start the typewriter animation for client-side navigations
      setDisplayedText("");
      setIsAnimating(true);
    }
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const currentLength = displayedText.length;
    if (currentLength < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentLength + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsAnimating(false);
    }
  }, [displayedText, text, speed, isAnimating]);

  return <span className={className}>{displayedText}</span>;
}
