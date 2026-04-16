import { SERVICE_CATEGORIES } from "@/lib/data";

export default function ServiceList() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream/40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] text-stone uppercase">Services</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
            메이원의 시술 메뉴
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            커트부터 펌, 컬러, 케어까지. 시술별 상세 가격은 지점별로 다르므로
            각 지점 예약 페이지에서 확인해 주세요.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3 border border-black/10">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.title} className="bg-paper p-7 md:p-9">
              <h3 className="font-serif text-2xl">{cat.title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-ink/80">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-block w-1 h-1 rounded-full bg-stone/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
