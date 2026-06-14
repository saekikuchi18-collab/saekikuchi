"use client";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Geometric C mark — two offset squares forming a negative-space C */}
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="2"
        className="fill-foreground"
      />
      <rect
        x="14"
        y="8"
        width="14"
        height="16"
        rx="1"
        className="fill-background"
      />
    </svg>
  );
}
