export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    PRODUCTS: '/products',
    SERVICES: '/services',
    INVESTORS: '/investors',
    CAREERS: '/careers',
    CONTACT: '/contact',
} as const;

export const NAV_LINKS = [
    { label: 'الرئيسية', href: ROUTES.HOME },
    { label: 'من نحن', href: ROUTES.ABOUT },
    { label: 'منتجاتنا', href: ROUTES.PRODUCTS },
    { label: 'خدماتنا', href: ROUTES.SERVICES },
    { label: 'المستثمرين', href: ROUTES.INVESTORS },
    { label: 'الوظائف', href: ROUTES.CAREERS },
    { label: 'تواصل معنا', href: ROUTES.CONTACT },
];
