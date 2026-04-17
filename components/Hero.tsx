import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <Image
        src="/images/inside1.png"
        alt="메이원헤어 매장 인테리어"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-85"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/30 to-paper" />

      <div className="relative mx-auto max-w-[1440px] w-full px-6 sm:px-8 md:px-10 py-24">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] text-ink/60 uppercase">
            Premium Hair Salon
          </p>
          <h1 className="mt-6 font-serif font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-ink">
            {BRAND.taglineKr}
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink/80 leading-relaxed">
            {BRAND.taglineEn}
            <br />
            전국 7개 지점, MAY ONE 메이원헤어가 함께합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#branches"
              className="inline-flex items-center justify-center h-12 px-8 bg-ink text-paper text-sm tracking-wider hover:bg-ink/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              지점 둘러보기
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center h-12 px-8 border border-ink/20 text-ink text-sm tracking-wider hover:bg-ink/5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              지원 및 프로그램
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 text-xs text-ink/50 tracking-[0.3em]"
        style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
      >
        SCROLL
      </div>
    </section>
  );
}
