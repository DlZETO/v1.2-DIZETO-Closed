import { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import Image from "next/image";
import Navigation from "./parts/Navigation";
import ToggleTheme from "./parts/ToggleTheme";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const about = document.getElementById("about");

    if (scrollPosition > 200) {
      if (scrollPosition > about.offsetTop - 84) {
        navbar.classList.add("backdrop-blur", "shadow-md", "shadow-black/30", "dark:bg-dark/70", "dark:shadow-md", "dark:shadow-white/30");
      } else {
        navbar.classList.remove("backdrop-blur", "shadow-md", "shadow-black/30", "dark:bg-dark/70", "dark:shadow-md", "dark:shadow-white/30");
      }
    }
  }, [scrollPosition]);
  return (
    <nav id="navbar" className="fixed top-0 z-10 flex h-16 w-full items-center px-10">
      <Scroll className="cursor-pointer" to="jumbotron" spy={true} smooth={true} offset={0} duration={500}>
        <Image src={require("dizeto/assets/images/logo/dizeto.svg")} width={36} height={36} alt="DIZETO" />
      </Scroll>
      <ul className="mx-auto flex items-center justify-center gap-x-9 lg:pl-[124px]">
        <Navigation value="About" to="about" />
        <Navigation value="Portfolio" to="portfolio" />
        <Navigation value="Pricing" to="pricing" />
        {/* <Navigation value="Testimony" to="testimony" /> */}
        <Navigation value="Clients" to="clients" />
        <Navigation value="Contact" to="contact" />
      </ul>
      <ToggleTheme />
    </nav>
  );
}
