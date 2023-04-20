import React from "react";

export default function List({ qty, value }) {
  return (
    <>
      <li className="px-3 text-base">
        <span className="mr-1 font-bold text-red-600">{qty}</span> {value}
      </li>
    </>
  );
}
