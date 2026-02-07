'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

const savedLanguage = typeof window !== 'undefined' 
    ? localStorage.getItem('i18nextLng') 
    : null;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(
        resourcesToBackend((language: string, namespace: string) =>
            import(`@/locales/${language}/${namespace}.json`)
        )
    )
    .init({
        lng: savedLanguage || 'ar',
        fallbackLng: 'ar',
        supportedLngs: ['en', 'ar'],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
            convertDetectedLanguage: (lng: string) => {
                if (lng === 'en' || lng === 'ar') return lng;
                return 'ar';
            }
        },
        react: {
            useSuspense: false,
        }
    });

export const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
};

export default i18n;

