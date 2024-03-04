import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PackageJson from "../package.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suika World",
  description: "Suika World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        v{PackageJson.version}
        {children}
      </body>
    </html>
  );
}
