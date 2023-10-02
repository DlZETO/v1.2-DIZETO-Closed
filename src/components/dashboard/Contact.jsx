import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function Contact() {
  return (
    <section className="px-16 pb-10">
      <h3 className="pt-10 text-center text-4xl font-semibold">
        CONTA<span className="text-red-600">CT</span>
      </h3>

      <div className="red-line-h mb-5"></div>

      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.035880336206!2d107.6482381153243!3d-6.8863057692995255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76a1e6f56f3%3A0x8649ff7558d15108!2sDIZETO!5e0!3m2!1sid!2sid!4v1676677774416!5m2!1sid!2sid"
        className="mt-5 h-[500px] w-[100%] rounded-sm border-0"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <ul className="mt-8 flex flex-col gap-y-2 text-base">
        <li className="flex">
          <i className="ml-[3px] mr-[10px] mt-[5px]">
            <FaMapMarkerAlt />
          </i>
          <strong>Address:</strong>
          <a className="ml-2 hover:text-red-600" href="https://goo.gl/maps/p92HMz8wHBQKFnKd9" target="_blank" rel="noopener noreferrer">
            Blk. A-B No.a8, Cibeunying, Kec. Cimenyan, Kabupaten Bandung, Jawa Barat 40191, Indonesia
          </a>
        </li>

        <li className="flex">
          <i className="ml-[3px] mr-[9px] mt-[5px]">
            <FaEnvelope />
          </i>
          <strong>Email:</strong>
          <a
            className="ml-2 hover:text-red-600"
            href="https://mail.google.com/mail/u/?authuser=dizetobs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            dizetobs@gmail.com
          </a>
        </li>

        <li className="flex">
          <i className="ml-[3px] mr-[9px] mt-[5px]">
            <FaPhoneAlt />
          </i>
          <strong>Phone:</strong>
          <a className="ml-2 hover:text-red-600" href="" target="_blank" rel="noopener noreferrer">
            +62 000-0000-0000
          </a>
        </li>

        <li className="flex">
          <i className="ml-[3px] mr-[9px] mt-[5px]">
            <TbWorldWww />
          </i>
          <strong>Website:</strong>
          <a className="ml-2 hover:text-red-600" href="https://dizeto.vercel.app/" target="_blank" rel="noopener noreferrer">
            https://www.dizeto.com/
          </a>
        </li>
      </ul>
    </section>
  );
}
