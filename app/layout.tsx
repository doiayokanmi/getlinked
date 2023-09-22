import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "./themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "getLinked Tech Hackathon 1.0",
  description: "getLinked Tech Hackathon 1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en">
        <body className={inter.className}> <ThemeProvider>{children}</ThemeProvider></body>
      </html>
   
  );
}
