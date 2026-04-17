"use client";

import Image from "next/image";

const STYLINGS = [
  { src: "/images/styling1.png", alt: "메이원 스타일링 결과 1" },
  { src: "/images/styling2.png", alt: "메이원 스타일링 결과 2" },
  { src: "/images/styling3.png", alt: "메이원 스타일링 결과 3" },
  { src: "/images/styling4.png", alt: "메이원 스타일링 결과 4" },
  { src: "/images/styling5.png", alt: "메이원 스타일링 결과 5" },
];

// 무한 루프를 위해 이미지 세트를 2번 반복
const DOUBLED = [...STYLINGS, ...STYLINGS];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="reveal-child text-xs tracking-[0.4em] text-ink/60 uppercase">
              Gallery
            </p>
            <h2 className="reveal-child mt-4 font-serif font-medium text-3xl md:text-5xl leading-tight">
              디자이너의 손끝에서
              <br />
              완성된 스타일
            </h2>
          </div>
          <p className="reveal-child text-sm text-ink/60">
            매장에서 만나신 디자이너의 작업 사진을 한자리에 모았습니다.
          </p>
        </div>
      </div>

      {/* 컨베이어 벨트 — 풀블리드로 넓게 */}
      <div className="relative">
        {/* 양쪽 페이드 그라데이션 */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />

        <div className="gallery-conveyor flex gap-6 md:gap-8 w-max hover:[animation-play-state:paused]">
          {DOUBLED.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px]"
            >
              {/* 액자 프레임 */}
              <div className="bg-white p-3 sm:p-4 shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-black/5">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="340px"
                    className="object-cover"
                  />
                </div>
                {/* 액자 하단 캡션 */}
                <div className="mt-3 sm:mt-4 text-center">
                  <p className="text-[10px] sm:text-xs tracking-[0.3em] text-stone uppercase">
                    MAY ONE Style
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
