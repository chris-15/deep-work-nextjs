import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";
import { TopNav } from "./_components/TopNav";
import { BottomNav } from "./_components/BottomNav";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Deep Work",
  description: "Focus on your work with Deep Work",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNav />
            {children}
            <BottomNav />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
