"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorSpotlight() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Ultra-smooth spring physics for the spotlight follower
  const springConfig = { damping: 28, stiffness: 240, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad, not touch)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          width: 500,
          height: 500,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(245, 189, 74, 0.16) 0%, rgba(217, 154, 25, 0.08) 35%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
    </motion.div>
  );
}
