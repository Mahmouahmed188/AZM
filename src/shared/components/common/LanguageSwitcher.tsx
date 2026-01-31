'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
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
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
            aria-label="Toggle language"
        >
            <Globe className="w-4 h-4" />
            <span>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
        </button>
    );
}
