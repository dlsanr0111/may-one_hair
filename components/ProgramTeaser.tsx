import Link from "next/link";

export default function ProgramTeaser() {
  return (
    <section className="py-24 md:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.4em] text-paper/60 uppercase">
              Programs
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
              메이원과 함께
              <br />
              한 단계 더 나아가기
            </h2>
            <p className="mt-6 text-paper/70 leading-relaxed max-w-xl">
              MAY ONE 대표가 직접 운영하는 컨설팅과 채용 프로그램.
              살롱을 운영 중인 원장님, 그리고 함께 성장할 디자이너·인턴을 만납니다.
            </p>
          </div>

          <div className="md:col-span-5 grid gap-4">
            <Link
              href="/programs#owners"
              className="block border border-paper/15 p-6 hover:bg-paper/5 transition-colors"
            >
              <p className="text-xs tracking-[0.3em] text-paper/50 uppercase">For Owners</p>
              <p className="mt-2 font-serif text-xl">원장님을 위한 컨설팅 →</p>
            </Link>
            <Link
              href="/programs#designers"
              className="block border border-paper/15 p-6 hover:bg-paper/5 transition-colors"
            >
              <p className="text-xs tracking-[0.3em] text-paper/50 uppercase">For Designers</p>
              <p className="mt-2 font-serif text-xl">함께할 디자이너 모집 →</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
