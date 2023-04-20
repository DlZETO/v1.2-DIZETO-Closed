import React from "react";
import Image from "next/image";

export default function Person({ source, name, status, comment }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={source} className="rounded-full" width={128} height={128} alt="Photo Profile" />
      </div>
      <br />
      <div className="text-center">
        <strong className="text-lg">{name}</strong>
        <p className="text-sm font-semibold text-red-400 dark:text-red-300">{status}</p>
        <br />
        <div className="flex h-8 max-w-lg items-center justify-center">
          <p className="text-base font-semibold">{`"${comment}"`}</p>
        </div>
      </div>
    </div>
  );
}
