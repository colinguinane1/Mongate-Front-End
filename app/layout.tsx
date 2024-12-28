import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "sonner";
import { Krub } from "next/font/google";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Numby",
  description: "A random number guessing game!",
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
    <html lang="en" className={krub.variable}> {/* Use the variable here */}
      <UserProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <body
            className={`antialiased transition-colors duration-300 ${krub.className}`}
          >
            <Header/>
            <Toaster position="top-center" />
            <div className="">{children}</div>
          </body>
        </ThemeProvider>
      </UserProvider>
    </html>
  );
}
