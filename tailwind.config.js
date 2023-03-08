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
