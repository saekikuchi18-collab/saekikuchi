"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function extractNumber(text: string): { prefix: string; num: number; suffix: string } | null {
  const match = text.match(/^(.*?)([\d,.]+)(.*)$/);
  if (!match) return null;
  return { prefix: match[1], num: parseFloat(match[2].replace(/,/g, "")), suffix: match[3] };
}

function CountUp({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function ResultsCallout({ results }: { results: string[] }) {
  return (
    <div className="grid gap-6 rounded-xl bg-primary/5 p-8 sm:grid-cols-3">
      {results.map((result, i) => {
        const parsed = extractNumber(result);
        return (
          <div key={i} className="text-center">
            {parsed ? (
              <p className="font-heading text-2xl text-primary" style={{ fontSize: "var(--text-xl)" }}>
                {parsed.prefix}
                <CountUp value={parsed.num} />
                {parsed.suffix}
              </p>
            ) : (
              <p className="font-heading text-xl text-primary">{result}</p>
            )}
            {!parsed && null}
          </div>
        );
      })}
    </div>
  );
}
