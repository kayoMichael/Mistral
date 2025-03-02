"use client";

import {
  ButtonArrow,
  DownwardArrow,
  Mistral,
  MistralFilled,
} from "@/app/util/svg";
import React, { useState, useEffect } from "react";
import Container from "../container/Container";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<0 | 1 | 2>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        if (window.scrollY > 680) {
          setIsScrolled(2);
        } else {
          setIsScrolled(1);
        }
      } else {
        setIsScrolled(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    const newMenuState = !mobileMenuOpen;
    setMobileMenuOpen(!mobileMenuOpen);
    if (newMenuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const navItems = [
    { label: "Products" },
    { label: "Solutions" },
    { label: "Research" },
    { label: "Resources" },
    { label: "Company" },
  ];

  return (
    <>
      <nav className="w-full bg-menu-gradient sticky top-0 z-50 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-menu-gradient z-[-2]"></div>

        <div
          className={`
            absolute inset-x-0 top-0 w-full bg-background z-[-1]
            transition-all duration-500 ease-in-out transform-gpu
            ${isScrolled > 1 ? "h-full" : "h-0"}
          `}
        ></div>

        <div
          className={`
            absolute inset-0 w-full h-full backdrop-blur-sm
            transition-opacity duration-300 ease-in-out
            ${isScrolled === 1 ? "opacity-100" : "opacity-0"}
          `}
        ></div>

        <Container
          className={`
          min-h-[123px] flex items-center justify-between py-4 gap-x-20
          ${isScrolled ? "min-h-[80px] py-2" : "min-h-[123px] py-4"}
          transition-all duration-300
        `}
        >
          <div>
            <a className="relative z-10 flex size-10 items-center justify-center">
              <div className="text-white">
                {isScrolled > 1 ? <MistralFilled /> : <Mistral />}
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center justify-between gap-x-4 hidden lg:flex">
            <div className="relative">
              <ul className="flex items-center">
                {navItems.map((item, index) => (
                  <li key={index} className="relative p-0">
                    <button
                      className={`relative z-20 delay-200 ease-in-out cursor-default flex items-center gap-1 text-nowrap px-[16px] py-2 transition-colors duration-300 ${isScrolled > 1 ? "text-black" : "text-white"}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="z-20 h-full items-center gap-x-4 flex">
              <button
                className={`inline-flex justify-center items-center gap-x-[15px] px-3 py-2 text-sm transition-all duration-300 ${isScrolled > 1 ? "bg-mistral-beige-deep text-black hover:bg-mistral-beige-dark" : "bg-white/30 text-white hover:bg-white hover:text-black"} group`}
              >
                Try the API
                <div
                  className={`relative -translate-x-0.5 scale-[.8] transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 ${isScrolled > 1 && "text-primary "}`}
                >
                  <ButtonArrow className="w-4 h-4" />
                </div>
              </button>
              <button
                className={`inline-flex justify-center items-center gap-x-[15px] px-3 py-2 text-sm transition-all duration-300 ${isScrolled > 1 ? "bg-mistral-beige-deep text-black hover:bg-mistral-beige-dark" : "bg-white/30 text-white hover:bg-white hover:text-black"} group`}
              >
                Talk to Sales
                <div
                  className={`relative -translate-x-0.5 scale-[.8] transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 ${isScrolled > 1 && "text-primary "}`}
                >
                  <ButtonArrow className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          <button
            className="lg:hidden relative z-20 flex flex-col justify-center items-center gap-1.5"
            onClick={toggleMobileMenu}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled > 1 ? "bg-black" : "bg-white"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled > 1 ? "bg-black" : "bg-white"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled > 1 ? "bg-black" : "bg-white"
              }`}
            ></span>
          </button>
        </Container>

        <div
          className={`
            fixed inset-0 z-40 bg-background transition-all duration-300 ease-in-out
            ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
          <div className="relative w-full h-full">
            <button
              className="absolute top-6 right-6 z-50"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="h-full flex flex-col pt-20 pb-8 px-6">
              <div className="flex-1">
                <ul className="flex flex-col w-full">
                  {navItems.map((item, index) => (
                    <li key={index} className="border-b border-gray-200 py-6">
                      <div className="flex justify-between items-center">
                        <button className="text-black text-lg font-normal">
                          {item.label}
                        </button>
                        <DownwardArrow />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button className="w-full flex justify-between items-center bg-black text-white p-5 mb-4 h-10">
                  <span>Try the API</span>
                  <div className="flex size-4 items-center justify-center object-contain p-1 text-primary">
                    <ButtonArrow />
                  </div>
                </button>
                <button className="w-full flex justify-between h-10 items-center bg-black text-white p-5">
                  <span>Talk to sales</span>
                  <div className="flex size-4 items-center justify-center object-contain p-1 text-primary">
                    <ButtonArrow />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
