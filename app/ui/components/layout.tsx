import React, { Suspense } from "react";
import Navbar from "./navbar";
import Banner from "./banner";

type LayoutInterface = {
  children: React.ReactNode;
  padded?: boolean;
};
export default function Layout({ children, padded }: LayoutInterface) {
  return (
    <>
      <Banner show />
      <div className="flex flex-col h-full w-full justify-between items-center">
        <div className="w-full mt-10 px-10 pb-1 border-b">
          <Navbar />
        </div>
        <Suspense fallback={<div>...Loading</div>} />
        <main
          className={`flex flex-col ${padded ? "px-32" : "w-full"} flex-wrap`}
        >
          {children}
        </main>
      </div>
    </>
  );
}
