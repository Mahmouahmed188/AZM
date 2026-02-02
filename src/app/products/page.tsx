"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SkeletonCard from '@/shared/components/common/SkeletonCard';
import NavigationTabs from '@/shared/components/ui/NavigationTabs';

// Mock product data
const mockProducts = [
    {
        id: 1,
        title: "منصة التداول المالي",
        description: "منصة متقدمة للتداول في الأسواق المالية مع واجهة سهلة الاستخدام وأدوات تحليل احترافية لمساعدتك على اتخاذ قرارات استثمارية smarter.",
        logo: "/api/placeholder/60/60",
        image: "/api/placeholder/600/400",
        category: "financial",
        link: "#",
        stats: [
            { value: "+1,383", label: "مستخدم نشط" },
            { value: "+348M", label: "حجم التداول" },
            { value: "+24/7", label: "دعم فني" }
        ]
    },

];

const categories = [
    { id: "all", label: "كل المنتجات" },
    { id: "financial", label: "القطاعات المالية" },
    { id: "medical", label: "القطاعات الطبية" },
    { id: "commercial", label: "القطاعات التجارية" }
];

interface ProductCardProps {
    product: typeof mockProducts[0];
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>

            <div className="relative bg-gradient-to-br from-slate-900/90 to-black/90 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">

                {/* Statistics Bar */}
                <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap justify-between gap-4">
                        {product.stats.map((stat, index) => (
                            <div key={index} className="text-center">

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ProductsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState(mockProducts);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Filter products based on active category
        if (activeCategory === "all") {
            setFilteredProducts(mockProducts);
        } else {
            setFilteredProducts(mockProducts.filter(product => product.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center px-6 py-16 lg:py-24">
                {/* Header */}
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
                    منتجاتنا
                </h1>

                {/* Navigation Tabs */}
                <div className="w-full mb-12">
                    <NavigationTabs
                        tabs={categories}
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
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-gray-400 text-xl">لا توجد منتجات في هذه الفئة</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
