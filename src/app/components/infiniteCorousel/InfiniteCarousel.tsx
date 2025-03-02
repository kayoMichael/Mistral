"use client";

import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
  items: React.ElementType[];
  speed: number;
}

const InfiniteCarousel = ({ items, speed = 20 }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duplicatedItems, setDuplicatedItems] = useState<React.ElementType[]>(
    []
  );
  const [translateX, setTranslateX] = useState(0);
  const [_, setContainerWidth] = useState(0);
  const [itemsWidth, setItemsWidth] = useState(0);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  useEffect(() => {
    const calculateWidths = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        setContainerWidth(containerWidth);

        const itemElements =
          containerRef.current.querySelectorAll(".carousel-item");
        let totalWidth = 0;
        itemElements.forEach((item) => {
          totalWidth += (item as HTMLElement).offsetWidth;
        });
        setItemsWidth(totalWidth / 2);
      }
    };

    calculateWidths();
    window.addEventListener("resize", calculateWidths);

    return () => {
      window.removeEventListener("resize", calculateWidths);
    };
  }, [duplicatedItems]);

  useEffect(() => {
    if (itemsWidth === 0) return;

    const animate = () => {
      setTranslateX((prevTranslateX) => {
        let newTranslateX = prevTranslateX - speed / 60;
        if (-newTranslateX >= itemsWidth) {
          newTranslateX = 0;
        }
        return newTranslateX;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, itemsWidth]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex items-center"
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        {duplicatedItems.map((ItemComponent, index) => (
          <div key={index} className="carousel-item flex-shrink-0 px-10">
            <ItemComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
