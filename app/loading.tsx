import React from "react";

export default function Loading({ show }: { show?: boolean }) {
  return (
    <main className="flex h-screen flex-col m-auto justify-center items-center">
      <h2 className="text-primary text-xl">Loading</h2>
      <p>Hopefully not too long</p>
    </main>
  );
}
