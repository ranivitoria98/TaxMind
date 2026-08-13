import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxMind | InteligÃªncia tributÃ¡ria",
  description: "DecisÃµes tributÃ¡rias mais claras, rÃ¡pidas e confiÃ¡veis.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

