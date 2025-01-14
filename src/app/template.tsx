"use client";

import { useState } from "react";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MainMenu from "@/app/_components/main-menu/main-menu";
import { newAlphabet } from "@/app/fonts";
import { Playwrite_CU } from "next/font/google";
import { useMediaQuery } from "react-responsive";
import CloudsBackground from "@/app/_components/clouds-background/couds-background";
import "./globals.css";

const playwrite = Playwrite_CU({
  weight: "400",
  style: "normal",
});

export default function Template({ children }: { children: React.ReactNode }) {
  const [menuAnimationCompletion, setMenuAnimationCompletion] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 450 });

  return (
    <>
      <CloudsBackground />
      <main className="flex min-h-screen flex-col items-center justify-between lg:pt-24 bg-gradient-to-b to-sky-50 from-50% via-[#C1E2E7] via-70% from-[#C1E2E7]">
        <div className="container w-[320px] sm:w-[320px] md:w-[768px] lg:w-[964px] relative">
          <div className="absolute z-50 flex w-fit justify-between pl-[15px] sm:pl-[41px] pr-[10px] pt-[10px]">
            <div className="flex items-center gap-1 sm:pb-10 sm:px-3 sm:pt-5">
              <div className={`text-3xl  sm:text-6xl antialiased ${newAlphabet.className} text-white`}>GS</div>
              <div className={`text-[8px] sm:text-sm antialiased text-white ${playwrite.className}`}>
                by Greg Smolin
              </div>
            </div>
          </div>
          <div className="absolute z-50 right-3 top-4 w-16 h-16 sm:w-16 sm:h-16 md:w-36 md:h-36 lg:w-44 lg:h-44 sm:right-6 sm:top-14 md:right-9 md:top-8 lg:right-11 lg:top-14 opacity-50">
            <DotLottieReact
              src="https://lottie.host/063febb5-04d8-44c7-be98-a1a7607e7a97/aqv8waeGq6.lottie"
              loop
              autoplay
            />
          </div>
          <Image
            src="/images/tron-website-radiator.png"
            alt="Radiator"
            width={964}
            height={408}
            priority
            quality={100}
            className="absolute z-40 sm:w-[320px] md:w-[768px] lg:w-[964px] w-964px"
          />
          <MainMenu setMenuAnimationCompletion={setMenuAnimationCompletion} isMobile={isMobile} />
          {menuAnimationCompletion && children}
        </div>
      </main>
    </>
  );
}
