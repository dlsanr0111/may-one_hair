"use client";

import { useInView } from "@/hooks/useInView";
import type { CSSProperties, ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  delay?: number;
  id?: string;
}

export default function RevealSection({
  children,
  className = "",
  as: Tag = "section",
  delay = 0,
  id,
}: RevealSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement> & React.RefObject<HTMLElement>}
      id={id}
      className={`reveal-section ${isInView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
