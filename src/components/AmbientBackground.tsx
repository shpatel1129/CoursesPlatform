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
  // Generate consistent ember particle data
  const embers = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => {
      const left = ((i * 37) % 96) + 2;
      const size = 2.5 + ((i * 7) % 4);
      const duration = 12 + ((i * 13) % 12);
      const delay = -((i * 19) % 20);
      const drift = ((i % 2 === 0 ? 1 : -1) * (((i * 11) % 60) + 15));
      const opacity = 0.35 + (((i * 5) % 50) / 100);

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
      } ${intensity === "subtle" ? "opacity-25" : "opacity-40"} ${className}`}
    >
      {/* Subtle fine grid */}
      <div className="ambient-grid absolute inset-0" />

      {/* Ambient Electric Cyan rotating beam */}
      <div className="ambient-beam ambient-beam-cyan absolute inset-[-20%]" />

      {/* Ambient deep slate beam */}
      <div className="ambient-beam ambient-beam-slate absolute inset-[-25%]" />

      {/* Floating cyan / ice-blue orbs */}
      <div className="ambient-orb ambient-orb-a absolute" />
      <div className="ambient-orb ambient-orb-b absolute" />
      <div className="ambient-orb ambient-orb-c absolute" />

      {/* Floating embers */}
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
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Ambient luminous scan line */}
      <div className="ambient-scan absolute inset-x-0 top-0 h-px" />
    </div>
  );
}
