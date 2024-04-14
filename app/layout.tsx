import type { Metadata } from "next";
import { Banner, Navbar } from "./ui/components";
import { Suspense } from "react";

import { poppins } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "LXD",
  description: "Formerly known as CRWN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col h-screen w-full justify-between items-center`}
        suppressHydrationWarning
      >
        <Banner show />
        <Suspense fallback={<div>...Loading</div>} />
        <div className="w-full mt-10 px-10 pb-1 border-b">
          <Navbar />
        </div>
        <main className={`flex flex-col px-32 flex-wrap h-full`}>
          {children}
        </main>
      </body>
    </html>
  );
}
