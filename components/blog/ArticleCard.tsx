import Link from "next/link";
import type { Article } from "@/types/business";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="block overflow-hidden rounded-lg border border-slate-200 hover:border-amber-500">
      <div className="flex aspect-video items-center justify-center bg-navy-900/5 text-xs text-slate-400">
        ภาพประกอบบทความ
      </div>
      <div className="p-5">
        <p className="text-xs text-slate-400">
          {new Date(article.publishedAt).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}
          {" · อ่าน "}
          {article.readMinutes} นาที
        </p>
        <h3 className="mt-2 font-heading font-semibold text-navy-950">{article.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{article.excerpt}</p>
      </div>
    </Link>
  );
}
