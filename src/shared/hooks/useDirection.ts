'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function useDirection() {
    const { i18n } = useTranslation();
    // Default to 'rtl' to avoid hydration mismatch, will be corrected on client
    const [dir, setDir] = useState<'rtl' | 'ltr'>('rtl');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            const currentDir = i18n.dir(i18n.language);
            setDir(currentDir);
            document.documentElement.dir = currentDir;
            document.documentElement.lang = i18n.language;
        }
    }, [i18n.language, mounted]);

    // Always return 'rtl' on server/initial mount to avoid hydration mismatch
    return { dir: mounted ? dir : 'rtl', isRTL: dir === 'rtl', isLTR: dir === 'ltr', mounted };
}
