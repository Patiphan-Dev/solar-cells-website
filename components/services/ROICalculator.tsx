"use client";

import { useState } from "react";
import { estimateRoi, type RoiEstimate } from "@/lib/roi";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export default function ROICalculator() {
  const [monthlyBill, setMonthlyBill] = useState("3000");
  const [result, setResult] = useState<RoiEstimate | null>(null);

  function handleCalculate(event: React.FormEvent) {
    event.preventDefault();
    const bill = Number(monthlyBill);
    if (!Number.isFinite(bill) || bill <= 0) return;
    setResult(estimateRoi(bill));
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="font-heading text-xl font-bold text-navy-950">คำนวณความคุ้มค่าเบื้องต้น</h3>
      <p className="mt-1 text-sm text-slate-600">กรอกค่าไฟเฉลี่ยต่อเดือน เพื่อประเมินขนาดระบบที่เหมาะกับบ้านคุณ</p>

      <form onSubmit={handleCalculate} className="mt-5 flex flex-wrap gap-3">
        <label className="flex-1 min-w-[200px]">
          <span className="text-sm font-medium text-navy-900">ค่าไฟเฉลี่ยต่อเดือน (บาท)</span>
          <input
            type="number"
            min={1}
            value={monthlyBill}
            onChange={(event) => setMonthlyBill(event.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-navy-950 focus:border-amber-500 focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="self-end rounded-md bg-navy-900 px-6 py-2.5 font-heading font-semibold text-white hover:bg-navy-800"
        >
          คำนวณ
        </button>
      </form>

      {result && (
        <div className="mt-6 grid gap-4 rounded-lg bg-slate-50 p-5 sm:grid-cols-3">
          <ResultItem label="ขนาดระบบแนะนำ" value={`${result.recommendedKw} kW`} />
          <ResultItem label="งบประมาณโดยประมาณ" value={`${result.estimatedInstallCost.toLocaleString("th-TH")} บาท`} />
          <ResultItem label="ระยะเวลาคืนทุนโดยประมาณ" value={`${result.paybackYears} ปี`} />
          <p className="sm:col-span-3 text-xs text-slate-500">
            ตัวเลขนี้เป็นการประเมินเบื้องต้นเท่านั้น ราคาจริงขึ้นอยู่กับสภาพหน้างาน กรุณาติดต่อทีมงานเพื่อประเมินราคาที่แม่นยำ
          </p>
          <div className="sm:col-span-3">
            <Button href={BUSINESS.lineHref} external variant="primary">
              รับใบเสนอราคาที่แม่นยำ
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ResultItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 font-heading text-lg font-bold text-navy-950">{value}</p>
    </div>
  );
}
