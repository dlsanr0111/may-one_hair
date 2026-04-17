"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"check" | "show" | "exit" | "done">("check");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("mayone-splash-seen")) {
        setPhase("done");
        return;
      }
    } catch {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";
    setPhase("show");

    const exitTimer = setTimeout(() => setPhase("exit"), 1800);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("mayone-splash-seen", "1");
      } catch {}
    }, 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done" || phase === "check") return null;

  return (
    <div className={`splash-overlay ${phase === "exit" ? "splash-exit" : ""}`}>
      <div className="splash-logo">
        <Image
          src="/images/logo.png"
          alt="MAY ONE"
          width={72}
          height={72}
          priority
          className="w-18 h-18"
        />
        <span className="font-serif text-2xl tracking-[0.3em] text-ink mt-4 block">
          MAY ONE
        </span>
      </div>
    </div>
  );
}
