import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { BUSINESS, BRAND_LOGOS_USED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: "ประวัติความเป็นมาและความเชี่ยวชาญของทีมงาน",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <Container>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-500">เกี่ยวกับเรา</p>
          <h1 className="mt-2 text-4xl font-heading font-bold sm:text-5xl">{BUSINESS.name}</h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl space-y-6 text-slate-700">
          <p>
            {BUSINESS.name} ก่อตั้งขึ้นในปี 2561 ให้บริการรับติดตั้งระบบโซล่าเซลล์และจำหน่ายอุปกรณ์โซล่าเซลล์แบบครบวงจร
            ตลอดระยะเวลาที่ผ่านมาเราติดตั้งระบบไปแล้วกว่า 400 หลังคาเรือนและโรงงาน ครอบคลุมพื้นที่กรุงเทพฯ และปริมณฑล
            ดำเนินงานภายใต้ใบอนุญาตประกอบกิจการวิศวกรรมควบคุม
          </p>
          <p>
            ทีมงานของเราประกอบด้วยวิศวกรไฟฟ้าที่มีใบอนุญาตควบคุมงาน ทำให้ทุกการติดตั้งเป็นไปตามมาตรฐานความปลอดภัย
            พร้อมดูแลตั้งแต่การออกแบบระบบ ยื่นขออนุญาตการไฟฟ้า ไปจนถึงบริการหลังการขาย
          </p>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy-950">แบรนด์อุปกรณ์ที่เราใช้และจำหน่าย</h2>
            <ul className="mt-3 flex flex-wrap gap-3">
              {BRAND_LOGOS_USED.map((brand) => (
                <li key={brand} className="rounded-full bg-slate-100 px-4 py-1.5 text-sm text-navy-900">
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
