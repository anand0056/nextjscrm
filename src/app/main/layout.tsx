import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import router from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to CRM",
  description: "Tools to manage work schedule",
};

export default function mainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {const { page } = router.query;

// components/MainPageLayout.tsx

  return (
    <html lang="en">
      {/* Main layout structure */}
      <body>{children}</body>
    </html>
  );
};

