"use client";

import { useState } from "react";
import Typewriter from "typewriter-effect";
import PropTypes from "prop-types";

export default function TypewriterText({
  text,
  textSize = "text-[32px]",
  textColor = "text-white",
  fontWeight = "font-normal",
  delay = 50,
  className = "",
  fontName = "",
  hideCursorDelay = 600, // ms to wait after finishing before hiding cursor
}) {
  const [showCursor, setShowCursor] = useState(true);

  const sentences = Array.isArray(text) ? text : [text];

  return (
    <div
      className={`${fontName} mt-6 mx-auto text-center ${textColor} ${fontWeight} ${textSize} leading-[120%] tracking-[0px] max-w-[90vw] lg:max-w-[1000px] ${className}`}
    >
      <div className="inline-flex flex-wrap justify-center items-end text-center">
        <span className={`${textColor} ${fontWeight} ${textSize} ${className}`}>
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay,
              deleteSpeed: 10,
              cursor: "", // disable built-in cursor (we render a custom one)
            }}
            onInit={(typewriter) => {
              sentences.forEach((sentence, index) => {
                typewriter.typeString(sentence.trim());
                // delete only between sentences (so the last remains)
                if (index < sentences.length - 1) {
                  typewriter.pauseFor(1000).deleteAll();
                }
              });

              // after all typing is done, wait a bit then hide the cursor
              typewriter.pauseFor(hideCursorDelay).callFunction(() => {
                setShowCursor(false);
              }).start();
            }}
          />
        </span>

        {/* custom cursor (shows while showCursor is true) */}
        {showCursor && (
          <span className="animate-pulse text-[#E6E6E6] ml-[1px] align-baseline">|</span>
        )}
      </div>
    </div>
  );
}

TypewriterText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  fontWeight: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string,
  fontName: PropTypes.string,
  hideCursorDelay: PropTypes.number,
};
