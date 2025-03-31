/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define os arquivos onde o Tailwind deve aplicar suas classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Inclui arquivos dentro da pasta app
    "./pages/**/*.{js,ts,jsx,tsx}", // Inclui arquivos dentro da pasta pages
    "./components/**/*.{js,ts,jsx,tsx}", // Inclui arquivos dentro da pasta components
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de cores personalizada baseada na imagem fornecida
        fundo: "#ffffff", // Cor de fundo geral
        titulo: "#094067", // Cor para títulos e textos principais
        paragrafo: "#5f6c7b", // Cor para parágrafos e textos secundários
        botao: "#3da9fc", // Cor de fundo para botões
        textoBotao: "#ffffff", // Cor do texto dentro dos botões
        avc: "#094067", // Cor para elementos visuais de AVC
        principal: "#ffffff", // Cor primária principal
        destaque: "#3da9fc", // Cor para elementos de destaque
        secundario: "#90b4ce", // Cor secundária
        terciario: "#ef4565", // Cor terciária
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Define uma fonte padrão moderna
      },
      borderRadius: {
        xl: "12px", // Adiciona um padrão para bordas arredondadas
        "2xl": "16px",
      },
      spacing: {
        18: "4.5rem", // Adiciona espaçamentos personalizados
        22: "5.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Plugin para estilizar formulários
    require("@tailwindcss/typography"), // Plugin para melhorar textos
  ],
};
