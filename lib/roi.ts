const BAHT_PER_KWH = 4.5;
const KWH_PRODUCED_PER_KW_PER_DAY = 4;
const DAYS_PER_MONTH = 30;
const INSTALL_COST_PER_KW = 33000;
const BILL_OFFSET_RATIO = 0.75;

export interface RoiEstimate {
  recommendedKw: number;
  estimatedInstallCost: number;
  estimatedMonthlySavings: number;
  paybackYears: number;
}

export function estimateRoi(monthlyBillBaht: number): RoiEstimate {
  const targetOffsetBaht = monthlyBillBaht * BILL_OFFSET_RATIO;
  const monthlyKwhToOffset = targetOffsetBaht / BAHT_PER_KWH;
  const dailyKwhToOffset = monthlyKwhToOffset / DAYS_PER_MONTH;
  const rawKw = dailyKwhToOffset / KWH_PRODUCED_PER_KW_PER_DAY;
  const recommendedKw = Math.max(2, Math.round(rawKw * 2) / 2);

  const estimatedInstallCost = Math.round(recommendedKw * INSTALL_COST_PER_KW);
  const estimatedMonthlySavings = Math.round(
    recommendedKw * KWH_PRODUCED_PER_KW_PER_DAY * DAYS_PER_MONTH * BAHT_PER_KWH
  );
  const paybackYears = Math.round((estimatedInstallCost / (estimatedMonthlySavings * 12)) * 10) / 10;

  return { recommendedKw, estimatedInstallCost, estimatedMonthlySavings, paybackYears };
}
