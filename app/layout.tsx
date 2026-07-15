import type { Metadata, Viewport } from "next";
import { Italiana, Fraunces, Archivo } from "next/font/google";
import "./globals.css";
import { JourneyProvider } from "@/lib/store";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Verstelle — Het begin van de studio",
  description:
    "Een reis door de studio die we samen aan het bouwen zijn. Interior Architecture & Property Transformation.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#efeae3",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${italiana.variable} ${fraunces.variable} ${archivo.variable}`}>
      <body>
        <JourneyProvider>{children}</JourneyProvider>
      </body>
    </html>
  );
}
