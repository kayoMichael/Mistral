"use client";
import React from "react";
import InfiniteCarousel from "./InfiniteCarousel";
import { allLogos } from "@/app/util/link";
import { Mistral } from "@/app/util/svg";

interface Props {
  type?: boolean;
}

const CourselBridge = ({ type }: Props) => {
  const sliderComponent = () => (
    <h1 className="text-5xl mt-10 flex gap-10 items-center justify-center">
      One platform. Many uses. For all humans. <Mistral className="h-16 w-16" />
    </h1>
  );
  return (
    <div className="w-full">
      <InfiniteCarousel
        items={type ? Array(5).fill(sliderComponent) : allLogos}
        speed={30}
      />
    </div>
  );
};

export default CourselBridge;
