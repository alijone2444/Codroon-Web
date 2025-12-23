'use client'
import React from "react";

const getResponsivePadding = (value, width) => {
  if (typeof value === "number") return value;

  if (width >= 1280 && value.xl !== undefined) return value.xl;
  if (width >= 1024 && value.lg !== undefined) return value.lg;
  if (width >= 768 && value.md !== undefined) return value.md;
  if (width >= 640 && value.sm !== undefined) return value.sm;

  return value.base ?? 0;
};

const HorizontalMarginWrapper = ({
  children,
  left = 0,
  right = 0,
  className = "",
}) => {
  const [width, setWidth] = React.useState(0); // ✅ safe initial value

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // set initial width on client
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full mx-auto ${className}`}
      style={{
        paddingLeft: `${getResponsivePadding(left, width)}px`,
        paddingRight: `${getResponsivePadding(right, width)}px`,
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalMarginWrapper;
