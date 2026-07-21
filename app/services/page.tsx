import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCard from "@/components/services/PackageCard";
import ProcessSteps from "@/components/services/ProcessSteps";
import ROICalculator from "@/components/services/ROICalculator";
import { SERVICE_PACKAGES } from "@/lib/content/packages";

export const metadata: Metadata = {
  title: "บริการรับติดตั้งโซล่าเซลล์ | แพ็กเกจและราคา",
  description: "แพ็กเกจติดตั้งโซล่าเซลล์สำหรับบ้าน โรงงาน และออฟฟิศ พร้อมขั้นตอนการให้บริการและเครื่องมือคำนวณความคุ้มค่า",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <Container>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-500">บริการรับติดตั้ง</p>
          <h1 className="mt-2 text-4xl font-heading font-bold sm:text-5xl">แพ็กเกจติดตั้งโซล่าเซลล์ครบวงจร</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            รองรับทั้งระบบ On-Grid, Off-Grid และ Hybrid เลือกขนาดที่เหมาะกับบ้าน โรงงาน หรือออฟฟิศของคุณ
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="แพ็กเกจติดตั้ง" title="เลือกขนาดระบบที่เหมาะกับคุณ" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {SERVICE_PACKAGES.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} highlighted={index === 1} />
            ))}
          </div>
        </Container>
      </section>

      <ProcessSteps />

      <section className="py-20">
        <Container className="max-w-3xl">
          <ROICalculator />
        </Container>
      </section>
    </>
  );
}
