import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Café de Especialidad en América Latina | Tienda Online de Café en Colombia",
  description: "Compra café de alta calidad proveniente de América Latina, África y Europa. Encuentra cápsulas, granos y café molido en nuestra tienda online con sede en Colombia.",
  keywords: [
    "café",
    "café de Colombia",
    "café de América Latina",
    "cápsulas de café",
    "café en grano",
    "café molido",
    "café premium",
    "tienda de café online",
    "comprar café",
    "café especialidad",
    "café orgánico"
  ],
  openGraph: {
    title: "Tienda de Café en Colombia - Cápsulas, Granos y Café Molido",
    description: "Explora nuestra selección de cafés de alta calidad provenientes de diferentes regiones del mundo, desde Colombia hasta Etiopía. Elige entre cápsulas, granos y café molido.",
    url: "https://www.tiendadecafe.com",  // Coloca aquí tu URL real
    images: [
      {
        url: "/images/coffee-banner.jpg",  // Imagen destacada para compartir
        width: 1200,
        height: 630,
        alt: "Café de alta calidad",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Café de Especialidad en América Latina | Tienda Online",
    description: "Compra los mejores cafés de América Latina, África y Europa en nuestra tienda online. Disfruta de una experiencia de café premium desde Colombia.",
    images: [
      {
        url: "/images/coffee-banner.jpg",  // La misma imagen destacada
        alt: "Café premium de Colombia",
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >        <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
