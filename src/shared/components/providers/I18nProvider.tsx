'use client';

import { useDirection } from '@/shared/hooks/useDirection';
import '@/lib/i18n';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    useDirection();
    return <>{children}</>;
}
