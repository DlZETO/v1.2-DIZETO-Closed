import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoDesktop } from "react-icons/io5";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme("");
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const body = document.querySelector("body");
    if (theme === "light") {
      body.classList.add("grd-light");
      body.classList.remove("grd-dark");
    } else {
      body.classList.add("grd-dark");
      body.classList.remove("grd-light");
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-end">
      <div className="flex h-9 w-9 cursor-pointer items-center justify-center hover:text-red-600 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <div className={`${theme === "light" ? "" : "hidden"}`}>
          <FaSun size={20} />
        </div>
        <div className={`${theme === "dark" ? "" : "hidden"}`}>
          <BsFillMoonStarsFill size={18} />
        </div>
        <div className={`${theme === "system" ? "" : "hidden"}`}>
          <IoDesktop size={20} />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex h-11 w-40 items-center justify-end gap-x-5">
          <div
            className={`cursor-pointer ${
              theme === "light" ? "text-red-600" : "text-black hover:text-red-600 dark:text-white dark:hover:text-red-600"
            } flex h-8 w-8 items-center justify-center rounded-full p-1.5`}
            onClick={() => {
              setTheme("light");
            }}
          >
            <FaSun size={20} />
          </div>
          <div
            className={`cursor-pointer ${
              theme === "dark" ? "text-red-600" : "text-black hover:text-red-600 dark:text-white dark:hover:text-red-600"
            } flex h-8 w-8 items-center justify-center rounded-full p-1.5`}
            onClick={() => {
              setTheme("dark");
            }}
          >
            <BsFillMoonStarsFill size={18} />
          </div>
          {/* <div
            className={`cursor-pointer ${
              theme === "system" ? "text-red-600" : "text-black hover:text-red-600 dark:text-white dark:hover:text-red-600"
            } flex h-8 w-8 items-center justify-center rounded-full p-1.5`}
            onClick={() => {
              setTheme("system");
            }}
          >
            <IoDesktop size={20} />
          </div> */}
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-5 top-[80px] z-10 flex h-fit w-48 flex-col items-center justify-center gap-y-5 rounded-lg border-2 border-gray-200 bg-white py-3 shadow-md shadow-black/30 dark:border-gray-700 dark:bg-dark dark:shadow-md dark:shadow-white/30 lg:hidden">
          <div
            className={`cursor-pointer ${
              theme === "light" ? "text-red-600" : "text-black hover:text-red-600 dark:text-white dark:hover:text-red-600"
            } flex items-center justify-center`}
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
          >
            <FaSun size={25} />
            <span className="ml-3 text-xl font-semibold">Light</span>
          </div>

          <div
            className={`cursor-pointer ${
              theme === "dark" ? "text-red-600" : "text-black hover:text-red-600 dark:text-white dark:hover:text-red-600"
            } flex items-center justify-center`}
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
          >
            <BsFillMoonStarsFill size={23} />
            <span className="ml-3 text-xl font-semibold">Dark</span>
          </div>

          {/* <div
            className={`cursor-pointer ${
              theme === "system" ? "text-red-600" : "text-black hover:text-red-600 dark:text-white dark:hover:text-red-600"
            } flex items-center justify-center`}
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
          >
            <IoDesktop size={25} />
            <span className="ml-3 text-xl font-semibold">System</span>
          </div> */}
        </div>
      )}
    </div>
  );
}
