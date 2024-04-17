import type { Metadata } from "next";
import { Banner, Footer, Navbar, Status } from "../ui/components";
import Breadcrumbs from "../ui/components/breadcrumbs";

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
    <div className="flex flex-col h-fit">
      <div className="md:px-32 ">
        <Breadcrumbs />
        {children}
      </div>
      <Footer />
    </div>
  );
}
