import Link from "next/link";
import { BRANCHES } from "@/lib/data";

export default function BranchCards() {
  return (
    <section id="branches" className="py-24 md:py-32 bg-cream/40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] text-stone uppercase">Branches</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
            전국 7개 지점
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            가까운 메이원 지점에서 만나보세요. 지점별 상세 페이지에서
            온라인 예약과 위치 안내를 확인하실 수 있습니다.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3 border border-black/10">
          {BRANCHES.map((branch) => (
            <Link
              key={branch.slug}
              href={`/branches/${branch.slug}`}
              className="group bg-paper p-7 md:p-9 flex flex-col justify-between min-h-[180px] hover:bg-cream/50 transition-colors"
            >
              <div>
                <h3 className="font-serif text-2xl">MAY ONE {branch.name}</h3>
                <p className="mt-3 text-sm text-stone leading-relaxed">
                  {branch.address}
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm text-ink">
                <span>자세히 보기</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
