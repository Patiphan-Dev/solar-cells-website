"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS, PRODUCT_CATEGORY_LABELS } from "@/lib/content/products";
import type { ProductCategory } from "@/types/business";

type FilterValue = ProductCategory | "all";

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState<FilterValue>("all");

  const categories = Object.keys(PRODUCT_CATEGORY_LABELS) as ProductCategory[];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS;
    return PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterButton label="ทั้งหมด" active={activeCategory === "all"} onClick={() => setActiveCategory("all")} />
        {categories.map((category) => (
          <FilterButton
            key={category}
            label={PRODUCT_CATEGORY_LABELS[category]}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? "bg-navy-950 text-white" : "bg-slate-100 text-navy-900 hover:bg-slate-200"
      }`}
    >
      {label}
    </button>
  );
}
