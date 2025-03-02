import React from "react";
import { ButtonArrow } from "@/app/util/svg";

const MistralCareer = () => {
  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-center gap-9 text-center bg-background mt-24">
      <h2 className="heading-2 text-5xl">
        <p>The next chapter of AI is yours.</p>
      </h2>
      <div className="flex flex-col md:flex-row w-full flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <div className="min-w-1/4 md:min-w-min">
          <button className="inline-flex items-center gap-4 whitespace-nowrap rounded-md px-0 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-x-4 p-2 bg-transparent hover:bg-transparent border-0 group h-[44px] min-w-full justify-between drop-shadow text-black hover:text-primary">
            Start Building With Mistral AI
            <div className="relative flex size-6 items-center justify-center">
              <div className="size-3 flex object-contain items-center justify-center text-foreground text-primary">
                <ButtonArrow />
              </div>
            </div>
          </button>
          <hr className="border-t border-black" />
        </div>

        <div className="min-w-1/4 md:min-w-min">
          <button className="inline-flex items-center gap-4 whitespace-nowrap rounded-md px-0 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-x-4 p-2 bg-transparent hover:bg-transparent dark:hover:text-mistral-orange-bright border-0 group h-[44px] min-w-full justify-between text-black drop-shadow hover:text-primary">
            Talk to an expert
            <div className="relative flex size-6 items-center justify-center">
              <div className="size-3 flex object-contain items-center justify-center text-foreground text-primary">
                <ButtonArrow />
              </div>
            </div>
          </button>
          <hr className="border-t border-black" />
        </div>
      </div>
    </div>
  );
};

export default MistralCareer;
