import React from "react";
import { Form } from "../ui/components";

type LoginProps = {};

export default function Login({}: LoginProps) {
  return (
    <div className="flex h-full items-center">
      <div className="p-4">auth</div>
      <Form />
    </div>
  );
}
