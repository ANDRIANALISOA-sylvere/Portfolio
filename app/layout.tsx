/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

// SEO metadata with enhanced properties
export const metadata: Metadata = {
  metadataBase: new URL("https://josephin-sylvere.vercel.app"),
  title: {
    default: "Joséphin Sylvère | Portfolio",
    template: "%s | Joséphin Sylvère",
  },
  description: "Backend Developer expert in Node.js, Express, NestJS and database systems. Crafting scalable server architectures and high-performance APIs.",
  keywords: ["developer", "portfolio", "nodejs", "web development"],
  authors: [
    { name: "Joséphin Sylvère", url: "https://josephinsylvere.vercel.app" },
  ],
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
    title: "Joséphin Sylvère | Backend Developer",
    description: "Backend Developer expert in Node.js, Express, NestJS and database systems. Crafting scalable server architectures and high-performance APIs.",
    siteName: "Joséphin Sylvère Portfolio",
    images: [
      {
        url: "https://josephin-sylvere.vercel.app/images/header.PNG",
        width: 1200,
        height: 630,
        alt: "Joséphin Sylvère Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joséphin Sylvère | Portfolio",
    description: "Backend Developer expert in Node.js, Express, NestJS and database systems. Crafting scalable server architectures and high-performance APIs.",
    creator: "@sylverejosephin",
    images: ["https://josephin-sylvere.vercel.app/images/mon-avatar.png"],
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

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4XJHBEGF97"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4XJHBEGF97');
            `,
          }}
        />
      </head>
      <body className="relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
