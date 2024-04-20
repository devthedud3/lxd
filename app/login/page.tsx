import React from "react";
import { Form, Logo } from "../ui/components";
import ImageCard from "../ui/components/image-card";
import Image from "next/image";

type LoginProps = {};

export default function Login({}: LoginProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex justify-between py-4">
        <div className="relative flex h-full w-full rounded-full ">
          <Image
            className="block rounded-lg"
            src="/login/image.png"
            alt=""
            width={1000}
            height={1000}
            priority
            style={{
              width: "auto",
            }}
          />
          <div className="absolute inset-0 h-full w-full flex items-center justify-end">
            <div className="bg-white h-1/2 w-12 rounded-l-full" />
          </div>
        </div>

        <div className="flex h-full w-full  flex-col px-36">
          <div className="flex flex-col">
            <Logo size={10} />
            <p className="text-xs w-full ">Discover your style</p>
          </div>
          <h1 className="text-xl font-semibold w-full ">Create your account</h1>
          <Form
            categories={["Full_Name", "Email", "Password", "Confirm_Password"]}
          />
          <p className="text-xs text-center p-4 w-full ">
            Already have an account?{" "}
            <span className="font-semibold">Login here</span>
          </p>
        </div>
      </div>
    </div>
  );
}
