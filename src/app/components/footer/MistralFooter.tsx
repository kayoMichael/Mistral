import React from "react";
import Image from "next/image";
import { DownwardArrow, Mistral } from "@/app/util/svg";
import AppleStore from "../button/AppleStore";
import GooglePlayStore from "../button/GooglePlayStore";

const MistralFooter = () => {
  return (
    <footer className="relative mt-5 bg-secondary px-0 bg-mistral-beige-deep">
      <div className="absolute left-1/2 aspect-square size-[212px] -translate-x-1/2 translate-y-[-44%]">
        <Image
          height={60}
          width={60}
          alt="LeChat - Mistral"
          className="size-full object-contain pt-2"
          src="https://cms.mistral.ai/assets/920e56ee-25c5-439d-bd31-fbdf5c92c87f"
        />
      </div>

      <div
        style={{ background: "rgb(255, 240, 194)" }}
        className="h-[50px] w-full"
      ></div>
      <div
        style={{ background: "rgb(255, 217, 0)" }}
        className="h-[50px] w-full"
      ></div>
      <div
        style={{ background: "rgb(255, 174, 0)" }}
        className="h-[50px] w-full"
      ></div>
      <div
        style={{ background: "rgb(255, 130, 5)" }}
        className="h-[50px] w-full"
      ></div>
      <div
        style={{ background: "rgb(250, 82, 15)" }}
        className="h-[50px] w-full"
      ></div>
      <div
        style={{ background: "rgb(224, 4, 0)" }}
        className="h-[50px] w-full"
      ></div>

      <div className="container mx-auto gap-4 p-5 py-16 md:flex xl:px-12">
        <div className="flex w-full flex-col justify-between gap-8 md:w-2/5">
          <div>
            <div className="relative z-10 mb-4 inline-block h-2xl-2 min-w-2xl-2">
              <Mistral />
            </div>

            <div className="flex gap-4">
              <AppleStore />
              <GooglePlayStore />
            </div>
          </div>
          <div className="-mt-1 flex gap-x-[15px] text-sm md:mt-2">
            <p className="hidden gap-x-1 text-sm md:flex">Mistral AI © 2025</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-14 md:w-3/5">
          <nav className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col gap-y-1 text-[14px]/[24.5px] leading-normal">
              <div className="pointer-events-none text-mistral-orange">
                Why Mistral
              </div>
              <div>About us</div>
              <div>Our customers</div>
              <div>Careers</div>
              <div>Contact us</div>
            </div>

            <div className="flex flex-col gap-y-1 text-[14px]/[24.5px] leading-normal">
              <div className="pointer-events-none text-mistral-orange">
                Explore
              </div>
              <div>AI solutions</div>
              <div>Partners</div>
              <div>Research</div>
              <div>Documentation</div>
            </div>

            <div className="flex flex-col gap-y-1 text-[14px]/[24.5px] leading-normal">
              <div className="pointer-events-none text-mistral-orange">
                Build
              </div>
              <div>La Plateforme</div>
              <div>Le Chat</div>
              <div>Try the API</div>
            </div>

            <div className="flex flex-col gap-y-1 text-[14px]/[24.5px] leading-normal">
              <div className="pointer-events-none text-mistral-orange">
                Legal
              </div>
              <div>Terms of service</div>
              <div>Privacy policy</div>
              <div>Data processing agreement</div>
              <div>Legal notice</div>
            </div>
          </nav>

          <div className="w-full items-center justify-between md:flex">
            <button
              type="button"
              role="combobox"
              dir="ltr"
              data-state="closed"
              className="justify-between border py-4 md:py-2 outline-none ring-0 border-l-0 border-b-0 border-t flex items-center gap-4 hover:bg-transparent hover:text-primary dark:hover:text-mistral-orange-bright border-black/20 md:border-black dark:border-gray-500 border-r-0 h-[36px] w-full text-sm md:w-fit"
              aria-label="Current language: en"
            >
              EN
              <DownwardArrow className="" />
            </button>

            <p className="gap-x-1 py-6 text-sm md:hidden">Mistral AI © 2025</p>

            <div className="flex flex-wrap gap-x-[10px]">
              <Image
                alt=""
                width={38}
                height={38}
                className="size-[38px] p-2.5"
                src="https://cms.mistral.ai/assets/9c3aec2e-9825-4691-8458-cf4bd48ceff5"
              />
              <Image
                alt=""
                width={38}
                height={38}
                className="size-[38px] p-2.5"
                unoptimized={true}
                src="https://cms.mistral.ai/assets/b68af65f-220d-4116-b522-fe9ab25c7f32"
              />
              <Image
                alt=""
                width={38}
                height={38}
                className="size-[38px] p-2.5"
                unoptimized={true}
                src="https://cms.mistral.ai/assets/0f8631ea-bfbc-4075-8f2e-c8f681076d7b"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MistralFooter;
