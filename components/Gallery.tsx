import Image from "next/image";

const STYLINGS = [
  { src: "/images/styling1.png", alt: "메이원 스타일링 결과 1" },
  { src: "/images/styling2.png", alt: "메이원 스타일링 결과 2" },
  { src: "/images/styling3.png", alt: "메이원 스타일링 결과 3" },
  { src: "/images/styling4.png", alt: "메이원 스타일링 결과 4" },
  { src: "/images/styling5.png", alt: "메이원 스타일링 결과 5" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-paper">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-10">
        <div className="reveal-child flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.4em] text-ink/60 uppercase">Gallery</p>
            <h2 className="mt-4 font-serif font-medium text-3xl md:text-5xl leading-tight">
              디자이너의 손끝에서
              <br />
              완성된 스타일
            </h2>
          </div>
          <p className="text-sm text-ink/60">
            매장에서 만나신 디자이너의 작업 사진을 한자리에 모았습니다.
          </p>
        </div>

        <div className="reveal-child mt-12 md:mt-16 grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          {STYLINGS.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden bg-cream group ${
                i === 0
                  ? "sm:col-span-2 md:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-square md:aspect-[4/5]"
                  : "aspect-[3/4]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
