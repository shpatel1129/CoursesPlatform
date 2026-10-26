"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps, useInView } from "motion/react";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className = "",
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInScale({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HoverCard({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * 3D Tilt Card with dynamic light reflection / glare
 * Reacts to user mouse movement with realistic 3D perspective tilt
 */
interface TiltCard3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees, default 10
  scale?: number; // hover scale, default 1.02
  glare?: boolean;
}

export function TiltCard3D({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.015,
  glare = true,
  ...props
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const glareX = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ["0%", "100%"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const normX = mouseX / rect.width - 0.5;
    const normY = mouseY / rect.height - 0.5;

    x.set(normX);
    y.set(normY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: "1100px" }}
      className={`relative ${className}`}
      {...props}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? scale : 1,
        }}
        transition={{ duration: 0.2 }}
        className="w-full h-full relative"
      >
        {children}

        {/* Dynamic Light Glare Follower */}
        {glare && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.45 : 0,
            }}
          >
            <motion.div
              className="absolute -inset-full rounded-full"
              style={{
                left: glareX,
                top: glareY,
                width: "200%",
                height: "200%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(245, 189, 74, 0.28) 0%, rgba(217, 154, 25, 0.12) 30%, transparent 70%)",
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

/**
 * Magnetic Button physics for primary CTA buttons
 */
export function Magnetic({
  children,
  className = "",
  distance = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.2 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * distance);
    y.set((e.clientY - centerY) * distance);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated Number Counter (e.g. 500, 12, 60, etc.)
 */
export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(from + (to - from) * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/**
 * 3D Floating Levitation element (adds subtle continuous 3D bobbing)
 */
export function Floating3D({
  children,
  className = "",
  duration = 5,
  yOffset = 8,
  rotateRange = 2,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
  rotateRange?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
        rotateX: [-rotateRange, rotateRange, -rotateRange],
        rotateY: [rotateRange, -rotateRange, rotateRange],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
