import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Mukta } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const body = Mukta({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const title = "KamaOTT | Coming Soon";
const description =
  "KamaOTT jald aa raha hai. Web series, films aur originals, sab ek jagah. Mobile app bhi aa raha hai.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamaott.com"),
  title: { default: title, template: "%s | KamaOTT" },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "KamaOTT",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#12060a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
