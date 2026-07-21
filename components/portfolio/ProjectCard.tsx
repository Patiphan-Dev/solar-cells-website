import type { PortfolioProject } from "@/types/business";

const TYPE_LABELS: Record<PortfolioProject["type"], string> = {
  residential: "บ้านพักอาศัย",
  factory: "โรงงานอุตสาหกรรม",
  office: "ออฟฟิศ/อาคารพาณิชย์",
  agriculture: "ฟาร์ม/การเกษตร",
};

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200">
      <div className="flex aspect-[16/10] items-center justify-center bg-navy-900/5 text-xs text-slate-400">
        ภาพผลงานตัวอย่าง
      </div>
      <div className="p-5">
        <span className="font-heading text-xs font-semibold uppercase tracking-wide text-amber-600">
          {TYPE_LABELS[project.type]}
        </span>
        <h3 className="mt-1 font-heading font-semibold text-navy-950">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{project.location}</p>
        <p className="mt-3 text-sm text-slate-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded bg-slate-100 px-2 py-1 text-navy-900">{project.systemKw} kW</span>
          <span className="rounded bg-slate-100 px-2 py-1 text-navy-900">ระบบ {project.systemType}</span>
          <span className="rounded bg-amber-500/10 px-2 py-1 font-medium text-amber-600">
            ประหยัด {project.savingsPerMonth}
          </span>
        </div>
      </div>
    </article>
  );
}
