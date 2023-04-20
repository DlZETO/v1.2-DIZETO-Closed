import React from "react";
import Image from "next/image";

export default function Content() {
  return (
    <div className="flex max-h-fit items-center justify-center pt-10 md:pt-20">
      <div className="grid grid-cols-1 font-medium md:grid-cols-2">
        <div>
          <h4 className="text-2xl font-semibold">
            <span className="text-red-600">W</span>hat is Dizeto?
          </h4>
          <br />
          <p className="text-justify text-lg">
            <span className="text-red-600">Dizeto</span> is a vendor that offers photography, videography, talent, and music services. We have a professional team that can help you meet business
            needs, events, and your special moments to make them more beautiful, real, and lasting. You can learn more about us by viewing our portfolio, YouTube channel, and customer testimonials.
            <br />
            <br />
            <br />
            <span className="text-red-600">*Please take note that we currently only offer photography and videography services.</span>
          </p>
        </div>

        <div className="mx-auto mt-20 h-auto w-[50%] max-w-[300px] md:my-auto md:w-[250px]">
          <Image className="md:ml-10" width={300} height={300} src={require("dizeto/assets/images/logo/dizeto.svg")} alt="DIZETO" />
        </div>
      </div>
    </div>
  );
}
