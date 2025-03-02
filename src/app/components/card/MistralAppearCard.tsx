"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ButtonArrow } from "@/app/util/svg";

const features = [
  {
    title: "Get work done.",
    description:
      "Your personalized multilingual AI assistant, with web search, uploads, and data connectors.",
    ctaText: "Discover le Chat",
    imageSrc:
      "https://cms.mistral.ai/assets/ab588a9c-8097-4bb1-b39c-76427fd58965",
  },
  {
    title: "Code faster.",
    description: "Build faster with coding assistance across 80+ languages.",
    ctaText: "Code with le Chat",
    imageSrc:
      "https://cms.mistral.ai/assets/71808eb6-49e4-4e3c-bf20-4e5eaf0c8295",
  },
  {
    title: "Build AI-powered apps.",
    description: "Build and deploy custom AI solutions with frontier models.",
    ctaText: "Discover la Plateforme",
    imageSrc:
      "https://cms.mistral.ai/assets/200e10e5-2530-4d8b-b50a-6ef836e96a8b",
  },
];

const MistralAppearCard = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [_, setVisibleSections] = useState<boolean[]>([]);
  const [_scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    sectionRefs.current = sectionRefs.current.slice(0, features.length);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      const updatedVisibility = sectionRefs.current.map((ref, _) => {
        if (!ref) return false;

        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visiblePercentage = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
        );

        return visiblePercentage > 0.1;
      });

      setVisibleSections(updatedVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [features.length]);

  const getSectionStyle = (index: number) => {
    if (isMobile) return { opacity: 1, transform: "scale(1)" };

    if (!sectionRefs.current[index])
      return { opacity: 0, transform: "scale(0.85)" };

    const rect = sectionRefs.current[index].getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.bottom < 0) return { opacity: 1, transform: "scale(1)" };
    let visibility = 1;

    if (rect.top > windowHeight) {
      visibility = 0;
    } else if (rect.top > windowHeight / 2) {
      visibility = 1 - (rect.top - windowHeight / 2) / (windowHeight / 2);
    }

    const scale = 0.85 + visibility * 0.15;

    return {
      opacity: visibility,
      transform: `scale(${scale.toFixed(6)})`,
    };
  };

  return (
    <div className="w-full flex-col">
      {features.map((feature, index) => (
        <section
          key={index}
          ref={(el: HTMLElement | null): void => {
            sectionRefs.current[index] = el;
          }}
          data-index={index}
          className="w-full flex justify-center py-6 md:py-24 mt-10 md:mt-0"
        >
          <div
            className="w-full flex flex-col items-center md:flex-row md:gap-4 gap-y-16"
            style={{
              minHeight: isMobile ? "auto" : "500px",
              ...getSectionStyle(index),
            }}
          >
            <div className="flex flex-col items-start md:items-start text-start md:text-left mb-4 md:mb-0 w-full md:w-2/5 px-4 md:px-8">
              <h2 className="md:text-5xl text-3xl mb-4 md:mb-6">
                {feature.title}
              </h2>
              <p className="md:text-[22px]/[26px] mb-4 md:mb-6">
                {feature.description}
              </p>
              <button className="inline-flex items-center justify-center gap-4 rounded-none bg-black text-white p-2 max-w-[200px] h-[36px] text-sm">
                {feature.ctaText}
                <div className="size-2 flex object-contain items-center justify-center text-primary">
                  <ButtonArrow />
                </div>
              </button>
            </div>

            <div className="w-full md:w-3/5 flex justify-center h-[300px] md:h-[400px]">
              <div className="relative h-full w-full max-w-[500px]">
                <Image
                  alt="Feature image"
                  loading="lazy"
                  quality={100}
                  className="object-contain"
                  fill
                  src={feature.imageSrc}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MistralAppearCard;
