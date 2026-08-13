import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxMind | Inteligência tributária",
  description: "Decisões tributárias mais claras, rápidas e confiáveis.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

