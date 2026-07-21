import type { ServicePackage } from "@/types/business";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export default function PackageCard({ pkg, highlighted = false }: { pkg: ServicePackage; highlighted?: boolean }) {
  return (
    <div
      className={`flex flex-col rounded-xl border p-6 ${
        highlighted ? "border-amber-500 shadow-lg shadow-amber-500/10" : "border-slate-200"
      }`}
    >
      <h3 className="font-heading text-xl font-bold text-navy-950">{pkg.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{pkg.suitableFor}</p>
      <p className="mt-1 text-xs text-slate-400">เหมาะกับค่าไฟ {pkg.monthlyBillRange}</p>

      <p className="mt-5 font-heading text-3xl font-bold text-navy-950">
        เริ่มต้น {pkg.priceFrom.toLocaleString("th-TH")}
        <span className="text-base font-medium text-slate-500"> บาท</span>
      </p>

      <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600">
        <li>แผง: {pkg.panelBrand}</li>
        <li>อินเวอร์เตอร์: {pkg.inverterBrand}</li>
        <li>รับประกัน {pkg.warrantyYears} ปี</li>
        {pkg.highlights.map((h) => (
          <li key={h}>• {h}</li>
        ))}
      </ul>

      <Button href={BUSINESS.lineHref} external variant={highlighted ? "primary" : "secondary"} className="mt-6">
        สอบถามแพ็กเกจนี้
      </Button>
    </div>
  );
}
