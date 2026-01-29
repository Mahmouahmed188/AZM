import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                azm: {
                    dark: "#000814",
                    blue: {
                        900: "#000F26", // Primary dark blue/text
                        800: "#032F70",
                        700: "#0177B7", // Light blue
                        600: "#005CFF",
                    },
                    purple: "#A733CC",
                    green: "#00F1A9",
                    offwhite: "#F5F5F5",
                    grey: "#292929"
                }
            },
            fontFamily: {
                sans: ["var(--font-tajawal)", "sans-serif"],
                tajawal: ["var(--font-tajawal)", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
