import React from "react";
import Image from "next/image";

export default function Images() {
  const photos = [
    "DZT_CC1.webp",
    "DZT_CC2.webp",
    "DZT_CC3.webp",
    "DZT_CC4.webp",
    "DZT_CC5.webp",
    "DZT_CC6.webp",
    "DZT_CC7.webp",
    "DZT_CC8.webp",
    "DZT_CC9.webp",
    "DZT_CC10.webp",
    "DZT_CC11.webp",
    "DZT_CC12.webp",
  ];

  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo, index) => (
        <li key={index} className="hover:shadow-md hover:shadow-black/30 dark:hover:shadow-md dark:hover:shadow-white/30">
          <div className="flex items-center justify-center rounded-sm border-2 border-gray-200 bg-white hover:border-red-600 dark:border-gray-700 dark:bg-gray-700 dark:hover:border-red-600">
            <div className="p-0.5">
              <a
                href={`https://dizeto-images.vercel.app/assets/uploads/dashboard/f1/${photo}`}
                data-lightbox="dashboart"
                data-title="&copy; Copyright 2022 - DIZETO"
              >
                <Image
                  className="h-auto rounded-sm"
                  width={360}
                  height={0}
                  placeholder="blur"
                  src={require(`dizeto/assets/uploads/dashboard/f1/thumbnail/${photo}`)}
                  alt={`Mita's Birthday`}
                />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
