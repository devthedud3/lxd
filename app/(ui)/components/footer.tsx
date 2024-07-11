import React from "react";

import Logo from "./logo";
import FooterItems from "./footer-items";

import { BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs";
import { FOOTER_COMPANY, FOOTER_CUSTOMER_SERVICE } from "@/app/lib/constants";
import Button from "./button";

type FooterProps = {
  headline?: string;
  details?: string[];
};

export default function Footer({}: FooterProps) {
  return (
    <div className="space-y-10 md:space-y-0 flex  w-full justify-between bg-stone-100 p-10 flex-row flex-wrap">
      <div className="flex h-fit w-full md:w-fit md:h-full w-32 justify-between flex-col">
        <Logo size={200} />
        <p className="text-xs py-4">Fashion Fusion Wear Your Masterpiece.</p>
        <div className="flex space-x-4 ">
          <BsInstagram />
          <BsTwitterX />
          <BsTiktok />
        </div>
      </div>
      <FooterItems headline="Company" details={FOOTER_COMPANY} />
      <FooterItems
        headline="Customer Service"
        details={FOOTER_CUSTOMER_SERVICE}
      />
      <div className="flex h-fit w-full md:w-fit md:h-full flex-col">
        <h1 className="font-semibold mb-4">STAY NOTIFIED</h1>
        <p className="text-xs mb-10">Fashion Fusion Wear Your Masterpiece.</p>
        <Button name="JOIN THE LIST" />
      </div>
    </div>
  );
}
