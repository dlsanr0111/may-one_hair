import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sans = Noto_Sans_KR({
  variable: "--font-pretendard",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const serif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAY ONE 메이원헤어",
  description:
    "운정·야당·성수·미금·삼송·웨스턴돔·천안 7개 지점의 프리미엄 헤어살롱, 메이원헤어. 매일을 가장 나답게.",
  openGraph: {
    title: "MAY ONE 메이원헤어",
    description:
      "운정·야당·성수·미금·삼송·웨스턴돔·천안 7개 지점의 프리미엄 헤어살롱, 메이원헤어.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
