import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { PORTFOLIO_PROJECTS } from "@/lib/content/portfolio";

export const metadata: Metadata = {
  title: "ผลงานติดตั้งโซล่าเซลล์ | Case Study",
  description: "ตัวอย่างผลงานติดตั้งโซล่าเซลล์บ้านพักอาศัย โรงงาน ออฟฟิศ และฟาร์มเกษตร",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <Container>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-500">ผลงานของเรา</p>
          <h1 className="mt-2 text-4xl font-heading font-bold sm:text-5xl">งานติดตั้งที่ผ่านมา</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            รวมผลงานติดตั้งโซล่าเซลล์จริงในหลากหลายประเภท ตั้งแต่บ้านพักอาศัยไปจนถึงโรงงานอุตสาหกรรม
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
