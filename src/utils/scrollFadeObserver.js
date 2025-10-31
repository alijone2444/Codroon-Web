// ✅ Do NOT add "use client" here — utils should stay pure JS modules
export const initScrollFadeObserver = () => {
    if (typeof window === "undefined") return; // SSR guard
  
    const elements = document.querySelectorAll(".scroll-fade-up");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-visible");
            observer.unobserve(entry.target); // Animate once
          }
        });
      },
      { threshold: 0.2 }
    );
  
    elements.forEach((el) => observer.observe(el));
  };
  