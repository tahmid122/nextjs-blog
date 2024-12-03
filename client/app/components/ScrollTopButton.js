"use client";

import React, { useState, useEffect } from "react";

const ScrollTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {scrollProgress > 2 && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "10",
          }}
          title="Scroll to top"
        >
          {/* Circular Progress */}

          <svg
            width="60"
            height="60"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-90deg)" }} // Rotates the circle for a top-starting progress
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="whitesmoke"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#6C69DD"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={`${100 - scrollProgress}`}
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{
              position: "absolute",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            className="flex items-center justify-center dark:text-black"
          >
            Top
          </span>
        </div>
      )}
    </div>
  );
};

export default ScrollTopButton;
