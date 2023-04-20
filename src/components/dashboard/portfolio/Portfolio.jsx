import React from "react";
import Link from "next/link";
import Images from "./parts/Images";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="container mx-auto my-10 rounded-lg border border-gray-200 bg-white px-16 pb-10 shadow-md shadow-black/30 dark:border-gray-700 dark:bg-dark dark:shadow-md dark:shadow-white/30"
    >
      <h3 className="pt-10 text-center text-4xl font-semibold">
        PORTFOL<span className="text-red-600">IO</span>
      </h3>

      <div className="red-line-h"></div>

      <div className="my-5 flex items-center justify-center">
        <Link className="border-2 border-red-600 px-10 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white" href="/listportfolio">
          CHECK ALL PORTFOLIO
        </Link>
      </div>

      <Images />
    </section>
  );
}
