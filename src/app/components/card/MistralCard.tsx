import React from "react";
import Image from "next/image";
import { Mistral } from "@/app/util/svg";
import AppleStore from "../button/AppleStore";
import GooglePlayStore from "../button/GooglePlayStore";
const MistralCard = () => {
  return (
    <div className="w-full bg-mistral-beige-deep md:flex">
      <div className="relative flex w-full shrink-0 flex-col items-center justify-center md:size-[125px]">
        <div
          style={{ background: "hsla(51, 100%, 50%, 1)" }}
          className="h-[25px] w-full"
        />
        <div
          style={{ background: "hsla(41, 100%, 50%, 1)" }}
          className="h-[25px] w-full"
        />
        <div
          style={{ background: "hsla(30, 100%, 51%, 1)" }}
          className="h-[25px] w-full"
        />
        <div
          style={{ background: "hsla(17, 96%, 52%, 1)" }}
          className="h-[25px] w-full"
        />
        <div
          style={{ background: "hsla(1, 100%, 44%, 1)" }}
          className="h-[25px] w-full"
        />
        <Mistral className="absolute text-background h-16 w-16" />
      </div>
      <div className="w-full items-center justify-between gap-4 p-6 md:flex">
        <h2 className="text-lg">
          Le Chat: Your AI assistant for life and work.
        </h2>
        <div className="flex items-center justify-center gap-4 md:mt-0 md:justify-end mt-10">
          <AppleStore />
          <GooglePlayStore />
        </div>
      </div>
      <div className="relative hidden w-1/5 md:block">
        <Image
          src="https://cms.mistral.ai/assets/920e56ee-25c5-439d-bd31-fbdf5c92c87f"
          alt="LeChat - Mistral"
          className="absolute -bottom-10 right-0 size-full shrink-0 object-contain"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
};

export default MistralCard;
