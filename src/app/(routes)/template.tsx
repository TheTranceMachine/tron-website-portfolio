"use client"

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import MainMenu from "@/app/(routes)/components/main-menu/main-menu";
import { newAlphabet } from "@/app/fonts";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Template({ children }: { children: React.ReactNode }) {
  const [menuAnimationCompletion, setMenuAnimationCompletion] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between pt-24 bg-gradient-to-b to-sky-50 from-50% via-[#C1E2E7] via-70% from-[#C1E2E7]">
          <div className="container w-[964px] relative">
            <div className="absolute z-50 flex w-[964px] h-[272px] justify-between pl-[41px] pr-[10px] pt-[10px]">
              <div className="flex flex-col pb-10 px-3 pt-5">
                <div className={`text-6xl antialiased ${newAlphabet.className}`}>Greg Smolin</div>
                <span>7064298965</span>
              </div>
            </div>
            <Image
              src="/images/tron-website-radiator.png"
              alt="Radiator"
              width={964}
              height={408}
              priority
              quality={100}
              className="absolute z-50"
            />
            <MainMenu setMenuAnimationCompletion={setMenuAnimationCompletion} />
            {menuAnimationCompletion && children}
          </div>
        </main>
      </body>
    </html>

  )
}