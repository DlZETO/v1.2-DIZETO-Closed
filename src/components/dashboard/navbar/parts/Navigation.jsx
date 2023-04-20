import React from "react";
import { Link as Scroll } from "react-scroll/modules";

export default function Navigation({ value, to }) {
  return (
    <li className={`hover:text-red-600`}>
      <Scroll className="cursor-pointer text-lg font-semibold" to={to} spy={true} smooth={true} offset={-83} duration={500}>
        {value}
      </Scroll>
    </li>
  );
}
