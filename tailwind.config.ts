import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                azm: {
                    dark: "#292929",
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
                sans: ["var(--font-rubik)", "sans-serif"],
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
