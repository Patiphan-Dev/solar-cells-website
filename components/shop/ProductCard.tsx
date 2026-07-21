import type { Product } from "@/types/business";
import { PRODUCT_CATEGORY_LABELS } from "@/lib/content/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200">
      <div className="flex aspect-square items-center justify-center bg-navy-900/5 text-xs text-slate-400">
        ภาพสินค้าตัวอย่าง
      </div>
      <div className="p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-amber-600">
          {PRODUCT_CATEGORY_LABELS[product.category]}
        </span>
        <h3 className="mt-1 font-heading font-semibold text-navy-950">{product.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{product.brand}</p>
        <p className="mt-1 text-xs text-slate-500">{product.spec}</p>
        <p className="mt-3 font-heading font-semibold text-navy-900">{product.priceLabel}</p>
      </div>
    </article>
  );
}
