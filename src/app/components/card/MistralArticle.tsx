import { RightwardArrow } from "@/app/util/svg";
import React from "react";

const MistralArticle = () => {
  return (
    <div
      className="px-6 py-8 md:px-12 md:py-8"
      style={{ background: "rgb(255, 240, 195)" }}
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <header className="flex max-w-[457px] flex-col gap-y-[51px]">
          <span className="text-lg">Announcements</span>
          <h4 className="text-4xl relative">
            <p>
              Announcing the all new le Chat: Your AI assistant for life and
              work.
              <button className="gap-2 whitespace-nowrap rounded-md px-0 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 relative mx-3 inline-flex aspect-square size-[27px] items-center justify-center">
                <div className="flex size-4 items-center justify-center object-contain p-1 text-background">
                  <RightwardArrow />
                </div>
              </button>
            </p>
          </h4>
        </header>
        <div>Feb 6, 2025</div>
      </div>
    </div>
  );
};

export default MistralArticle;
