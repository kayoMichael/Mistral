import React from "react";
import Image from "next/image";
import { RightwardArrow } from "@/app/util/svg";

const features = [
  {
    title: "Customizable, from pre-training to the real world.",
    description:
      "World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.",
  },
  {
    title: "Private and portable.",
    description:
      "A comprehensive, enterprise-grade AI platform that can be deployed anywhere—on-premises, cloud, edge, devices, data centers, and more.",
  },
  {
    title: "Transparent and trustworthy.",
    description:
      "Strongest global contributor to open source AI and AI policy. Mistral AI is the world's greenest and leading independent AI lab.",
  },
  {
    title: "Deeply engaged solutioning and value delivery.",
    description:
      "Hands-on assistance from the world's best AI engineers and scientists across deployment, solutioning, safety, and beyond.",
  },
  {
    title: "Delightful interfaces.",
    description:
      "Bringing frontier intelligence to life with intuitive user experiences across life and work.",
  },
];

const MistralFeatures = () => {
  return (
    <div className="flex grid-cols-2 flex-col justify-between gap-y-8 md:grid md:flex-row md:gap-x-12">
      <div className="h-[360px] md:h-full md:relative">
        <h3 className="heading-3 relative top-16 z-10 max-h-min max-w-[300px] md:text-5xl text-3xl md:sticky md:top-1/2">
          <p>
            Your AI future belongs in your hands.
            <span className="inline-flex items-center ml-2">
              <Image
                src="https://cms.mistral.ai/assets/56971484-bbff-4ab7-9e4e-c034bc321f84.svg?width=null&amp;height=null"
                alt="Flag"
                className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
                height={30}
                width={30}
              />
            </span>
          </p>
        </h3>
        <div className="hidden md:block">
          <div className="bg-mistral-beige-deep absolute h-20 w-16 right-30 md:right-10 top-10"></div>
          <div className="bg-mistral-beige-deep absolute h-20 w-20 right-60 md:right-40 top-40"></div>
          <div className="bg-mistral-beige-deep absolute h-36 w-5 right-30 md:right-10 top-150"></div>
          <div className="bg-mistral-beige-deep absolute h-84 w-20 right-60 md:right-40 top-178"></div>
          <div className="bg-mistral-beige-deep absolute h-20 w-20 bottom-0 md:right-20 right-40"></div>
          <div className="bg-mistral-beige-deep absolute h-40 w-20 bottom-20 md:right-60 right-80"></div>
          <div className="bg-mistral-beige-deep absolute h-40 w-20 bottom-0 md:right-80 right-100"></div>
          <div className="bg-mistral-beige-deep absolute h-40 w-20 bottom-20 md:right-100 right-120"></div>
          <div className="bg-mistral-beige-deep absolute h-40 w-20 bottom-0 md:right-120 right-140"></div>
          <div className="bg-mistral-beige-deep absolute h-40 w-20 right-150 md:right-130 top-30"></div>
          <div className="bg-mistral-beige-deep absolute h-20 w-3 right-165 md:right-145 top-150"></div>
        </div>
        <div className="md:hidden block">
          <div className="bg-mistral-beige-deep absolute h-20 w-16 right-30 top-300"></div>
          <div className="bg-mistral-beige-deep absolute h-20 w-10 right-30 top-360"></div>
          <div className="bg-mistral-beige-deep absolute h-10 w-16 right-20 top-360"></div>
          <div className="bg-mistral-beige-deep absolute h-10 w-20 right-120 top-360"></div>
          <div className="bg-mistral-beige-deep absolute h-10 w-20 right-60 top-390"></div>
        </div>
      </div>
      <div className="relative z-10 flex-1 divide-y divide-[#ECDAA2] border-y border-y-[#ECDAA2] bg-background">
        {features.map((feature, index) => (
          <div className="flex flex-col gap-y-8 py-8" key={index}>
            <h4 className="text-3xl font-medium">
              <p>{feature.title}</p>
            </h4>
            <div className="flex items-start gap-x-4 md:max-w-[423px]">
              <RightwardArrow className="relative mt-0.5 max-h-[19px] min-h-[19px] min-w-[21px] max-w-[21px] text-primary" />
              <div>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MistralFeatures;
