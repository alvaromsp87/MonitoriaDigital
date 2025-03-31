// Importa tipos do Next.js para metadados da página
import type { Metadata } from "next";

// Importa fontes Geist Sans e Geist Mono do Google Fonts
import { Geist, Geist_Mono } from "next/font/google";

// Importa Script do Next.js para carregar scripts externos
import Script from "next/script";

// Importa estilos globais
import "./globals.css";

// Configuração da fonte Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans", // Define uma variável CSS para uso no Tailwind ou estilos globais
  subsets: ["latin"], // Carrega apenas caracteres latinos para otimizar performance
});

// Configuração da fonte Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadados da aplicação
export const metadata: Metadata = {
  title: "Monitoria Digital",
  description: "Login no Monitoria Digital",
};

// Componente de layout raiz
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-fundo text-titulo 
          min-h-screen flex flex-col
        `}
      >
        {/* Container principal para garantir responsividade */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-8">
          {children}
        </div>

        {/* Importação do script externo do Jitsi Meet */}
        <Script
          src="https://meet.jit.si/external_api.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
