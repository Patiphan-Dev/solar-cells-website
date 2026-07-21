import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/blog/ArticleCard";
import { ARTICLES } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "บทความความรู้เรื่องโซล่าเซลล์",
  description: "บทความให้ความรู้เรื่องการขออนุญาตติดตั้ง การเลือกแผงโซล่าเซลล์ และการคำนวณความคุ้มค่า",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <Container>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-500">บทความ</p>
          <h1 className="mt-2 text-4xl font-heading font-bold sm:text-5xl">สาระน่ารู้เรื่องโซล่าเซลล์</h1>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
