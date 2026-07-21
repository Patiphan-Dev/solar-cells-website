import type { Product, ProductCategory } from "@/types/business";

export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  panel: "แผงโซล่าเซลล์",
  inverter: "อินเวอร์เตอร์",
  battery: "แบตเตอรี่",
  mounting: "อุปกรณ์จับยึด & สายไฟ",
  kit: "ชุดโซล่าเซลล์สำเร็จรูป",
};

export const PRODUCTS: Product[] = [
  { id: "p1", category: "panel", name: "แผงโซล่าเซลล์ Mono 550W", brand: "Jinko Solar", spec: "Mono-crystalline, ประสิทธิภาพ 21.3%", priceLabel: "ราคาส่ง สอบถาม" },
  { id: "p2", category: "panel", name: "แผงโซล่าเซลล์ N-Type 585W", brand: "Longi", spec: "N-Type TOPCon, เสื่อมสภาพต่ำ", priceLabel: "ราคาส่ง สอบถาม" },
  { id: "p3", category: "inverter", name: "อินเวอร์เตอร์ On-Grid 5kW", brand: "Huawei", spec: "SUN2000 series, WiFi Monitoring", priceLabel: "ราคาส่ง สอบถาม" },
  { id: "p4", category: "inverter", name: "อินเวอร์เตอร์ Hybrid 8kW", brand: "Deye", spec: "รองรับต่อแบตเตอรี่ สำรองไฟได้", priceLabel: "ราคาส่ง สอบถาม" },
  { id: "p5", category: "battery", name: "แบตเตอรี่ลิเธียม 5kWh", brand: "Deye", spec: "LiFePO4, รอบชาร์จยาวนาน", priceLabel: "ราคาส่ง สอบถาม" },
  { id: "p6", category: "mounting", name: "ชุดจับยึดแผงหลังคาเมทัลชีท", brand: "มาตรฐานสากล", spec: "อลูมิเนียมกันสนิม พร้อมสายไฟ DC", priceLabel: "ราคาส่ง สอบถาม" },
  { id: "p7", category: "kit", name: "ชุดโซล่าเซลล์สำเร็จรูป 3kW", brand: "ชุดรวม", spec: "แผง+อินเวอร์เตอร์+อุปกรณ์ยึด ครบชุด", priceLabel: "ราคาส่ง สอบถาม" },
  { id: "p8", category: "kit", name: "ชุดปั๊มน้ำโซล่าเซลล์", brand: "ชุดรวม", spec: "เหมาะกับพื้นที่เกษตร ไม่ต้องพึ่งไฟบ้าน", priceLabel: "ราคาส่ง สอบถาม" },
];
