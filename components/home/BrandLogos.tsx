import Container from "@/components/ui/Container";
import { BRAND_LOGOS_USED } from "@/lib/constants";

export default function BrandLogos() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-10">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500">แบรนด์อุปกรณ์ที่เราใช้และจำหน่าย</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BRAND_LOGOS_USED.map((brand) => (
            <span key={brand} className="font-heading text-lg font-semibold text-navy-900/70">
              {brand}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
