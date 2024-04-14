import type { Metadata } from "next";
import "./ui/globals.css";
import { poppins } from "./ui/fonts";
import { Layout } from "./ui/components";

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
      <body className={poppins.className} suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
