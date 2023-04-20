import React from "react";
import Content from "./parts/Content";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="container mx-auto my-10 rounded-lg border border-gray-200 bg-white px-16 pb-20 shadow-md shadow-black/30 dark:border-gray-700 dark:bg-dark dark:shadow-md dark:shadow-white/30"
      >
        <h3 className="pt-10 text-center text-4xl font-semibold">
          ABO<span className="text-red-600">UT</span>
        </h3>

        <div className="red-line-h"></div>

        <Content />
      </section>
    </>
  );
}
