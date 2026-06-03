export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://search-garden-seo-lab-2.vercel.app";

export const siteName = "소포정원";

export type FeeTier = {
  id: string;
  label: string;
  maxSizeCm: number;
  maxWeightKg: number;
  counterNextDay: number;
  jejuNextDay: number | null;
  jejuD2: number;
};

export const feeTiers: FeeTier[] = [
  {
    id: "small-80-3",
    label: "80cm 이하 · 3kg 이하",
    maxSizeCm: 80,
    maxWeightKg: 3,
    counterNextDay: 4000,
    jejuNextDay: 6500,
    jejuD2: 4000,
  },
  {
    id: "small-100-5",
    label: "80~100cm · 3~5kg",
    maxSizeCm: 100,
    maxWeightKg: 5,
    counterNextDay: 4500,
    jejuNextDay: 7000,
    jejuD2: 4500,
  },
  {
    id: "medium-100-7",
    label: "80~100cm · 5~7kg",
    maxSizeCm: 100,
    maxWeightKg: 7,
    counterNextDay: 5000,
    jejuNextDay: 7500,
    jejuD2: 5000,
  },
  {
    id: "medium-120-10",
    label: "100~120cm · 7~10kg",
    maxSizeCm: 120,
    maxWeightKg: 10,
    counterNextDay: 6000,
    jejuNextDay: 8500,
    jejuD2: 6000,
  },
  {
    id: "large-120-15",
    label: "100~120cm · 10~15kg",
    maxSizeCm: 120,
    maxWeightKg: 15,
    counterNextDay: 7000,
    jejuNextDay: 9500,
    jejuD2: 7000,
  },
  {
    id: "large-120-20",
    label: "100~120cm · 15~20kg",
    maxSizeCm: 120,
    maxWeightKg: 20,
    counterNextDay: 8000,
    jejuNextDay: 10500,
    jejuD2: 8000,
  },
  {
    id: "oversize-120-25",
    label: "100~120cm · 20~25kg",
    maxSizeCm: 120,
    maxWeightKg: 25,
    counterNextDay: 11000,
    jejuNextDay: 13500,
    jejuD2: 11000,
  },
  {
    id: "max-160-30",
    label: "120~160cm · 25~30kg",
    maxSizeCm: 160,
    maxWeightKg: 30,
    counterNextDay: 13000,
    jejuNextDay: 15500,
    jejuD2: 13000,
  },
];

export const officialSources = [
  {
    label: "우정사업본부 국내소포 요금표",
    href: "https://www.koreapost.go.kr/kpost/subIndex/201.do?pSiteIdx=125",
  },
  {
    label: "인터넷우체국 소포 자주하는 질문",
    href: "https://epost.go.kr/bbs.RetrieveFaqFrontView.comm?code=L01&codetype=L",
  },
];

export type Guide = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
  related: string[];
};

