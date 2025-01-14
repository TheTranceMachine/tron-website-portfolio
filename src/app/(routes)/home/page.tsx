"use client";

import Transition from "@/app/Transition";
import Image from "next/image";
import { Playwrite_CU } from "next/font/google";

const playwrite = Playwrite_CU({
  weight: "400",
  style: "normal",
});

export default function HomePage() {
  return (
    <div className="wrapper flex sm:px-[41px] px-[20px] gap-1 -mt-6">
      <Transition initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
        <div className="content bg-tron-300 w-full text-black p-5 shadow-md border border-tron-400 rounded-md">
          <div className="home-page flex flex-col sm:flex-row gap-4 mt-4">
            <div className="home-page__image sm:w-1/2 self-center justify-items-center">
              <Image
                src="/images/artdirector.jpg"
                alt="Profile picture"
                width={64}
                height={85}
                priority
                quality={100}
                className="rounded-full border-4 border-slate-500/30"
              />
            </div>
            <div className="home-page__content text-gray-600 antialiased">
              <h1 className={`text-2xl font-bold mb-4 ${playwrite.className}`}>Welcome to my portfolio!</h1>
              <p className={`text-base leading-8 ${playwrite.className}`}>
                I consider myself a creative technocrat. I want to see a future where technology brings out what's best
                in humanity. By improving our technology, we can live better lives, in a cleaner environment and
                stronger community. I strive every day to improve my skills, learn something new, and engage in
                meaningful conversations. Let's build the future together!
              </p>
              <div className={`home-page__signature mt-4 ${playwrite.className} justify-self-end`}>Greg Smolin</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
