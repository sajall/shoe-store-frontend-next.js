"use client";

import Link from "next/link";

export default function Mainpage() {
  return (
    <div className="flex flex-col max-h-screen">
    <div className="h-[88vh] w-[99vw] bg-[url('/bg.png')] bg-[100%] bg-no-repeat relative overflow-hidden mt-[-15px] ">
      <div className="absolute w-[75%] h-[84.7vh] bg-slate-100 flex flex-col gap-[10px] justify-center items-center no-underline clip-path-style mt-[10px] ">
        <div className="font-bold text-3xl">
          <h1>
            Feet wear <span className="text-purple-500">Paradise</span>
          </h1>
        </div>
        <div className="w-[70%]">
        Welcome to our shoe store, where every step tells a story.we're passionate about footwear.
         From casual sneakers perfect for a day out with friends to elegant heels that elevate your evening ensemble,
          we have a diverse collection to suit every occasion and style.
          
        </div>
        <div>
          <Link href="/home">
            <button className="w-[120px] h-[40px] bg-black text-white text-lg font-bold rounded-lg ml-[10px]  hover:bg-gray-900">
              Home
            </button>
          </Link>
          <Link href="/login">
            <button className="w-[120px] h-[40px] bg-black text-white text-lg font-bold rounded-lg ml-[10px] hover:bg-gray-900">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}


