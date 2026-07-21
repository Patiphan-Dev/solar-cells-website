import type { ServicePackage, ProcessStep } from "@/types/business";

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "3kw",
    name: "แพ็กเกจ 3kW",
    kw: 3,
    suitableFor: "บ้านพักอาศัยขนาดเล็ก-กลาง",
    monthlyBillRange: "2,000–3,000 บาท/เดือน",
    priceFrom: 129000,
    panelBrand: "Jinko Solar / Longi",
    inverterBrand: "Deye (On-Grid)",
    warrantyYears: 25,
    highlights: ["ยื่นขออนุญาตการไฟฟ้าให้ฟรี", "ติดตั้งเสร็จใน 1-2 วัน", "รับประกันแผง 25 ปี"],
  },
  {
    id: "5kw",
    name: "แพ็กเกจ 5kW",
    kw: 5,
    suitableFor: "บ้านพักอาศัยขนาดกลาง-ใหญ่",
    monthlyBillRange: "3,500–5,500 บาท/เดือน",
    priceFrom: 199000,
    panelBrand: "Jinko Solar / Trina Solar",
    inverterBrand: "Huawei / Sungrow (On-Grid)",
    warrantyYears: 25,
    highlights: ["ออกแบบระบบเฉพาะบ้าน", "แอปมอนิเตอร์ผลผลิตไฟฟ้า", "บริการล้างแผงปีแรกฟรี"],
  },
  {
    id: "10kw",
    name: "แพ็กเกจ 10kW",
    kw: 10,
    suitableFor: "โรงงาน / ออฟฟิศ / อาคารพาณิชย์",
    monthlyBillRange: "8,000 บาทขึ้นไป/เดือน",
    priceFrom: 349000,
    panelBrand: "Longi / Canadian Solar",
    inverterBrand: "Huawei / Sungrow (Hybrid พร้อมแบตเตอรี่)",
    warrantyYears: 25,
    highlights: ["ทีมวิศวกรควบคุมงาน", "รองรับระบบ Hybrid ต่อแบตเตอรี่ได้", "บริการหลังการขาย 5 ปี"],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: "สำรวจหน้างาน & ออกแบบระบบ", description: "ทีมช่างลงพื้นที่ประเมินหลังคาและออกแบบขนาดระบบให้เหมาะกับค่าไฟจริง" },
  { step: 2, title: "ยื่นขออนุญาตการไฟฟ้า", description: "ดำเนินการยื่นขนานไฟกับ MEA/PEA และ กกพ. ให้ทั้งหมด ลูกค้าไม่ต้องวิ่งเอกสารเอง" },
  { step: 3, title: "ติดตั้งและทดสอบระบบ", description: "ทีมช่างมาตรฐาน ติดตั้งพร้อมทดสอบการทำงานก่อนส่งมอบ" },
  { step: 4, title: "บริการหลังการขาย", description: "ดูแลล้างแผง ตรวจเช็คระบบ และซ่อมบำรุงตามรอบที่กำหนด" },
];
