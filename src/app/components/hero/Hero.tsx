import React from "react";
import Image from "next/image";
import Container from "../container/Container";
import { ButtonArrow, RightwardArrow } from "@/app/util/svg";

const Hero = () => {
  return (
    <>
      <div className="inset-0 absolute w-full max-h-[690px] min-h-[690px] overflow-hidden">
        <Image
          src="/mistral-background.webp"
          alt="image background"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <Container className="container relative z-10 mx-auto mt-[40px] flex max-w-[1057px] flex-col items-center justify-center gap-y-12 text-center">
        <h1 className="text-6xl md:text-8xl animate-fadeInUp text-white">
          <p>Frontier AI. In Your Hands.</p>
        </h1>

        <div className="text-2xl md:text-2xl-md text-white">
          <p>Configurable AI for all builders.</p>
        </div>

        <div className="relative flex w-full max-w-[539px] items-center justify-center">
          <div className="flex h-[50px] w-full items-center gap-2 bg-background p-2 pl-4 pr-3 shadow">
            <input
              id="message"
              placeholder="Talk to le Chat"
              className="w-full pl-2 grow text-base text-foreground placeholder:text-muted-foreground placeholder:opacity-65 focus:outline-none md:text-sm"
              type="text"
              name="message"
            />
            <button className="rounded-none bg-primary hover:cursor-pointer h-7 w-7 flex justify-center items-center">
              <RightwardArrow className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <div className="min-w-full md:min-w-min">
            <button className="inline-flex items-center gap-4 whitespace-nowrap rounded-md px-0 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-x-4 p-2 bg-transparent hover:bg-transparent border-0 group h-[44px] min-w-full justify-between text-white drop-shadow border-white hover:text-white">
              Enterprise deployments
              <div className="relative flex size-6 items-center justify-center">
                <div className="size-3 flex object-contain items-center justify-center text-foreground group-hover:text-primary text-black">
                  <ButtonArrow />
                </div>
              </div>
            </button>
            <hr className="border-t border-white" />
          </div>

          <div className="min-w-full md:min-w-min">
            <button className="inline-flex items-center gap-4 whitespace-nowrap rounded-md px-0 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-x-4 p-2 bg-transparent hover:bg-transparent dark:hover:text-mistral-orange-bright border-0 group h-[44px] min-w-full justify-between text-white drop-shadow border-white hover:text-white">
              APIs on la Platforme
              <div className="relative flex size-6 items-center justify-center">
                <div className="size-3 flex object-contain items-center justify-center text-foreground group-hover:text-primary text-black">
                  <ButtonArrow />
                </div>
              </div>
            </button>
            <hr className="border-t border-white" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
