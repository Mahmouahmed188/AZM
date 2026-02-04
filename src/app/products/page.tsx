"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/shared/hooks/useDirection";
import NavigationTabs from "@/shared/components/ui/NavigationTabs";
import Skeleton from "@/shared/components/common/Skeleton";

const productImages = [
  "/cards/Card 1.png",
  "/cards/Card 3.png",
  "/cards/Card 4.png",
];

// Mock product data
const mockProducts = [
  {
    id: 1,
    category: "financial",
  },
];

// Categories with translation keys
const categories = [
  { id: "all", labelKey: "products.categories.all" },
  { id: "financial", labelKey: "products.categories.financial" },
  { id: "medical", labelKey: "products.categories.medical" },
  { id: "commercial", labelKey: "products.categories.commercial" },
];

const ProductCard: React.FC = () => {
  return (
    <div className="relative group">
      <div className="mb-8">
        <div className="flex flex-col gap-6">
          {productImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Product card ${index + 1}`}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 100vw"
              className="w-full h-auto"
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  const { t } = useTranslation();
  const { dir, mounted } = useDirection();
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  // Convert categories with translation keys to format expected by NavigationTabs
  const tabsWithLabels = useMemo(
    () =>
      categories.map((category) => ({
        id: category.id,
        label: t(category.labelKey, category.id),
      })),
    [t],
  );

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return mockProducts;
    } else {
      return mockProducts.filter(
        (product) => product.category === activeCategory,
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main
      dir={dir}
      className="min-h-screen  relative overflow-hidden"
      style={{
        backgroundImage: 'url("/productsBg.png")',
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 px-6 py-16 lg:py-24">
        {/* Header */}
        <h1 className="relative text-4xl lg:text-5xl font-bold text-white my-12 px-26">
          {t("products.title", "منتجاتنا")}
        </h1>

        {/* Navigation Tabs */}
        <div className="w-full mb-12">
          <NavigationTabs
            tabs={tabsWithLabels}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
          />
        </div>
        {/* Products Grid */}
        <div className="relative flex flex-col items-center">
          {isLoading ? (
            <Skeleton height={700} borderRadius="1rem" className="max-w-6xl" />
          ) : (
            <div className="relative grid grid-cols-1 gap-8 w-full max-w-6xl animate-in fade-in duration-700">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} />
                ))
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-xl">
                    {t("products.noProducts", "لا توجد منتجات في هذه الفئة")}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
