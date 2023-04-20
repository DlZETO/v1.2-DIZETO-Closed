import React from "react";

export default function Tracker({ icon, number, value }) {
  return (
    <div className="mx-auto">
      <div className="flex items-center justify-center text-2xl">
        <i className="mr-2">{icon}</i>
        <p className="pb-1 font-semibold text-red-600">{number}</p>
      </div>
      <div className="text-center">
        <strong>{value}</strong>
      </div>
    </div>
  );
}
