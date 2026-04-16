import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <Image
        src="/images/inside1.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-paper/70 via-paper/40 to-paper" />

      <div className="relative mx-auto max-w-[1440px] w-full px-6 md:px-10 py-24">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] text-stone uppercase">
            Premium Hair Salon
          </p>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.15] text-ink">
            {BRAND.taglineKr}
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink/70 leading-relaxed">
            {BRAND.taglineEn}
            <br />
            전국 7개 지점, MAY ONE 메이원헤어가 함께합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#branches"
              className="inline-flex items-center justify-center h-12 px-8 bg-ink text-paper text-sm tracking-wider hover:bg-ink/90 transition-colors"
            >
              지점 둘러보기
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center h-12 px-8 border border-ink/20 text-ink text-sm tracking-wider hover:bg-ink/5 transition-colors"
            >
              지원 및 프로그램
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone text-[10px] tracking-[0.3em]">
        SCROLL
      </div>
    </section>
  );
}
