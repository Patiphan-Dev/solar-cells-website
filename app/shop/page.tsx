import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CategoryFilter from "@/components/shop/CategoryFilter";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ร้านค้าอุปกรณ์โซล่าเซลล์ | แผง อินเวอร์เตอร์ แบตเตอรี่",
  description: "จำหน่ายแผงโซล่าเซลล์ อินเวอร์เตอร์ แบตเตอรี่ และอุปกรณ์ติดตั้ง ราคาส่งและปลีก",
};

export default function ShopPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-500">ร้านค้า/อุปกรณ์</p>
            <h1 className="mt-2 text-4xl font-heading font-bold sm:text-5xl">อุปกรณ์โซล่าเซลล์คุณภาพ</h1>
            <p className="mt-4 max-w-xl text-slate-300">
              แผง อินเวอร์เตอร์ แบตเตอรี่ และอุปกรณ์ติดตั้งจากแบรนด์ชั้นนำ พร้อมราคาส่งสำหรับผู้รับเหมา
            </p>
          </div>
          <Button href={BUSINESS.lineHref} external variant="primary">ขอใบเสนอราคา</Button>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <CategoryFilter />
        </Container>
      </section>
    </>
  );
}
