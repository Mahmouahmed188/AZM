import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function useDirection() {
    const { i18n } = useTranslation();
    const [dir, setDir] = useState<'rtl' | 'ltr'>(i18n.dir());

    useEffect(() => {
        const currentDir = i18n.dir(i18n.language);
        setDir(currentDir);
        document.documentElement.dir = currentDir;
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return { dir, isRTL: dir === 'rtl', isLTR: dir === 'ltr' };
}
