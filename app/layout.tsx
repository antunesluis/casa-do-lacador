import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
  ),
  title: "Casa do Laçador | Artigos gaúchos em Tenente Portela",
  description:
    "Pilchas, botas e vestimenta tradicional gaúcha em Tenente Portela, RS. Conheça a Casa do Laçador e fale conosco pelo WhatsApp.",
  openGraph: {
    title: "Casa do Laçador",
    description: "A tradição gaúcha para vestir e viver. Tenente Portela, RS.",
    locale: "pt_BR",
    type: "website",
    images: ["/images/campo-e-tradicao.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
