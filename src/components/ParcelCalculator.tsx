"use client";

import { useMemo, useState } from "react";
import { calculateParcel, type ParcelCalculationInput } from "@/lib/parcel";
import { formatWon } from "@/lib/site";

export function ParcelCalculator() {
  const [input, setInput] = useState<ParcelCalculationInput>({
    width: 35,
    depth: 25,
    height: 20,
    weight: 3,
    destination: "mainland",
  });

  const result = useMemo(() => calculateParcel(input), [input]);

  function updateNumber(field: "width" | "depth" | "height" | "weight", value: string) {
    setInput((current) => ({
      ...current,
      [field]: Number(value),
    }));
  }

  return (
    <section className="calculator" aria-labelledby="calculator-title">
      <div>
        <p className="eyebrow">계산기</p>
        <h2 id="calculator-title">박스 크기와 무게 입력</h2>
        <p>
          가로, 세로, 높이와 무게를 넣으면 세 변 합, 적용 요금 단계, 예상 창구접수
          요금을 확인할 수 있습니다.
        </p>
      </div>

      <div className="calculator-grid">
        <form className="calculator-form">
          <label>
            가로(cm)
            <input
              min="1"
              type="number"
              value={input.width}
              onChange={(event) => updateNumber("width", event.target.value)}
            />
          </label>
          <label>
            세로(cm)
            <input
              min="1"
              type="number"
              value={input.depth}
              onChange={(event) => updateNumber("depth", event.target.value)}
            />
          </label>
          <label>
            높이(cm)
            <input
              min="1"
              type="number"
              value={input.height}
              onChange={(event) => updateNumber("height", event.target.value)}
            />
          </label>
          <label>
            무게(kg)
            <input
              min="0.1"
              step="0.1"
              type="number"
              value={input.weight}
              onChange={(event) => updateNumber("weight", event.target.value)}
            />
          </label>
          <label className="wide">
            배송 구분
            <select
              value={input.destination}
              onChange={(event) =>
                setInput((current) => ({
                  ...current,
                  destination: event.target.value as ParcelCalculationInput["destination"],
                }))
              }
            >
              <option value="mainland">일반 익일배달</option>
              <option value="jejuNextDay">제주 익일배달</option>
              <option value="jejuD2">제주 D+2일 배달</option>
            </select>
          </label>
        </form>

        <div className="result-card" aria-live="polite">
          <p className="eyebrow">예상 결과</p>
          <dl>
            <div>
              <dt>세 변 합</dt>
              <dd>{result.totalSize.toFixed(1)}cm</dd>
            </div>
            <div>
              <dt>가장 긴 한 변</dt>
              <dd>{result.longestSide.toFixed(1)}cm</dd>
            </div>
            <div>
              <dt>크기 기준 단계</dt>
              <dd>{result.sizeTier?.label ?? "규격 초과"}</dd>
            </div>
            <div>
              <dt>무게 기준 단계</dt>
              <dd>{result.weightTier?.label ?? "규격 초과"}</dd>
            </div>
            <div>
              <dt>적용 단계</dt>
              <dd>{result.appliedTier?.label ?? "접수 제한 확인 필요"}</dd>
            </div>
            <div>
              <dt>예상 요금</dt>
              <dd>{result.price == null ? "공식 확인 필요" : formatWon(result.price)}</dd>
            </div>
          </dl>

          {result.warnings.length > 0 ? (
            <div className="warning">
              <strong>확인 필요</strong>
              <ul>
                {result.warnings.map((warning) => (
                  <li key={warning}>{warning}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="success">입력값은 기본 취급 제한 안에 있습니다.</p>
          )}
        </div>
      </div>
    </section>
  );
}

