import React from 'react';

/**
 * FloatingOrb component for background visual effects.
 * Renders a pulsing, drifting orb with customizable color, size, and animation delay.
 */
export default function FloatingOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`absolute rounded-full animate-pulse-glow ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}
