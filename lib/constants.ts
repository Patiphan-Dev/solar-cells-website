export const BUSINESS = {
  name: "บริษัท กรีนเรย์ โซล่าร์ เอ็นจิเนียริ่ง จำกัด",
  shortName: "กรีนเรย์ โซล่าร์",
  tagline: "รับติดตั้งโซล่าเซลล์ครบวงจร และจำหน่ายอุปกรณ์โซล่าเซลล์คุณภาพ",
  phone: "081-234-5678",
  phoneHref: "tel:0812345678",
  lineId: "@greenraysolar",
  lineHref: "https://line.me/R/ti/p/@greenraysolar",
  email: "info@greenraysolar.co.th",
  address: "123/45 ถนนบางนา-ตราด แขวงบางนา เขตบางนา กรุงเทพมหานคร 10260",
  mapsQuery: "greenray+solar+bangna+bangkok",
  facebookHref: "https://facebook.com/greenraysolar",
  serviceAreas: ["กรุงเทพมหานคร", "สมุทรปราการ", "นนทบุรี", "ปทุมธานี"],
} as const;

export const CREDIT = {
  label: "พัฒนาเว็บไซต์โดย",
  name: "Patiphan Dev",
  href: "https://github.com/Patiphan-Dev",
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
