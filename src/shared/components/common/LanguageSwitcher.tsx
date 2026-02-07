'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        changeLanguage(newLang);
    };

    if (!mounted) {
        return (
            <button
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium opacity-0"
                aria-hidden="true"
            >
                <Globe className="w-4 h-4" />
                <span>AR</span>
            </button>
        );
    }

    return (
        <div onClick={toggleLanguage}
            className="hidden lg:flex items-center justify-center w-20 h-full border-l border-r border-[#7278B8]/16 hover:bg-[#7278B8]/16 transition-colors cursor-pointer"
        >
            <button
                className="text-white font-tajawal text-sm font-medium hover:text-white/80 transition-colors"
                aria-label="Toggle language"
            >
                <span className='cursor-pointer'>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
            </button>
        </div>
    );
}
