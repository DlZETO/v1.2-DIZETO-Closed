import React from "react";
import Package from "./parts/Package";
import Title from "./parts/Title";
import List from "./parts/List";

const packages = [
  {
    idr: "1.5",
    pack: "A",
    title: <Title title1="PHOTO" title2="PRE-WEDDING" />,
    list: [
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "LOCATION",
      },
      {
        qty: 20,
        value: "EDITED PHOTO",
      },
      {
        qty: 1,
        value: "PHOTOGRAPHER",
      },
      {
        qty: 1,
        value: "PHOTO EDITOR",
      },
      {
        qty: 1,
        value: "MINOR REVISION",
      },
    ],
  },
  {
    idr: "1.0",
    pack: "D",
    title: <Title title1="PHOTO" title2="PRE-WEDDING" />,
    list: [
      {
        qty: 3,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 3,
        value: "LOCATION",
      },
      {
        qty: 60,
        value: "EDITED PHOTO",
      },
      {
        qty: 1,
        value: "PHOTOGRAPHER",
      },
      {
        qty: 1,
        value: "PHOTO EDITOR",
      },
      {
        qty: 1,
        value: "MINOR REVISION",
      },
    ],
  },
  {
    idr: "1.5",
    pack: "B",
    title: <Title title1="PHOTO" title2="DOCUMENTATION" />,
    list: [
      {
        qty: 6,
        value: "HOURS",
      },
      {
        qty: 1,
        value: "LOCATION",
      },
      {
        qty: 300,
        value: "EDITED PHOTO",
      },
      {
        qty: 1,
        value: "PHOTOGRAPHER",
      },
      {
        qty: 1,
        value: "PHOTO EDITOR",
      },
      {
        qty: 1,
        value: "CAMERA",
      },
      {
        qty: 1,
        value: "MINOR REVISION",
      },
    ],
  },
  {
    idr: "0.6",
    pack: "A",
    title: <Title title1="PHOTO" title2="CATALOG PRODUCT" />,
    list: [
      {
        qty: 5,
        value: "PRODUCT",
      },
      {
        qty: 4,
        value: "ANGLE PHOTO",
      },
      {
        qty: 2,
        value: "B&W BACKGROUND COLOR",
      },
      {
        qty: 3,
        value: "REQUEST BACKGROUND COLOR",
      },
      {
        qty: 100,
        value: "TOTAL PHOTO",
      },
      {
        qty: 1,
        value: "PHOTOGRAPHER",
      },
      {
        qty: 1,
        value: "PHOTO EDITOR",
      },
      {
        qty: 1,
        value: "MINOR REVISION",
      },
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="container mx-auto my-10 rounded-lg border border-gray-200 bg-white px-16 pb-10 shadow-md shadow-black/30 dark:border-gray-700 dark:bg-dark dark:shadow-md dark:shadow-white/30"
    >
      <h3 className="pt-10 text-center text-4xl font-semibold">
        PRICI<span className="text-red-600">NG</span>
      </h3>
      <div className="red-line-h"></div>
      <div className="pt-5">
        <div className="mt-[-25px] grid grid-cols-2 justify-center gap-x-5 lg:mt-0 lg:flex lg:flex-row lg:gap-x-5 xl:gap-x-10 2xl:gap-x-16">
          {packages.map(({ idr, pack, title, list }, index) => (
            <Package
              key={index}
              idr={idr}
              pack={pack}
              title={title}
              list={list.map(({ qty, value }, index) => (
                <List key={index} qty={qty} value={value} />
              ))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
