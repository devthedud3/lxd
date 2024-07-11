import type { Metadata } from "next";
import { Banner, Navbar, Status } from "./(ui)/components";

import { poppins } from "./(ui)/fonts";
import "./(ui)/globals.css";

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
        className={`${poppins.className} flex flex-col h-screen items-center container`}
        suppressHydrationWarning
      >
        {/* <Status /> */}
        <Banner show />
        <div className="w-full mt-10 px-10 pb-1 border-b">
          <Navbar />
        </div>
        <main
          className={`flex flex-col p-2 w-full flex-wrap pb-0 justify-center items-center`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
