"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/#about", label: "소개" },
  { href: "/#services", label: "서비스" },
  { href: "/#gallery", label: "갤러리" },
  { href: "/#branches", label: "지점" },
  { href: "/programs", label: "지원 및 프로그램" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 py-2 -ml-1 px-1"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="MAY ONE"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-serif text-lg tracking-[0.2em] text-ink">MAY ONE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          <span className="relative block w-6 h-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-6 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-black/5 bg-paper">
          <ul className="flex flex-col px-4 sm:px-6 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-4 text-base text-ink/90 hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
