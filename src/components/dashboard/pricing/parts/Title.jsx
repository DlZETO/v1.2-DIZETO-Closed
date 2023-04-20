import React from "react";

export default function Title({ title1, title2 }) {
  return (
    <div className="pb-5">
      <h2 className="text-xl">
        {title1}
        <br />
        {title2}
      </h2>
    </div>
  );
}
