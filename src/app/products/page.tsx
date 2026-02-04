"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/shared/hooks/useDirection';
import SkeletonCard from '@/shared/components/common/SkeletonCard';
import NavigationTabs from '@/shared/components/ui/NavigationTabs';

// Mock product data with translation keys
const mockProducts = [
    {
        id: 1,
        titleKey: "products.financial.title",
        descriptionKey: "products.financial.description",
        logo: "/api/placeholder/60/60",
        image: "/api/placeholder/600/400",
        category: "financial",
        link: "#",
        stats: [
            { valueKey: "products.financial.stats.activeUsers.value", labelKey: "products.financial.stats.activeUsers.label" },
            { valueKey: "products.financial.stats.tradingVolume.value", labelKey: "products.financial.stats.tradingVolume.label" },
            { valueKey: "products.financial.stats.support.value", labelKey: "products.financial.stats.support.label" }
        ]
    },
];

// Categories with translation keys
const categories = [
    { id: "all", labelKey: "products.categories.all" },
    { id: "financial", labelKey: "products.categories.financial" },
    { id: "medical", labelKey: "products.categories.medical" },
    { id: "commercial", labelKey: "products.categories.commercial" }
];

interface ProductCardProps {
    product: typeof mockProducts[0];
    t: (key: string, fallback?: string) => string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, t }) => {
    return (
        <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>

            <div className="relative bg-gradient-to-br from-slate-900/90 to-black/90 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                {/* Product Content */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {t(product.titleKey, 'Financial Trading Platform')}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        {t(product.descriptionKey, 'Advanced platform for trading in financial markets with an easy-to-use interface and professional analysis tools to help you make smarter investment decisions.')}
                    </p>
                </div>

                {/* Statistics Bar */}
                <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap justify-between gap-4">
                        {product.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-xl font-bold text-white">
                                    {t(stat.valueKey, '+1,383')}
                                </div>
                                <div className="text-sm text-gray-400">
                                    {t(stat.labelKey, 'Active Users')}
                                </div>
                            </div>
                        ))}
                    </div>
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
    const tabsWithLabels = useMemo(() => categories.map(category => ({
        id: category.id,
        label: t(category.labelKey, category.id)
    })), [t]);

    // Filter products based on active category
    const filteredProducts = useMemo(() => {
        if (activeCategory === "all") {
            return mockProducts;
        } else {
            return mockProducts.filter(product => product.category === activeCategory);
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
        <main dir={dir} className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center px-6 py-16 lg:py-24">
                {/* Header */}
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
                    {t('products.title', 'منتجاتنا')}
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
                {isLoading ? (
                    <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8 w-full max-w-6xl animate-in fade-in duration-700">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} t={(key, fallback) => t(key, fallback || '')} />
                            ))
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-gray-400 text-xl">
                                    {t('products.noProducts', 'لا توجد منتجات في هذه الفئة')}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}
