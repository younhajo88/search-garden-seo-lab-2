import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, getGuide, guides, officialSources } from "@/lib/site";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  const path = `/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: path,
      languages: {
        "ko-KR": path,
      },
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: absoluteUrl(path),
      type: "article",
      locale: "ko_KR",
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const path = `/guides/${guide.slug}`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          inLanguage: "ko-KR",
          mainEntityOfPage: absoluteUrl(path),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "홈",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: guide.title,
              item: absoluteUrl(path),
            },
          ],
        }}
      />

      <article className="article">
        <p className="eyebrow">우체국 택배 가이드</p>
        <h1>{guide.h1}</h1>
        <p className="lead">{guide.intro}</p>

        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className="callout">
          <h2>내 박스 요금을 바로 확인하기</h2>
          <p>가로, 세로, 높이와 무게를 알고 있다면 계산기로 적용 구간을 확인하세요.</p>
          <Link className="button" href="/tools/korea-post-parcel">
            계산기로 내 택배 요금 확인하기
          </Link>
        </section>

        <section>
          <h2>관련 가이드</h2>
          <ul className="related-list">
            {guide.related.map((relatedSlug) => {
              const related = getGuide(relatedSlug);
              if (!related) return null;
              return (
                <li key={related.slug}>
                  <Link href={`/guides/${related.slug}`}>{related.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="source-box">
          <h2>공식 출처</h2>
          <ul>
            {officialSources.map((source) => (
              <li key={source.href}>
                <a href={source.href}>{source.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}

