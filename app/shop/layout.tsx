import type { Metadata } from "next";
import { Banner, Footer, Navbar, Status, History } from "../(ui)/components";
import Breadcrumbs from "../(ui)/components/button-back";

export const metadata: Metadata = {
  title: "LXD",
  description: "Formerly known as CRWN",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-screen">
      <History />
      <div className="px-4 md:px-32">{children}</div>
      <Footer />
    </div>
  );
}
