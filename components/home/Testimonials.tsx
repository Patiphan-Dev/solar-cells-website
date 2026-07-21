import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/content/portfolio";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionHeading eyebrow="รีวิวจากลูกค้า" title="เสียงจากลูกค้าที่ติดตั้งไปแล้ว" align="center" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-navy-900">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4 text-sm">
                <span className="font-heading font-semibold text-navy-950">{testimonial.name}</span>
                <span className="text-slate-500"> · {testimonial.role}</span>
              </footer>
              <p className="mt-1 text-sm font-medium text-amber-600">{testimonial.result}</p>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
