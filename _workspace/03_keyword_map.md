# Keyword Map

## Korean Primary Queries
| URL | Primary query | Notes |
| --- | --- | --- |
| `/` | 우체국 택배 요금 계산기 | 사이트 홈과 도구 진입점 |
| `/tools/korea-post-parcel` | 우체국 택배 박스 무게 요금 계산기 | 핵심 도구 페이지 |
| `/guides/post-office-parcel-size` | 우체국 택배 박스 크기 | 세 변 합, 한 변 제한, 규격 초과 |
| `/guides/counter-vs-pickup` | 우체국 창구접수 방문접수 차이 | 접수 방식 비교 |
| `/guides/jeju-parcel-fee` | 우체국 제주 택배 요금 | 제주 익일/D+2일 검색 의도 |
| `/guides/used-goods-parcel-box` | 중고거래 택배 박스 고르기 | 당근·번개장터 등 실용 맥락 |
| `/guides/oversize-parcel-checklist` | 택배 규격 초과 확인 | 보내기 전 체크리스트 |

## Korean Long-Tail Queries
| URL | Long-tail queries |
| --- | --- |
| `/tools/korea-post-parcel` | 우체국 택배 세변합 계산, 우체국 택배 80cm 3kg 요금, 우체국 택배 160cm 30kg, 우체국 택배 무게 크기 높은 단계 |
| `/guides/post-office-parcel-size` | 우체국 택배 박스 세 변 합, 우체국 택배 한 변 최대 길이, 우체국 택배 박스 100cm, 우체국 택배 규격 초과 |
| `/guides/counter-vs-pickup` | 우체국 창구소포 방문소포 차이, 우체국 방문접수 요금, 우체국 창구접수 요금, 우체국 소포 간편사전접수 |
| `/guides/jeju-parcel-fee` | 우체국 제주 택배 요금, 제주 익일배달 우체국, 제주 D+2 소포, 제주발 우체국 택배 |
| `/guides/used-goods-parcel-box` | 중고거래 택배 박스 크기, 당근 택배 박스 고르기, 옷 택배 박스 크기, 신발 택배 박스 |
| `/guides/oversize-parcel-checklist` | 택배 세변합 160 초과, 우체국 택배 30kg 초과, 우체국 택배 한변 100cm 초과, 소포 규격 초과 보내는 법 |

## Search Intent
| URL | Primary intent | Secondary intent |
| --- | --- | --- |
| `/` | 우체국 택배 요금 계산 도구 찾기 | 관련 가이드 탐색 |
| `/tools/korea-post-parcel` | 입력값으로 요금 구간과 규격 가능 여부 확인 | 공식 요금표 기준 이해 |
| `/guides/post-office-parcel-size` | 우체국 소포 크기 규칙 이해 | 도구에서 어떤 값을 넣어야 하는지 학습 |
| `/guides/counter-vs-pickup` | 창구접수와 방문접수 중 무엇을 선택할지 판단 | 할인·접수 방식 이해 |
| `/guides/jeju-parcel-fee` | 제주 배송 요금과 배달일 차이 확인 | 육지→제주, 제주→육지 구분 |
| `/guides/used-goods-parcel-box` | 중고거래 물품별 적절한 박스 고르기 | 과대 포장으로 인한 요금 상승 방지 |
| `/guides/oversize-parcel-checklist` | 보내기 전 규격 초과 위험 확인 | 대체 발송 방법 고려 |

## Future English Expansion
- Future route prefix: `/en`
- Future English tool route: `/en/tools/korea-post-parcel`
- Future English guide cluster:
  - `/en/guides/korea-post-parcel-size`
  - `/en/guides/counter-vs-pickup`
  - `/en/guides/jeju-parcel-fee`
  - `/en/guides/used-goods-parcel-box`
  - `/en/guides/oversize-parcel-checklist`
- Future hreflang design:
  - Korean pages use `ko-KR`.
  - English pages use `en`.
  - Each localized pair points to itself as canonical and links alternates.
- English content is not required for the first release.

