"use client";
import React, { useState } from "react";
import Input from "./input";
import Button from "./button";

type FormProps = {
  categories?: string[];
};

export default function Form({ categories }: FormProps) {
  const [form, setForm] = useState<any>(
    categories?.reduce((acc, key) => {
      //@ts-ignore
      acc[key.toLocaleLowerCase()] = "";
      return acc;
    }, {})
  );

  function handleUpdateFormData(e: any) {
    const { name, value } = e;
    setForm((prev: any) => ({
      ...prev,
      name: (prev[`${name}`] = value),
    }));
  }

  function getType(s: string) {
    if (s.includes("password")) return "password";
    if (s.includes("email")) return "email";
    return "text";
  }

  return (
    <div className="flex flex-col items-center justify-center h-fit w-full space-y-4">
      {categories?.map((name: string, key: number) => {
        const type = getType(name.toLocaleLowerCase());
        return (
          <Input
            key={key}
            label={name.split("_").join(" ")}
            name="full"
            type={type}
            value={form.full}
            onChange={handleUpdateFormData}
          />
        );
      })}
      <div className="flex space-x-2 w-full pt-6">
        <Button
          name="Sign Up"
          primary
          additionalTWProps="w-full items-center justify-center bg-black text-white"
        />
      </div>
    </div>
  );
}
