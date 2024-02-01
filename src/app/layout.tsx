import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppContextProvider from "@/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NBA Stats",
  description:
    "Made for the ones that don't watch basketball but want to lose fantasy leagues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={inter.className}>{children}</body>
      </AppContextProvider>
    </html>
  );
}
