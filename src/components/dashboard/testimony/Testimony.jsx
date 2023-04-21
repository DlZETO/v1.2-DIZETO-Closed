import React, { useState, useEffect } from "react";
import { BsFillCircleFill, BsQuote } from "react-icons/bs";
import Profile from "./parts/Profile";
import ranggadewamoela from "dizeto/assets/images/testimony/rangga-dewamoela.webp";
import rifaanggyana from "dizeto/assets/images/testimony/rifa-anggyana.webp";
import ratriwerdiningsih from "dizeto/assets/images/testimony/ratri-werdiningsih.webp";
import vittosafit from "dizeto/assets/images/testimony/vitto-safiy.webp";
import gibranfaras from "dizeto/assets/images/testimony/gibran-farras.jpg";
import nenengcamidah from "dizeto/assets/images/testimony/neneng-camidah.webp";
import novi from "dizeto/assets/images/testimony/novi.webp";

export default function Testimony() {
  const profiles = [
    {
      name: "Rangga Dewamoela",
      status: "- Ginza's Birthday -",
      comment: "You must give it a try because the photographs are good",
      source: ranggadewamoela,
    },
    {
      name: "Rifa Anggyana",
      status: "- Ikatan Remaja Masjid Jawa Barat -",
      comment: "Alhamdulillah, the pictures are great, i'm very appreciative",
      source: rifaanggyana,
    },
    {
      name: "Ratri Werdiningsih",
      status: "- Rumah Batik Wijaya -",
      comment: "The photographs are excellent, the service is inexpensive, and the workflow is quick",
      source: ratriwerdiningsih,
    },
    {
      name: "Vitto Safiy",
      status: "- Safiy Kitchen -",
      comment: "The cheerful color scheme appeals to me",
      source: vittosafit,
    },
    {
      name: "Gibran Farras",
      status: "- Lentera Coffee -",
      comment: "In any case, it's highly recommended",
      source: gibranfaras,
    },
    {
      name: "Neneng Chamidah",
      status: "- Eid Photo Shoot -",
      comment: "Despite the fact that the photo was taken at my house, the outcome is satisfactory",
      source: nenengcamidah,
    },
    {
      name: "Novi",
      status: "- Reunion Documentation -",
      comment: "Thank you for the wonderful photographs",
      source: novi,
    },
  ];

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfileIndex((currentProfileIndex + 1) % profiles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentProfileIndex, profiles.length]);

  return (
    <section id="testimony">
      <div className="mx-auto flex h-[500px] flex-col items-center justify-center">
        <i className="mb-3 text-5xl">
          <BsQuote />
        </i>
        <Profile {...profiles[currentProfileIndex]} />
        <div className="mt-10 flex items-center justify-center">
          {profiles.map((profile, index) => (
            <i key={index}>
              <BsFillCircleFill className={`mx-2 ${currentProfileIndex === index ? "active" : ""} text-red-600/30`} size={"12px"} />
            </i>
          ))}
        </div>
      </div>
    </section>
  );
}
