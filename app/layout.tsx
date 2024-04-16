import type { Metadata } from "next";
import { Banner, Navbar, Status } from "./ui/components";
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
        className={`${poppins.className} flex flex-col h-screen items-center`}
        suppressHydrationWarning
      >
        <Status />
        <Banner show />
        <Suspense fallback={<div>...Loading</div>} />
        <div className="w-full mt-10 px-10 pb-1 border-b">
          <Navbar />
        </div>
        <main
          className={`flex flex-col p-2 md:px-32 flex-wrap  justify-center items-center`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
