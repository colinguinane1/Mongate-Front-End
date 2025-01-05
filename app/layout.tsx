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
  title: "Mongate - The MERN Stack Template",
  description: "Template for the popular MERN stack",
}

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
