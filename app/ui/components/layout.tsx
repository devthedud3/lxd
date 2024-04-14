import React, { Suspense } from "react";
import Navbar from "./navbar";
import Banner from "./banner";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Banner show />
      <div className="flex flex-col h-full w-full justify-between items-center">
        <div className="w-full mt-10 px-10 pb-1 border-b">
          <Navbar />
        </div>
        <Suspense fallback={<div>...Loading</div>} />
        <main className={`flex flex-col px-32 flex-wrap`}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
