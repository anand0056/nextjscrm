import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import { useRouter } from "next/router"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to CRM",
  description: "Tools to manage work schedule",
};

export default function GhostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
   <div>
      {/* GhostLayout structure */}
      <main>{children}</main>
    </div>
  </>
  );
}
