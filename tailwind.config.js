/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const range = require("lodash/range");

const screenSizes = {
    "smartphone-lg": "428px",
    tablet: "640px",
    laptop: "1024px",
    desktop: "1280px",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [path.join(__dirname, "src/**/!(*.d).{ts,js,jsx,tsx}")],
    theme: {
        spacing: {
            px: "1px",
            ...range(1, 800).reduce((acc, i) => {
                acc[i] = `${i}px`;
                return acc;
            }, {}),
        },
        fontSize: {
            xxs: "10px",
            xs: "12px",
            sm: "14px",
            base: "16px",
            lg: "18px",
            xl: "20px",
            "2xl": "24px",
            "3xl": "30px",
            "4xl": "36px",
            "5xl": "48px",
            "6xl": "64px",
            "7xl": "72px",
            "8xl": "80px",
            "9xl": "96px",
        },
        screens: screenSizes,
        maxWidth: screenSizes,
        minWidth: screenSizes,
        colors: {
            transparent: "transparent",
            /* ブランドカラー */
            brand: {
                green: {
                    DEFAULT: "var(--brand-green)",
                    light: "var(--brand-green-light)",
                },
            },
            /* ベースカラー: グレー */
            gray: {
                dark: "var(--gray-dark)",
                DEFAULT: "var(--gray-default)",
                light: "var(--gray-light)",
                bright: "var(--gray-bright)",
            },
            /* ベースカラー: ホワイト */
            white: {
                DEFAULT: "var(--white-default)",
            },
            /* 表現色 */
            expressive: {
                red: "var(--expressive-red)",
            },
        },
    },
    plugins: ["tailwindcss", "postcss-preset-env"],
};
