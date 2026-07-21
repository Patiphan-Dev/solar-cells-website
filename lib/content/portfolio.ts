import type { PortfolioProject, Testimonial } from "@/types/business";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "pf1",
    title: "บ้านเดี่ยว 2 ชั้น ระบบ On-Grid",
    type: "residential",
    location: "สมุทรปราการ (ตัวอย่าง)",
    systemKw: 5,
    systemType: "on-grid",
    savingsPerMonth: "ประมาณ 3,000 บาท/เดือน",
    description: "ติดตั้งบนหลังคากระเบื้อง ใช้เวลาติดตั้ง 2 วัน ลดค่าไฟได้ทันทีตั้งแต่เดือนแรก",
  },
  {
    id: "pf2",
    title: "โรงงานอุตสาหกรรมขนาดกลาง",
    type: "factory",
    location: "ชลบุรี (ตัวอย่าง)",
    systemKw: 100,
    systemType: "on-grid",
    savingsPerMonth: "ประมาณ 60,000 บาท/เดือน",
    description: "ระบบขนาดใหญ่บนหลังคาโรงงาน ออกแบบโดยวิศวกรควบคุมงาน คืนทุนภายใน 4-5 ปี",
  },
  {
    id: "pf3",
    title: "ออฟฟิศให้เช่า ระบบ Hybrid",
    type: "office",
    location: "กรุงเทพมหานคร (ตัวอย่าง)",
    systemKw: 20,
    systemType: "hybrid",
    savingsPerMonth: "ประมาณ 12,000 บาท/เดือน",
    description: "ติดตั้งพร้อมแบตเตอรี่สำรองไฟ รองรับช่วงไฟดับได้บางส่วน",
  },
  {
    id: "pf4",
    title: "ฟาร์มเกษตร ระบบปั๊มน้ำโซล่าเซลล์",
    type: "agriculture",
    location: "สระบุรี (ตัวอย่าง)",
    systemKw: 2,
    systemType: "off-grid",
    savingsPerMonth: "ลดต้นทุนค่าไฟสูบน้ำเกือบทั้งหมด",
    description: "ระบบ Off-Grid สำหรับพื้นที่ไม่มีไฟฟ้าเข้าถึง ใช้สูบน้ำเพื่อการเกษตร",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "คุณสมชาย (ตัวอย่าง)", role: "เจ้าของบ้าน จ.สมุทรปราการ", quote: "ทีมงานดูแลดีมาก ยื่นเอกสารให้ครบ ไม่ต้องยุ่งยากเอง", result: "ค่าไฟลดลงกว่า 60%" },
  { name: "คุณวิภา (ตัวอย่าง)", role: "ผู้จัดการโรงงาน จ.ชลบุรี", quote: "ติดตั้งเร็ว ตรงเวลา มีวิศวกรควบคุมงานจริง มั่นใจเรื่องความปลอดภัย", result: "คืนทุนไวกว่าที่คาดไว้" },
];
