import React from "react";

import { CardSlider } from "@/app/ui/components/card-slider";

type Props = {
  id: string;
};

export default function Mens(props: Props) {
  const {
    //@ts-ignore
    searchParams: { id },
  } = props;

  console.log(id);
  return <CardSlider />;
}