export const guides: Guide[] = [
  {
    slug: "post-office-parcel-size",
    title: "우체국 택배 박스 크기 기준",
    description: "우체국 소포의 세 변 합, 한 변 최대 길이, 무게 제한을 정리했습니다.",
    h1: "우체국 택배 박스 크기 기준",
    intro:
      "우체국 소포는 박스 세 변의 합과 실제 무게를 함께 봅니다. 두 기준의 단계가 다르면 더 높은 단계가 요금 기준이 됩니다.",
    sections: [
      {
        heading: "먼저 세 변 합을 계산합니다",
        body:
          "가로, 세로, 높이를 모두 더한 값이 세 변 합입니다. 예를 들어 35cm, 25cm, 20cm 박스는 세 변 합이 80cm입니다.",
        bullets: ["80cm 이하", "80~100cm", "100~120cm", "120~160cm"],
      },
      {
        heading: "최대 제한을 확인합니다",
        body:
          "공식 안내 기준으로 중량은 최대 30kg 이하, 세 변 합은 최대 160cm 이하, 한 변의 최대 길이는 100cm 이내여야 합니다.",
      },
      {
        heading: "무게와 크기 중 높은 단계를 적용합니다",
        body:
          "박스는 작아도 무게가 무겁다면 무게 기준으로 더 높은 요금 단계가 적용될 수 있습니다.",
      },
    ],
    related: ["oversize-parcel-checklist", "used-goods-parcel-box"],
  },
  {
    slug: "counter-vs-pickup",
    title: "우체국 창구접수와 방문접수 차이",
    description: "창구소포와 방문접수소포의 요금 기준과 접수 흐름 차이를 비교합니다.",
    h1: "우체국 창구접수와 방문접수 차이",
    intro:
      "우체국 소포는 직접 우체국에 가는 창구접수와 집이나 사무실로 방문을 요청하는 방문접수로 나뉩니다.",
    sections: [
      {
        heading: "창구접수는 직접 우체국에 방문합니다",
        body:
          "소포를 포장해 우체국 창구에서 접수합니다. 간편사전접수를 이용하면 주소 정보를 미리 입력해 접수 시간을 줄일 수 있습니다.",
      },
      {
        heading: "방문접수는 편하지만 조건을 더 확인해야 합니다",
        body:
          "방문접수는 우체국 직원이 지정 장소로 방문해 접수하는 방식입니다. 보관 장소, 방문 가능 시간, 사전결제 여부를 확인해야 합니다.",
      },
      {
        heading: "요금 비교는 크기와 무게를 먼저 맞춘 뒤 합니다",
        body:
          "접수 방식이 달라도 크기와 무게 단계가 기본입니다. 먼저 세 변 합과 무게를 계산한 뒤 접수 방식을 고르는 편이 안전합니다.",
      },
    ],
    related: ["post-office-parcel-size", "jeju-parcel-fee"],
  },
  {
    slug: "jeju-parcel-fee",
    title: "우체국 제주 택배 요금 기준",
    description: "제주 익일배달과 D+2일 배달 요금 차이를 쉽게 확인하세요.",
    h1: "우체국 제주 택배 요금 기준",
    intro:
      "제주 배송은 출발지와 도착지, 배달일 조건에 따라 요금이 달라집니다. 요금표를 볼 때 익일배달과 D+2일 배달을 구분해야 합니다.",
    sections: [
      {
        heading: "육지에서 제주로 보내는 경우",
        body:
          "공식 안내는 제주행 배송에서 D+2일 배달 기준을 함께 제시합니다. 급한 발송이 아니라면 D+2일 기준도 확인하세요.",
      },
      {
        heading: "제주에서 육지로 보내는 경우",
        body:
          "제주발 소포는 우체국별 접수 마감 시간에 따라 익일배달 또는 D+2일 배달이 달라질 수 있습니다.",
      },
      {
        heading: "계산기에서는 배송 구분을 따로 고릅니다",
        body:
          "같은 박스와 같은 무게라도 제주 익일배달, 제주 D+2일 배달, 일반 익일배달의 예상 요금이 다르게 표시됩니다.",
      },
    ],
    related: ["counter-vs-pickup", "oversize-parcel-checklist"],
  },
  {
    slug: "used-goods-parcel-box",
    title: "중고거래 택배 박스 고르는 법",
    description: "의류, 신발, 책, 소형가전별 우체국 택배 박스 선택 팁을 정리했습니다.",
    h1: "중고거래 택배 박스 고르는 법",
    intro:
      "중고거래 택배는 물건값보다 배송비가 크게 느껴질 때가 많습니다. 물건에 맞는 박스를 고르면 규격 초과와 과대 포장을 줄일 수 있습니다.",
    sections: [
      {
        heading: "의류와 신발은 빈 공간을 줄입니다",
        body:
          "가벼운 물건은 무게보다 박스 크기가 요금 단계에 영향을 주기 쉽습니다. 완충은 하되 빈 공간이 너무 큰 박스는 피하세요.",
      },
      {
        heading: "책은 무게를 먼저 봅니다",
        body:
          "책은 박스가 작아도 무게가 빠르게 늘어납니다. 여러 권을 보낼 때는 무게 단계가 올라가는지 먼저 확인해야 합니다.",
      },
      {
        heading: "소형가전은 완충과 한 변 길이를 함께 봅니다",
        body:
          "파손 위험이 있는 물건은 완충재가 필요하지만, 한 변 100cm 제한과 세 변 합 160cm 제한도 함께 확인해야 합니다.",
      },
    ],
    related: ["post-office-parcel-size", "oversize-parcel-checklist"],
  },
  {
    slug: "oversize-parcel-checklist",
    title: "우체국 택배 규격 초과 체크리스트",
    description: "세 변 합, 한 변 길이, 무게를 보내기 전에 확인하는 체크리스트입니다.",
    h1: "우체국 택배 규격 초과 체크리스트",
    intro:
      "우체국에 도착한 뒤 접수가 어렵다는 말을 듣지 않으려면, 보내기 전에 크기와 무게 제한을 차례대로 확인하는 것이 좋습니다.",
    sections: [
      {
        heading: "보내기 전 세 가지를 확인합니다",
        body:
          "세 변 합, 가장 긴 한 변, 실제 무게를 모두 적어보세요. 하나라도 제한을 넘으면 일반 소포 접수가 어려울 수 있습니다.",
        bullets: ["세 변 합 160cm 이하", "한 변 100cm 이하", "무게 30kg 이하"],
      },
      {
        heading: "높은 요금 단계도 미리 봅니다",
        body:
          "제한을 넘지 않아도 크기나 무게가 높은 단계에 걸리면 예상보다 요금이 커질 수 있습니다.",
      },
      {
        heading: "규격 초과라면 대체 발송을 확인합니다",
        body:
          "일반 소포로 보내기 어려운 물품은 화물 배송, 판매자 직접 수령, 분할 포장 같은 대안을 검토해야 합니다.",
      },
    ],
    related: ["post-office-parcel-size", "counter-vs-pickup"],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function formatWon(value: number) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(value);
}

