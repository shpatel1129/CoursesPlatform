"use client";

import React, { useMemo } from "react";

interface AmbientBackgroundProps {
  variant?: "hero" | "fixed" | "section";
  className?: string;
  intensity?: "normal" | "subtle";
}

export default function AmbientBackground({
  variant = "hero",
  className = "",
  intensity = "normal",
}: AmbientBackgroundProps) {
  // Generate consistent gold points / ember particle data
  const embers = useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => {
      const left = ((i * 29) % 96) + 2;
      const size = 4 + ((i * 7) % 5); // 4px to 9px
      const duration = 9 + ((i * 11) % 9); // 9s to 18s
      const delay = -((i * 13) % 15);
      const drift = ((i % 2 === 0 ? 1 : -1) * (((i * 11) % 50) + 15)); // number, e.g. 35
      const opacity = 0.8 + (((i * 7) % 20) / 100);

      return {
        id: i,
        left: `${left}%`,
        size: `${size}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        drift: `${drift}px`,
        opacity,
      };
    });
  }, []);

  const isFixed = variant === "fixed";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${
        isFixed ? "fixed inset-0" : "absolute inset-0"
      } ${intensity === "subtle" ? "opacity-75" : "opacity-100"} ${className}`}
    >
      {/* Background point-by-point dot matrix pattern */}
      <div className="ambient-dots absolute inset-0" />

      {/* Background fine grid */}
      <div className="ambient-grid absolute inset-0" />

      {/* Ambient Warm Gold rotating beam */}
      <div className="ambient-beam ambient-beam-gold absolute inset-[-20%]" />

      {/* Ambient Champagne beam */}
      <div className="ambient-beam ambient-beam-champagne absolute inset-[-25%]" />

      {/* Floating gold orbs */}
      <div className="ambient-orb ambient-orb-a absolute" />
      <div className="ambient-orb ambient-orb-b absolute" />
      <div className="ambient-orb ambient-orb-c absolute" />

      {/* Floating warm gold glowing points / embers */}
      <div className="embers absolute inset-0 overflow-hidden">
        {embers.map((ember) => (
          <span
            key={ember.id}
            className="ember"
            style={
              {
                left: ember.left,
                width: ember.size,
                height: ember.size,
                animationDuration: ember.duration,
                animationDelay: ember.delay,
                opacity: ember.opacity,
                "--ember-drift": ember.drift,
                "--ember-opacity": ember.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Ambient luminous scan line */}
      <div className="ambient-scan absolute inset-x-0 top-0 h-[2px]" />
    </div>
  );
}
