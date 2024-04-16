import React from "react";

import { CardSlider } from "@/app/ui/components/card-slider";

type PageProps = {
  id: string;
};

export default function Mens(props: PageProps) {
  const {
    //@ts-ignore
    searchParams: { id },
  } = props;

  console.log(id);
  return <CardSlider />;
}
