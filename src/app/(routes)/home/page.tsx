'use client';

import Transition from "@/app/Transition";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="wrapper flex px-[41px] gap-1 -mt-6">
      <Transition
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="content bg-tron-300 w-full text-black p-3 shadow-md border border-tron-400 rounded-md">
          <div className="cards-list flex">
            <div className="card w-1/3 rounded-md border border-tron-400">
              <Image
                src="/images/1big.jpg"
                alt="1big"
                width={221}
                height={132}
                className="rounded-t-md"
              />
              <div className="bg-white text-slate-700 p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
};