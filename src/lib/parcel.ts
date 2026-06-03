import { feeTiers, type FeeTier } from "./site";

export type ParcelCalculationInput = {
  width: number;
  depth: number;
  height: number;
  weight: number;
  destination: "mainland" | "jejuNextDay" | "jejuD2";
};

export type ParcelCalculationResult = {
  totalSize: number;
  longestSide: number;
  sizeTier: FeeTier | null;
  weightTier: FeeTier | null;
  appliedTier: FeeTier | null;
  price: number | null;
  warnings: string[];
};

export function calculateParcel(input: ParcelCalculationInput): ParcelCalculationResult {
  const totalSize = input.width + input.depth + input.height;
  const longestSide = Math.max(input.width, input.depth, input.height);
  const warnings: string[] = [];

  if (longestSide > 100) {
    warnings.push("한 변의 길이가 100cm를 넘으면 일반 우체국 소포 접수가 어려울 수 있습니다.");
  }

  if (totalSize > 160) {
    warnings.push("세 변의 합이 160cm를 넘으면 공식 취급 제한을 초과합니다.");
  }

  if (input.weight > 30) {
    warnings.push("무게가 30kg을 넘으면 공식 취급 제한을 초과합니다.");
  }

  const sizeTier = feeTiers.find((tier) => totalSize <= tier.maxSizeCm) ?? null;
  const weightTier = feeTiers.find((tier) => input.weight <= tier.maxWeightKg) ?? null;

  const appliedTier =
    sizeTier && weightTier
      ? feeTiers[Math.max(feeTiers.indexOf(sizeTier), feeTiers.indexOf(weightTier))]
      : null;

  const price =
    appliedTier == null
      ? null
      : input.destination === "mainland"
        ? appliedTier.counterNextDay
        : input.destination === "jejuNextDay"
          ? appliedTier.jejuNextDay
          : appliedTier.jejuD2;

  return {
    totalSize,
    longestSide,
    sizeTier,
    weightTier,
    appliedTier,
    price,
    warnings,
  };
}

