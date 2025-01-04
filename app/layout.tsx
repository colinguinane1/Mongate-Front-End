import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "sonner";
import { Krub } from "next/font/google";
import Header from "@/components/ui/header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Express.JS", "MongoDB", "Node.JS"],
  authors: [
    {
      name: "Colin Guinane",
      url: "https://c-g.dev",
    },
  ],
  creator: "colinguinane1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@colinguinane1",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

// Import the Krub font with the desired settings
const krub = Krub({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400", "700"], // Include the font weights you plan to use
  variable: "--font-krub", // Define a custom CSS variable name (optional)
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${krub.variable} bg-background`}>
    
      <SidebarProvider>
        <UserProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <body
              className={`antialiased  transition-colors overflow-x-hidden   duration-300 ${krub.className}`}
            >
            
              <Header />
              <Toaster />
              <div className="overflow-x-hidden"><Analytics/>{children}</div>
            </body>
          </ThemeProvider>
        </UserProvider>
      </SidebarProvider>
    </html>
  );
}
