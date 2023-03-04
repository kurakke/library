/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const range = require("lodash/range");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.join(__dirname, "src/**/!(*.d).{ts,js,jsx,tsx}")],
  theme: {
    spacing: {
      px: '1px',
      ...range(1, 800).reduce((acc, i) => {
        acc[i] = `${i}px`;
        return acc;
      }, {}),
    },
    fontSize: {
      none: '0px',
      xs: '10px',
      sm: '12px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '28px',
      '5xl': '32px',
      '6xl': '36px',
      '7xl': '42px',
      '8xl': '48px',
      '9xl': '54px',
      '10xl': '64px',
      '11xl': '72px',
      '12xl': '80px',
    },
    colors: {
      transparent: "transparent",
      /* ブランドカラー */
      brand: {
        green: {
          DEFAULT: "var(--brand-green)",
          light: "var(--brand-green-light)",
        }
      },
      /* ベースカラー: グレー */
      gray: {
        dark: "var(--gray-dark)",
        DEFAULT: "var(--gray-default)",
        light: "var(--gray-light)",
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
