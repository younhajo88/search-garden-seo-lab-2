import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hero compact">
      <p className="eyebrow">404</p>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>주소가 바뀌었거나 아직 공개되지 않은 페이지입니다.</p>
      <Link className="button" href="/">
        홈으로 돌아가기
      </Link>
    </main>
  );
}

