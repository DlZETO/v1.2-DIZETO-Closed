import React from "react";
import { ImArrowLeft2 } from "react-icons/im";
import Link from "next/link";

export default function PaginationMinW1024px({ back, value }) {
  return (
    <>
      <div className="mr-5 hidden w-max lg:block">
        <div className="flex items-center gap-x-5">
          <Link className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white" href={back}>
            <ImArrowLeft2 />
          </Link>
          {value}
        </div>
      </div>
    </>
  );
}
