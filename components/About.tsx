import Image from "next/image";

const INTERIORS = [
  { src: "/images/inside2.png", alt: "메이원헤어 매장 인테리어" },
  { src: "/images/inside3.png", alt: "메이원헤어 시술 공간" },
  { src: "/images/inside4.png", alt: "메이원헤어 라운지" },
  { src: "/images/inside1.png", alt: "메이원헤어 입구" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-paper">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="reveal-child text-xs tracking-[0.4em] text-ink/60 uppercase">
              About
            </p>
            <h2 className="reveal-child mt-4 font-serif font-medium text-3xl md:text-5xl leading-tight">
              일상에 머무는
              <br />
              우아한 변화
            </h2>
            <div className="reveal-child mt-8 space-y-5 text-ink/80 leading-relaxed">
              <p>
                MAY ONE은 디자이너의 섬세한 시선과 정돈된 공간에서
                고객 한 분 한 분의 가장 자연스러운 모습을 찾아갑니다.
              </p>
              <p>
                불필요한 장식 대신 본질에 집중한 시술과 케어,
                그리고 다시 찾고 싶은 분위기. 메이원이 만드는
                헤어살롱의 새로운 기준입니다.
              </p>
            </div>
          </div>

          <div className="reveal-child md:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {INTERIORS.map((img, i) => (
                <div
                  key={img.src}
                  className={`relative overflow-hidden bg-cream ${
                    i === 0 ? "aspect-[3/4] row-span-2" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
