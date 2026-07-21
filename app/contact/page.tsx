import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LeadForm from "@/components/contact/LeadForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description: "ช่องทางติดต่อทีมงานผ่าน Line โทรศัพท์ หรือส่งข้อมูลขอใบเสนอราคา",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <Container>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-500">ติดต่อเรา</p>
          <h1 className="mt-2 text-4xl font-heading font-bold sm:text-5xl">พร้อมให้คำปรึกษาฟรี</h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactCard label="โทรศัพท์" value={BUSINESS.phone} href={BUSINESS.phoneHref} cta="โทรเลย" />
            <ContactCard label="Line" value={BUSINESS.lineId} href={BUSINESS.lineHref} cta="แชท Line" external />
            <ContactCard label="อีเมล" value={BUSINESS.email} href={`mailto:${BUSINESS.email.split(" ")[0]}`} cta="ส่งอีเมล" />
            <div className="rounded-lg border border-slate-200 p-5">
              <p className="text-sm font-medium text-navy-900">ที่อยู่</p>
              <p className="mt-1 text-sm text-slate-600">{BUSINESS.address}</p>
            </div>
          </div>

          <LeadForm />
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  label,
  value,
  href,
  cta,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  cta: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 p-5">
      <div>
        <p className="text-sm font-medium text-navy-900">{label}</p>
        <p className="mt-1 text-sm text-slate-600">{value}</p>
      </div>
      <Button href={href} external={external} variant="secondary" className="!px-4 !py-2 text-xs">
        {cta}
      </Button>
    </div>
  );
}
