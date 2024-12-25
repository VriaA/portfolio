/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx}"],

    theme: {
        extend: {
            colors: {
                "off-white": "#E8E8E8",
                "dark-gray": "#333333",
                black: "#010101",
            },
            fontFamily: {
                "brown-sugar": ["Brown sugar", "cursive"],
                satoshi: [
                    "Satoshi",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Helvetica Neue",
                    "Arial",
                    "sans-serif",
                ],
            },
            boxShadow: {
                container: "0 4px 4px 2px #22222210",
            },
            backgroundImage: {
                "metallic-gradient":
                    "linear-gradient(90deg, #55555550 0%, #FFFFFF50 49%, #55555550 100%)",
                "metallic-text":
                    "linear-gradient(90deg, #E8E8E8 0%, #666666 100%)",
                "cta-primary":
                    "linear-gradient(90deg, #AEB2FA 0%, #BBB999 100%)",
            },
            gridTemplateRows: {
                form: "repeat(3, auto) 200px",
                "form-md": "repeat(2, auto) 200px",
            },
            keyframes: {
                shine: {
                    "0%": { "background-position": "100%" },
                    "100%": { "background-position": "-100%" },
                },
            },
            animation: {
                shine: "shine 5s linear infinite",
            },
        },
    },
    plugins: [],
};
