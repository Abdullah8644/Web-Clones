import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#5162FF",
        secondary:"#F7F7F7",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        p:"40px 40px 40px 40px"
      },
    },
  },
  plugins: [],
} satisfies Config;
