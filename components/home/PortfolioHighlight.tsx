import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { PORTFOLIO_PROJECTS } from "@/lib/content/portfolio";

export default function PortfolioHighlight() {
  const featured = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="ผลงานของเรา" title="งานติดตั้งที่ผ่านมา" />
          <Button href="/portfolio" variant="ghost">ดูผลงานทั้งหมด</Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
