import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, guides, officialSources, siteName } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName,
          url: absoluteUrl("/"),
          inLanguage: "ko-KR",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "우체국 택배 요금 계산기",
          url: absoluteUrl("/tools/korea-post-parcel"),
          applicationCategory: "UtilityApplication",
          operatingSystem: "Web",
          inLanguage: "ko-KR",
        }}
      />

      <section className="hero">
        <p className="eyebrow">우체국 소포 계산 실험실</p>
        <h1>우체국 택배 요금 계산기</h1>
        <p>
          박스 세 변의 합과 무게를 입력해 우체국 소포 요금 구간, 제주 배송 기준,
          규격 초과 위험을 한 번에 확인하세요.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/tools/korea-post-parcel">
            우체국 택배 요금 계산하기
          </Link>
          <Link className="button secondary" href="/guides/post-office-parcel-size">
            박스 크기 기준 보기
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">계산 전에 알아둘 기준</p>
          <h2>공식 요금표의 핵심 규칙</h2>
        </div>
        <div className="cards three">
          <article className="card">
            <h3>세 변 합</h3>
            <p>가로, 세로, 높이를 모두 더해 80cm, 100cm, 120cm, 160cm 구간을 봅니다.</p>
          </article>
          <article className="card">
            <h3>무게 단계</h3>
            <p>무게 단계와 크기 단계가 다르면 더 높은 단계가 요금 기준이 됩니다.</p>
          </article>
          <article className="card">
            <h3>취급 제한</h3>
            <p>최대 30kg, 세 변 합 160cm, 한 변 100cm 제한을 넘기지 않는지 확인합니다.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">가이드 5개</p>
          <h2>보내기 전에 확인할 글</h2>
        </div>
        <div className="cards">
          {guides.map((guide) => (
            <article className="card" key={guide.slug}>
              <h3>
                <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
              </h3>
              <p>{guide.description}</p>
            </article>
          ))}
        </div>
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

