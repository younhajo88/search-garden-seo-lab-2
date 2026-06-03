import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { absoluteUrl, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "우체국 택배 요금 계산기 | 소포정원",
    template: "%s | 소포정원",
  },
  description:
    "박스 크기와 무게로 우체국 소포 요금 구간과 규격 초과 여부를 확인하는 한국어 택배 계산기입니다.",
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
    },
  },
  openGraph: {
    title: "우체국 택배 요금 계산기",
    description: "세 변 합과 무게로 우체국 소포 요금 구간을 확인하세요.",
    url: absoluteUrl("/"),
    siteName,
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "소포정원 우체국 택배 계산기" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="소포정원 홈">
            소포정원
          </Link>
          <nav aria-label="주요 탐색">
            <Link href="/tools/korea-post-parcel">계산기</Link>
            <Link href="/guides/post-office-parcel-size">박스 크기</Link>
            <Link href="/guides/counter-vs-pickup">접수 방식</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>
            소포정원은 우정사업본부 공개 요금표를 바탕으로 한 참고용 계산기입니다. 실제
            접수 가능 여부와 최종 요금은 우체국에서 확인하세요.
          </p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}

