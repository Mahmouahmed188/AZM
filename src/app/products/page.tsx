"use client";

import React, { useState, useEffect } from 'react';
import SkeletonCard from '@/shared/components/common/SkeletonCard';

export default function ProductsPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-[70vh] items-center p-24 gap-12">
            <h1 className="text-4xl font-tajawal font-bold text-white">منتجاتنا</h1>

            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            ) : (
                <div className="text-white text-xl animate-in fade-in duration-700">
                    تم تحميل المنتجات بنجاح!
                </div>
            )}
        </div>
    );
}
