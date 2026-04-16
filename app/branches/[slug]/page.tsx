import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BRANCHES, SERVICE_CATEGORIES } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams() {
  return BRANCHES.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = BRANCHES.find((b) => b.slug === slug);
  if (!branch) return {};
  return {
    title: `MAY ONE ${branch.name} | 메이원헤어`,
    description: `메이원헤어 ${branch.name} - ${branch.address}`,
  };
}

export default async function BranchPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const branch = BRANCHES.find((b) => b.slug === slug);
  if (!branch) notFound();

  return (
    <>
      <section className="relative bg-cream/40 py-20 md:py-28">
        <Image
          src="/images/inside2.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          priority
        />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <Link
            href="/#branches"
            className="text-xs tracking-[0.3em] text-stone uppercase hover:text-ink"
          >
            ← Branches
          </Link>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl">
            MAY ONE {branch.name}
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink/75 leading-relaxed max-w-2xl">
            {branch.address}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="max-w-2xl">
            <a
              href={branch.naverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-10 bg-ink text-paper text-sm tracking-wider hover:bg-ink/90 transition-colors w-full sm:w-auto"
            >
              네이버에서 예약·정보 보기 →
            </a>
            <p className="mt-4 text-xs text-stone leading-relaxed">
              네이버 플레이스에서 예약, 위치, 영업시간, 전화 연결을 모두 이용하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream/40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <p className="text-xs tracking-[0.4em] text-stone uppercase">Services</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">시술 메뉴</h2>

          <div className="mt-10 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3 border border-black/10">
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-paper p-7 md:p-8">
                <h3 className="font-serif text-xl">{cat.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/80">
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

      <section className="py-16 md:py-24 bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-4">
            {["inside1", "inside2", "inside3", "inside4"].map((name) => (
              <div key={name} className="relative aspect-[3/4] overflow-hidden bg-cream">
                <Image
                  src={`/images/${name}.png`}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
