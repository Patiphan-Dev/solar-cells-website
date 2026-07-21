import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/content/packages";

export default function ProcessSteps() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionHeading eyebrow="ขั้นตอนการให้บริการ" title="จากสำรวจหน้างานถึงเปิดใช้งานจริง" align="center" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 font-heading text-lg font-bold text-amber-500">
                {item.step}
              </div>
              <h3 className="mt-4 font-heading font-semibold text-navy-950">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
