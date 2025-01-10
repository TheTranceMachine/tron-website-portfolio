"use client"

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import MainMenu from "@/app/_components/main-menu/main-menu";
import { newAlphabet } from "@/app/fonts";
import "./globals.css";
import CloudsBackground from "@/app/_components/clouds-background/couds-background";

const inter = Inter({ subsets: ["latin"] });

export default function Template({ children }: { children: React.ReactNode }) {
  const [menuAnimationCompletion, setMenuAnimationCompletion] = useState(false);
  return (
    <>
      <CloudsBackground />
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 bg-gradient-to-b to-sky-50 from-50% via-[#C1E2E7] via-70% from-[#C1E2E7]">
        <div className="container w-[320px] sm:w-[320px] md:w-[768px] lg:w-[964px] relative">
          <div className="absolute z-50 flex w-fit justify-between pl-[15px] sm:pl-[41px] pr-[10px] pt-[10px]">
            <div className="sm:pb-10 sm:px-3 sm:pt-5">
              <div className={`text-3xl  sm:text-6xl antialiased ${newAlphabet.className}`}>Greg Smolin</div>
            </div>
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
          <MainMenu setMenuAnimationCompletion={setMenuAnimationCompletion} />
          {menuAnimationCompletion && children}
        </div>
      </main>
    </>

  )
}