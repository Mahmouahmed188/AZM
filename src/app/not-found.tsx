import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
            <h1 className="text-9xl font-bold text-white/20">404</h1>
            <h2 className="text-4xl font-tajawal font-bold text-white mt-4">الصفحة غير موجودة</h2>
            <p className="text-white/60 mt-4 max-w-md">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
            <Link
                href="/"
                className="mt-8 px-8 py-3 bg-white text-azm-dark rounded-full font-tajawal font-bold hover:bg-white/90 transition-all"
            >
                العودة للرئيسية
            </Link>
        </div>
    );
}
