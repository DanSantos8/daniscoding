import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          900: "#121212", // Fundo Principal
          800: "#1F1F1F", // Fundo Secundário
        },
        gray: {
          400: "#CCCCCC", // Texto Informativo
          300: "#E0E0E0", // Texto Primário
          200: "#B3B3B3", // Texto Secundário
          100: "#A0A0A0", // Texto Secundário Hover
        },
        white: {
          DEFAULT: "#FFFFFF", // Título Principal
        },
        highlight: {
          DEFAULT: "#BB86FC", // Cor de Destaque
          dark: "#9A67EA", // Hover para Links/Textos de Ação
        },
        orange: {
          DEFAULT: "#E1523D",
        },
        action: "#03DAC6", // Cor de Ação
        error: "#CF6679", // Erro
      },
    },
  },
  plugins: [],
}
export default config
