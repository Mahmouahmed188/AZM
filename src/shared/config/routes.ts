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
    { label: 'nav.home', href: ROUTES.HOME },
    { label: 'nav.about', href: ROUTES.ABOUT },
    { label: 'nav.products', href: ROUTES.PRODUCTS },
    { label: 'nav.services', href: ROUTES.SERVICES },
    { label: 'nav.investors', href: ROUTES.INVESTORS },
    { label: 'nav.careers', href: ROUTES.CAREERS },
    { label: 'nav.contact', href: ROUTES.CONTACT },
];
