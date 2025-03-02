import React from "react";
import Image from "next/image";

import { ButtonArrow } from "@/app/util/svg";

const CareerCard = () => {
  return (
    <div className="relative flex h-[483px] w-full flex-col justify-end pb-6 pt-12 md:!px-12">
      <Image
        alt="Careers banner image"
        src="https://cms.mistral.ai/assets/b4d6c9c2-98d4-4510-8b78-7ea7b2ac9fec"
        fill
        sizes="100vw"
        className="size-full object-cover"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
          color: "transparent",
        }}
        priority
      />

      <div className="relative z-10 mb-6 flex flex-wrap items-end justify-between gap-y-8 md:gap-y-12">
        <div className="flex max-w-[438px] flex-col gap-y-8 md:gap-y-10">
          <h3 className="text-3xl font-bold md:text-4xl text-white md:p-0 p-4">
            <p>Build the future of secure, private AI.</p>
          </h3>

          <div className="text-white md:p-0 p-4">
            <p>
              Now seeking: Insatiably curious AI enthusiasts with an
              entrepreneurial spirit.
            </p>
          </div>
        </div>

        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-0 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-[36px] gap-x-2 p-2 pl-4 hover:bg-transparent hover:text-primary dark:hover:text-mistral-orange-bright border-foreground border-0 border-b disabled:opacity-50 disabled:cursor-not-allowed bg-transparent md:p-0"
          style={{ color: "rgb(255, 255, 255)", borderColor: "currentcolor" }}
        >
          View open roles
          <div className="relative flex size-6 items-center justify-center">
            <div className="size-3 flex object-contain items-center justify-center text-primary">
              <ButtonArrow />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CareerCard;
