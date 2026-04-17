import Link from "next/link";
import { BRAND, BRANCHES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-cream/40">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl tracking-[0.15em]">{BRAND.name}</p>
            <p className="mt-2 text-sm text-stone">{BRAND.nameKr}</p>
            <p className="mt-4 text-sm text-stone leading-relaxed">
              {BRAND.taglineKr}
            </p>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-ink/80 hover:text-ink"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
              {BRAND.instagramHandle}
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone">Branches</h4>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
              {BRANCHES.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/branches/${b.slug}`}
                    className="text-ink/80 hover:text-ink"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone">Info</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/programs" className="text-ink/80 hover:text-ink">
                  지원 및 프로그램
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-ink/80 hover:text-ink">
                  서비스 안내
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/5 text-xs text-stone flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© {new Date().getFullYear()} MAY ONE HAIR. All rights reserved.</p>
          <p className="text-stone/80">Designed for MAY ONE</p>
        </div>
      </div>
    </footer>
  );
}
