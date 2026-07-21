import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ARTICLES } from "@/lib/content/articles";
import { BUSINESS } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <article className="py-16">
      <Container className="max-w-3xl">
        <p className="text-sm text-slate-400">
          {new Date(article.publishedAt).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}
          {" · อ่าน "}
          {article.readMinutes} นาที
        </p>
        <h1 className="mt-2 text-3xl font-heading font-bold text-navy-950 sm:text-4xl">{article.title}</h1>

        <div className="mt-8 space-y-4 text-slate-700">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-slate-50 p-6">
          <p className="font-heading font-semibold text-navy-950">สนใจติดตั้งโซล่าเซลล์?</p>
          <p className="mt-1 text-sm text-slate-600">ทีมงานพร้อมให้คำปรึกษาและประเมินราคาฟรี</p>
          <Button href={BUSINESS.lineHref} external variant="primary" className="mt-4">
            ทักไลน์สอบถาม
          </Button>
        </div>
      </Container>
    </article>
  );
}
