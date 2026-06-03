# Site Blueprint

## Public Indexable URLs
| URL | Purpose |
| --- | --- |
| `/` | Korean landing page introducing the parcel fee tool and guide cluster |
| `/tools/korea-post-parcel` | Practical calculator for Korea Post parcel size, weight, and fee tier |
| `/guides/post-office-parcel-size` | Guide to parcel size limits, three-side sum, one-side limit, and oversize risk |
| `/guides/counter-vs-pickup` | Guide comparing counter parcel and pickup parcel workflows |
| `/guides/jeju-parcel-fee` | Guide explaining Jeju delivery fee and delivery-day differences |
| `/guides/used-goods-parcel-box` | Guide for choosing boxes for used-goods shipping |
| `/guides/oversize-parcel-checklist` | Checklist for parcel-size and weight problems before sending |

## Tool Page
`/tools/korea-post-parcel` contains:
- Inputs: width, depth, height, weight, delivery lane, service type.
- Output: three-side sum, size tier, weight tier, applied higher tier, estimated official fee, warnings for maximum limits.
- Rules in visible HTML: maximum 30kg, maximum three-side sum 160cm, maximum one side 100cm, higher tier applies when size and weight tiers differ.
- Client component scope: calculator form interaction only.
- Server content scope: explanation, fee table, examples, limitations, guide links.

## Five Guide Pages
1. `/guides/post-office-parcel-size`
   - Explains 세 변 합, 한 변 제한, 30kg/160cm/100cm limits.
2. `/guides/counter-vs-pickup`
   - Explains 창구접수, 방문접수, 간편사전접수, when each is useful.
3. `/guides/jeju-parcel-fee`
   - Explains 제주 익일배달 and D+2 day distinctions.
4. `/guides/used-goods-parcel-box`
   - Gives box-selection examples for clothes, shoes, books, small electronics.
5. `/guides/oversize-parcel-checklist`
   - Lists checks before visiting the post office and alternatives for oversize parcels.

## Internal Links
| From | To | Anchor text |
| --- | --- | --- |
| `/` | `/tools/korea-post-parcel` | 우체국 택배 요금 계산하기 |
| `/` | all guide pages | 우체국 택배 크기 가이드, 창구접수와 방문접수 차이, 제주 택배 요금 보기 |
| `/tools/korea-post-parcel` | `/guides/post-office-parcel-size` | 세 변 합과 박스 규격 확인하기 |
| `/tools/korea-post-parcel` | `/guides/counter-vs-pickup` | 창구접수와 방문접수 차이 |
| `/tools/korea-post-parcel` | `/guides/jeju-parcel-fee` | 제주 배송 요금 기준 |
| Each guide | `/tools/korea-post-parcel` | 계산기로 내 택배 요금 확인하기 |
| Each guide | related guides | Related descriptive Korean anchors |

## Metadata Plan
| URL | Title | Description | Canonical | H1 |
| --- | --- | --- | --- | --- |
| `/` | 우체국 택배 요금 계산기 | 박스 크기와 무게로 우체국 소포 요금 구간과 규격 초과 여부를 확인하세요. | `/` | 우체국 택배 요금 계산기 |
| `/tools/korea-post-parcel` | 우체국 택배 박스·무게 요금 계산기 | 세 변 합, 무게, 제주 배송 여부를 입력해 우체국 소포 요금 구간을 계산합니다. | `/tools/korea-post-parcel` | 우체국 택배 박스·무게 요금 계산기 |
| `/guides/post-office-parcel-size` | 우체국 택배 박스 크기 기준 | 우체국 소포의 세 변 합, 한 변 최대 길이, 무게 제한을 정리했습니다. | `/guides/post-office-parcel-size` | 우체국 택배 박스 크기 기준 |
| `/guides/counter-vs-pickup` | 우체국 창구접수와 방문접수 차이 | 창구소포와 방문접수소포의 요금 기준과 접수 흐름 차이를 비교합니다. | `/guides/counter-vs-pickup` | 우체국 창구접수와 방문접수 차이 |
| `/guides/jeju-parcel-fee` | 우체국 제주 택배 요금 기준 | 제주 익일배달과 D+2일 배달 요금 차이를 쉽게 확인하세요. | `/guides/jeju-parcel-fee` | 우체국 제주 택배 요금 기준 |
| `/guides/used-goods-parcel-box` | 중고거래 택배 박스 고르는 법 | 의류, 신발, 책, 소형가전별 우체국 택배 박스 선택 팁을 정리했습니다. | `/guides/used-goods-parcel-box` | 중고거래 택배 박스 고르는 법 |
| `/guides/oversize-parcel-checklist` | 우체국 택배 규격 초과 체크리스트 | 세 변 합, 한 변 길이, 무게를 보내기 전에 확인하는 체크리스트입니다. | `/guides/oversize-parcel-checklist` | 우체국 택배 규격 초과 체크리스트 |

## Korean Routes and Language Rules
- Use Korean UI and Korean metadata in the first release.
- Use ASCII slugs for stable URLs.
- Set `<html lang="ko">`.
- Use route paths that can map cleanly to future `/en` paths.
- Do not mix English content into Korean pages except necessary service names such as Korea Post.

## Rendering Plan
| URL pattern | Rendering | Reason |
| --- | --- | --- |
| `/` | SSG | Static landing content and internal links |
| `/tools/korea-post-parcel` | SSG + client calculator island | Indexable explanation and fee tables are static; calculator interaction runs client-side |
| `/guides/*` | SSG | Stable guides with official-source citations |
| Future `/en/*` | SSG | Future localized static content |

## Structured Data
- Home: `WebSite` + `WebApplication` for the calculator entry point.
- Tool page: `SoftwareApplication` or `WebApplication` plus `FAQPage` only for visible FAQ content.
- Guide pages: `Article` plus `BreadcrumbList`.
- Omit price structured data because fees are conditional and should not be represented as a single product price.

## Noindex Pages
- No user account pages in initial release.
- No settings, login, API, or preview-only pages should be indexable.
- Vercel preview deployments should not be treated as production canonical URLs.

## Future English Routes and Hreflang
- Future English prefix: `/en`.
- Korean canonical remains the Korean URL until a translated English page exists.
- When English pages are added, each pair should include:
  - `alternates.languages["ko-KR"]`
  - `alternates.languages["en"]`
  - self-canonical for each localized URL
- No English placeholder pages in the first release.

