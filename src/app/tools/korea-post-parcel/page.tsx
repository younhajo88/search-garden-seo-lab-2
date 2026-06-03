import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ParcelCalculator } from "@/components/ParcelCalculator";
import { absoluteUrl, feeTiers, formatWon, officialSources } from "@/lib/site";

export const metadata: Metadata = {
  title: "우체국 택배 박스·무게 요금 계산기",
  description: "세 변 합, 무게, 제주 배송 여부를 입력해 우체국 소포 요금 구간을 계산합니다.",
  alternates: {
    canonical: "/tools/korea-post-parcel",
    languages: {
      "ko-KR": "/tools/korea-post-parcel",
    },
  },
};

export default function KoreaPostParcelToolPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "우체국 택배 박스·무게 요금 계산기",
          url: absoluteUrl("/tools/korea-post-parcel"),
          applicationCategory: "UtilityApplication",
          operatingSystem: "Web",
          inLanguage: "ko-KR",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "우체국 택배는 크기와 무게 중 무엇을 기준으로 하나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "크기 단계와 무게 단계가 다르면 더 높은 단계를 기준으로 요금이 적용됩니다.",
              },
            },
            {
              "@type": "Question",
              name: "우체국 소포 최대 규격은 어떻게 되나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "공식 안내 기준으로 최대 중량은 30kg 이하, 세 변 합은 160cm 이하, 한 변은 100cm 이내입니다.",
              },
            },
          ],
        }}
      />

      <section className="hero compact">
        <p className="eyebrow">실용 도구</p>
        <h1>우체국 택배 박스·무게 요금 계산기</h1>
        <p>
          박스 크기와 무게를 입력하면 우체국 창구접수 요금표 기준으로 어떤 단계가
          적용되는지 확인할 수 있습니다.
        </p>
      </section>

      <ParcelCalculator />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">공식 요금표 기준</p>
          <h2>창구접수 등기소포 요금 구간</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>구간</th>
                <th>일반 익일배달</th>
                <th>제주 익일배달</th>
                <th>제주 D+2일</th>
              </tr>
            </thead>
            <tbody>
              {feeTiers.map((tier) => (
                <tr key={tier.id}>
                  <th scope="row">{tier.label}</th>
                  <td>{formatWon(tier.counterNextDay)}</td>
                  <td>{tier.jejuNextDay == null ? "해당 없음" : formatWon(tier.jejuNextDay)}</td>
                  <td>{formatWon(tier.jejuD2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note">
          참고용 계산입니다. 할인, 부가취급, 접수 방식, 지역 조건에 따라 실제 요금은 달라질
          수 있습니다.
        </p>
      </section>

      <section className="section cards two">
        <article className="card">
          <h2>크기 기준이 헷갈린다면</h2>
          <p>세 변 합과 한 변 제한을 먼저 확인하세요.</p>
          <Link href="/guides/post-office-parcel-size">우체국 택배 박스 크기 기준</Link>
        </article>
        <article className="card">
          <h2>보내기 전 마지막 확인</h2>
          <p>규격 초과 가능성이 있으면 체크리스트로 다시 확인하세요.</p>
          <Link href="/guides/oversize-parcel-checklist">규격 초과 체크리스트</Link>
        </article>
      </section>

      <section className="section source-box">
        <h2>공식 출처</h2>
        <ul>
          {officialSources.map((source) => (
            <li key={source.href}>
              <a href={source.href}>{source.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

