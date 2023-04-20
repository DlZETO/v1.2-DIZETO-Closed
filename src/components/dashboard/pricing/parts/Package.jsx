import React from "react";

export default function Package({ idr, pack, title, list }) {
  return (
    <ul className="mt-28 w-full rounded-md border-2 border-gray-200 bg-white text-center text-xl font-semibold transition-transform duration-500 hover:scale-105 hover:shadow-md hover:shadow-black/30 dark:border-gray-700 dark:bg-dark dark:hover:shadow-md dark:hover:shadow-white/30 lg:mt-16">
      <li className="bg-gray-200 dark:bg-gray-700">
        <div className="relative top-[-10px] mt-[-63px] inline-block h-[140px] w-[140px] rounded-full border-[5px] border-gray-200 bg-[#e83333] text-white dark:border-gray-700">
          <div className="mt-[34px] text-3xl font-semibold">IDR {idr}</div>
          <div className="text-base font-semibold">PACKAGE {pack}</div>
        </div>
        {title}
      </li>
      <div className="my-5 flex flex-col items-center justify-center gap-y-6">{list}</div>
      <li className="mb-5 text-base">
        SENT VIA
        <br />
        GOOGLE DRIVE
        <br />
        (EXPIRED <span className="font-bold text-red-600">7</span> DAYS)
      </li>
      <button className="mb-5 border-2 border-red-600 px-5 py-2 text-base font-semibold text-red-600 hover:bg-red-600 hover:text-white">BOOKING</button>
    </ul>
  );
}
