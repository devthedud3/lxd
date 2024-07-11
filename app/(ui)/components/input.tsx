"use client";
import React, { useState } from "react";

type InputProps = {
  label?: string;
  name: string;
  value: string;
  type: string;
  onChange: (e: any) => void;
};

export default function Input({ label, name, type, onChange }: InputProps) {
  const [value, setValue] = useState<string>("");
  function handleChange(e: any) {
    setValue(e.target.value);
    onChange(e.target);
  }

  return (
    <div className="flex flex-col text-xs w-full">
      {label && <p className="pb-1 ">{label}</p>}
      <input
        className="border p-2 border-black"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
