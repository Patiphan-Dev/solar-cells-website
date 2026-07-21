import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-200">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-4 text-sm text-slate-400">{BUSINESS.tagline}</p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white">เมนู</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 hover:text-amber-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white">พื้นที่ให้บริการ</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {BUSINESS.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white">ติดต่อเรา</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>{BUSINESS.phone}</li>
            <li>{BUSINESS.lineId}</li>
            <li>{BUSINESS.email}</li>
            <li>{BUSINESS.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {BUSINESS.name} — เว็บไซต์ตัวอย่าง ข้อมูลติดต่อและราคาเป็นตัวอย่างเท่านั้น
          </p>
        </Container>
      </div>
    </footer>
  );
}
