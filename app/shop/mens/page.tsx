import React from "react";

import { CardSlider } from "@/app/ui/components/card-slider";

type PageProps = {
  searchParams: { id: string };
};

export default function Mens({ searchParams }: PageProps) {
  console.log(searchParams);
  return <CardSlider />;
}
