import type { Metadata } from "next";
import "./globals.css";

// Nota: las fuentes se cargan vía <link> en el <head> en lugar de next/font,
// para que el build no dependa de acceso a fonts.googleapis.com en tiempo de
// compilación. En Vercel/producción esto funciona igual y de forma óptima.

export const metadata: Metadata = {
  metadataBase: new URL("https://criscor.dev"),
  title: "CrisCor — Cristian Corrales | Data Analyst & Business Intelligence",
  description:
    "Portafolio de Cristian Corrales (CrisCor): analista de datos especializado en Business Intelligence, dashboards, automatización y modelado de datos.",
  keywords: [
    "Cristian Corrales",
    "CrisCor",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Automatización",
  ],
  openGraph: {
    title: "CrisCor — Cristian Corrales | Data Analyst",
    description:
      "Business Intelligence, dashboards y automatización de datos con precisión y diseño.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
