import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata with enhanced properties
export const metadata: Metadata = {
  metadataBase: new URL("https://josephin-sylvere.vercel.app"),
  title: {
    default: "Joséphin Sylvère | Portfolio",
    template: "%s | Joséphin Sylvère",
  },
  description: "Joséphin Sylvère - NodeJs Developer",
  keywords: ["developer", "portfolio", "nextjs", "react", "web development"],
  authors: [{ name: "Joséphin Sylvère" }],
  creator: "Joséphin Sylvère",
  publisher: "Joséphin Sylvère",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://josephin-sylvere.vercel.app",
    title: "Joséphin Sylvère | Portfolio",
    description: "NodeJS Developer",
    siteName: "Joséphin Sylvère Portfolio",
    images: [
      {
        url: "https://josephin-sylvere.vercel.app/images/avatar.png",
        width: 1200,
        height: 630,
        alt: "Joséphin Sylvère Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joséphin Sylvère | Portfolio",
    description: "NodeJS Developer",
    creator: "@sylverejosephin",
    images: ["https://josephin-sylvere.vercel.app/images/avatar.png"],
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
