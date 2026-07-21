import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const REASONS = [
  { title: "ทีมช่างมีวิศวกรควบคุมงาน", description: "ทุกงานติดตั้งผ่านการควบคุมโดยวิศวกรไฟฟ้าที่มีใบอนุญาต มั่นใจเรื่องความปลอดภัย" },
  { title: "ขออนุญาตการไฟฟ้าให้ฟรี", description: "ดำเนินการยื่นเอกสารขนานไฟกับ MEA/PEA และ กกพ. ให้ครบ ไม่ต้องยุ่งยากเอง" },
  { title: "รับประกันงานนาน 25 ปี", description: "แผงและอินเวอร์เตอร์จากแบรนด์ชั้นนำ พร้อมรับประกันงานติดตั้งระยะยาว" },
  { title: "บริการหลังการขายครบวงจร", description: "ดูแลล้างแผง ตรวจเช็คระบบ และซ่อมบำรุงตลอดอายุการใช้งาน" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="ทำไมต้องเลือกเรา" title="ความมั่นใจที่ลูกค้าไว้วางใจ" align="center" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title} className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-heading font-semibold text-navy-950">{reason.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
