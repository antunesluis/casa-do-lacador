import type { Metadata } from "next";
import { store } from "../lib/store";
import "./globals.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(
    productionHost ? `https://${productionHost}` : "http://localhost:3000",
  ),
  title: `${store.name} | Artigos gaúchos em Tenente Portela`,
  description:
    "Pilchas, botas e vestimenta tradicional gaúcha em Tenente Portela, RS. Conheça a Casa do Laçador e fale conosco pelo WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    title: store.name,
    description: "A tradição gaúcha para vestir e viver. Tenente Portela, RS.",
    locale: "pt_BR",
    type: "website",
    images: [{
      url: "/images/pilcha-bordo.jpg",
      width: 900,
      height: 900,
      alt: "Pilcha tradicional em tons de bordô da Casa do Laçador",
    }],
  },
  twitter: { card: "summary_large_image", images: ["/images/pilcha-bordo.jpg"] },
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
