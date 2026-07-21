export const BUSINESS = {
  name: "ตัวอย่าง โซล่าร์ เอ็นจิเนียริ่ง (แก้ทีหลัง)",
  shortName: "ตัวอย่างโซล่าร์",
  tagline: "รับติดตั้งโซล่าเซลล์ครบวงจร และจำหน่ายอุปกรณ์โซล่าเซลล์คุณภาพ",
  phone: "08X-XXX-XXXX (ตัวอย่าง แก้ทีหลัง)",
  phoneHref: "tel:080000000",
  lineId: "@example-solar (ตัวอย่าง แก้ทีหลัง)",
  lineHref: "https://line.me/R/ti/p/@example-solar",
  email: "contact@example-solar.co (ตัวอย่าง แก้ทีหลัง)",
  address: "ที่อยู่ตัวอย่าง เลขที่ 000 ถนนตัวอย่าง แขวง/ตำบล เขต/อำเภอ จังหวัด 00000 (แก้ทีหลัง)",
  mapsQuery: "solar+cell+company+bangkok",
  facebookHref: "#",
  serviceAreas: ["กรุงเทพมหานคร", "สมุทรปราการ", "นนทบุรี", "ปทุมธานี"],
} as const;

export const BRAND_LOGOS_USED = [
  "Jinko Solar",
  "Longi",
  "Trina Solar",
  "Huawei",
  "Deye",
  "Sungrow",
];

export const NAV_LINKS = [
  { href: "/", label: "หน้าแรก" },
  { href: "/services", label: "บริการรับติดตั้ง" },
  { href: "/shop", label: "ร้านค้า/อุปกรณ์" },
  { href: "/portfolio", label: "ผลงานของเรา" },
  { href: "/blog", label: "บทความ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อเรา" },
] as const;
