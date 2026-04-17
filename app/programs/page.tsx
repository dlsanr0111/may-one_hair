import type { Metadata } from "next";
import { PROGRAMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "지원 및 프로그램 | MAY ONE 메이원헤어",
  description:
    "MAY ONE 대표가 직접 운영하는 경영컨설팅, 위기극복 프로젝트, 디자이너·인턴 채용 프로그램.",
};

const GROUPS = [
  {
    id: "owners",
    label: "For Owners",
    title: "원장님을 위한 컨설팅",
    description:
      "운영의 어려움을 함께 풀어가고, 한 단계 더 성장할 수 있는 길을 안내합니다.",
    audience: "원장님" as const,
  },
  {
    id: "designers",
    label: "For Designers",
    title: "함께할 디자이너 모집",
    description:
      "메이원의 시스템과 문화 안에서 한 명의 전문가로 성장할 디자이너·인턴을 찾습니다.",
    audience: "디자이너" as const,
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-cream/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <p className="text-xs tracking-[0.4em] text-stone uppercase">Programs</p>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">
            지원 및 프로그램
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-ink/75 leading-relaxed">
            MAY ONE 대표가 직접 운영하는 경영 컨설팅과 채용 프로그램입니다.
            아래 신청 폼은 네이버 폼으로 연결됩니다.
          </p>
        </div>
      </section>

      {GROUPS.map((group) => {
        const items = PROGRAMS.filter((p) => p.audience === group.audience);
        return (
          <section
            key={group.id}
            id={group.id}
            className="py-20 md:py-24 bg-paper border-t border-black/5"
          >
            <div className="mx-auto max-w-[1440px] px-6 md:px-10">
              <div className="max-w-2xl">
                <p className="text-xs tracking-[0.3em] text-stone uppercase">
                  {group.label}
                </p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                  {group.title}
                </h2>
                <p className="mt-5 text-ink/70 leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="mt-10 md:mt-14 grid gap-6 md:grid-cols-2">
                {items.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-ink/10 p-6 sm:p-8 md:p-10 flex items-center justify-between gap-3 bg-paper hover:bg-cream/40 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                  >
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl">{p.title}</h3>
                    <span className="ml-2 flex-shrink-0 text-ink transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
