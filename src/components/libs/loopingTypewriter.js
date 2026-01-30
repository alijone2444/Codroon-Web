"use client";
import { useState, useEffect, useRef } from "react";

export default function LoopingTypewriter({
    words = [],
    speed = 80,
    deleteSpeed = 50,
    pauseTime = 2000,
    className = ""
}) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const isFirstRender = useRef(true);

    // Start animation after initial render
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            // Small delay before starting the animation
            const startTimeout = setTimeout(() => {
                setHasStarted(true);
            }, 500);
            return () => clearTimeout(startTimeout);
        }
    }, []);

    useEffect(() => {
        if (!hasStarted || words.length === 0) return;

        const currentWord = words[currentWordIndex];

        let timeout;

        if (!isDeleting) {
            // Typing
            if (displayedText.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentWord.substring(0, displayedText.length + 1));
                }, speed);
            } else {
                // Word fully typed, pause then start deleting
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        } else {
            // Deleting
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.substring(0, displayedText.length - 1));
                }, deleteSpeed);
            } else {
                // Move to next word
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseTime, hasStarted]);

    return (
        <span className={className}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
}
