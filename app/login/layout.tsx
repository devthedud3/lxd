import type { Metadata } from "next";
import { Banner, Footer, Navbar, Status, History } from "../ui/components";

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
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col w-full flex-1 px-4 ">{children}</div>
      <Footer />
    </div>
  );
}
