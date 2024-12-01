"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  FaBars,
  FaMagnifyingGlass,
  FaXmark,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
import Button from "./Button";

const NavBar = () => {
  const searchRef = useRef();
  const hideMenuRef = useRef();
  const [isTrue, setIsTrue] = useState(false);
  const handeSearchMenu = () => {
    searchRef.current.classList.remove("hidden");
    searchRef.current.classList.add("flex");
  };
  const handleClick = () => {
    hideMenuRef.current.classList.add("-translate-x-[110%]");
    hideMenuRef.current.classList.remove("-translate-x-0");
  };

  return (
    <nav className="p-5 z-30 flex items-center justify-between  w-full sticky top-0 left-0 bg-white dark:bg-darkMain">
      <div className="mobile-nav w-full flex items-center justify-between">
        <div
          onClick={() => {
            hideMenuRef.current.classList.remove("-translate-x-[110%]");
            hideMenuRef.current.classList.add("-translate-x-0");
          }}
          className="hamburger lg:hidden cursor-pointer hover:text-mainThemeColor"
        >
          <FaBars className="text-xl dark:text-white" />
        </div>
        <div className="logo text-2xl font-bold lg:w-[170px] dark:text-white">
          <Link href={"/"}>
            Next<span className="text-2xl text-mainThemeColor">.</span>js Blog
          </Link>
        </div>

        <div className="hidden lg:flex hm-middle w-full">
          <ul className="w-full flex items-center justify-center gap-5 dark:text-white">
            <li>
              <Link
                href={"/"}
                className="font-bold text-lg hover:text-mainThemeColor"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/categories"}
                className="font-bold text-lg hover:text-mainThemeColor"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="font-bold text-lg hover:text-mainThemeColor"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="font-bold text-lg hover:text-mainThemeColor"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`hidden mr-10 dark-light lg:flex items-center transition-all duration-300 justify-between gap-2 bg-gray-200 w-[70px] h-[35px] py-1 px-1 rounded-full cursor-pointer ${
            isTrue ? "bg-gray-600" : ""
          }`}
        >
          <div
            onClick={() => {
              setIsTrue(false);
              document.documentElement.classList.remove("dark");
            }}
            className={` rounded-full h-[28px] w-[28px] flex transition-all duration-300 items-center justify-center cursor-pointer ${
              isTrue ? "bg-transparent text-white" : "bg-white"
            }`}
          >
            <FaSun className="text-sm" />
          </div>
          <div
            onClick={() => {
              setIsTrue(true);
              document.documentElement.classList.add("dark");
            }}
            className={`rounded-full h-[28px] w-[28px] flex items-center transition-all duration-300 justify-center cursor-pointer ${
              isTrue ? "bg-black text-white" : ""
            }`}
          >
            <FaMoon className="text-sm" />
          </div>
        </div>

        <div
          onClick={handeSearchMenu}
          className="magnify cursor-pointer hover:text-mainThemeColor dark:text-white"
        >
          <FaMagnifyingGlass className="text-xl " />
        </div>
      </div>
      <div
        ref={searchRef}
        className="search-menu hidden absolute top-20 p-5 right-2 bg-gray-50 z-10 shadow-md rounded-lg  shadow-[#e4e4f6] w-[90%] lg:w-[30%] mx-auto  flex-col gap-5 dark:bg-darkMain dark:shadow-sm dark:shadow-white"
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-xl dark:text-white">
            What are You Looking For?
          </span>
          <span
            onClick={() => {
              searchRef.current.classList.remove("flex");
              searchRef.current.classList.add("hidden");
            }}
          >
            <FaXmark className="text-2xl cursor-pointer dark:text-white" />
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Start Typing"
            className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain dark:text-white"
          />
          <Button text={"Search"} width={"w-full"} />
        </div>
        <div className="categories flex items-center justify-center flex-wrap gap-2">
          <Link
            onClick={() => {
              searchRef.current.classList.remove("flex");
              searchRef.current.classList.add("hidden");
            }}
            href={"/category/sport"}
            className="bg-white text-xs p-1 dark:text-white dark:bg-darkMain dark:shadow-sm cursor-pointer dark:shadow-white  rounded-md font-semibold"
          >
            SPORT
          </Link>
          <Link
            onClick={() => {
              searchRef.current.classList.remove("flex");
              searchRef.current.classList.add("hidden");
            }}
            href={"/category/business"}
            className="bg-white text-xs p-1 dark:text-white dark:bg-darkMain dark:shadow-sm cursor-pointer dark:shadow-white  rounded-md font-semibold"
          >
            BUSINESS
          </Link>
          <Link
            onClick={() => {
              searchRef.current.classList.remove("flex");
              searchRef.current.classList.add("hidden");
            }}
            href={"/category/travel"}
            className="bg-white text-xs p-1 dark:text-white dark:bg-darkMain dark:shadow-sm cursor-pointer dark:shadow-white  rounded-md font-semibold"
          >
            TRAVEL
          </Link>
          <Link
            onClick={() => {
              searchRef.current.classList.remove("flex");
              searchRef.current.classList.add("hidden");
            }}
            href={"/category/trends"}
            className="bg-white text-xs p-1 dark:text-white dark:bg-darkMain dark:shadow-sm cursor-pointer dark:shadow-white  rounded-md font-semibold"
          >
            TRENDS
          </Link>
          <Link
            onClick={() => {
              searchRef.current.classList.remove("flex");
              searchRef.current.classList.add("hidden");
            }}
            href={"/category/startups"}
            className="bg-white text-xs p-1 dark:text-white dark:bg-darkMain dark:shadow-sm cursor-pointer dark:shadow-white  rounded-md font-semibold"
          >
            STARTUPS
          </Link>
          <Link
            onClick={() => {
              searchRef.current.classList.remove("flex");
              searchRef.current.classList.add("hidden");
            }}
            href={"/category/news"}
            className="bg-white text-xs p-1 dark:text-white dark:bg-darkMain dark:shadow-sm cursor-pointer dark:shadow-white  rounded-md font-semibold"
          >
            NEWS
          </Link>
          <Link
            onClick={() => {
              searchRef.current.classList.remove("flex");
              searchRef.current.classList.add("hidden");
            }}
            href={"/category/technology"}
            className="bg-white text-xs p-1 dark:text-white dark:bg-darkMain dark:shadow-sm cursor-pointer dark:shadow-white  rounded-md font-semibold"
          >
            TECHNOLOGY
          </Link>
          <Link
            onClick={() => {
              searchRef.current.classList.remove("flex");
              searchRef.current.classList.add("hidden");
            }}
            href={"/category/management"}
            className="bg-white text-xs p-1 dark:text-white dark:bg-darkMain dark:shadow-sm cursor-pointer dark:shadow-white  rounded-md font-semibold"
          >
            MANAGEMENT
          </Link>
        </div>
      </div>
      <div
        ref={hideMenuRef}
        className="hideMenu flex absolute left-0 top-0 w-full h-screen bg-white p-5  flex-col justify-between transform -translate-x-[110%] transition-all duration-300 dark:bg-darkMain"
      >
        <div className="hm-top flex items-center justify-between">
          <div className="logo text-2xl font-bold dark:text-white">
            Next<span className="text-2xl text-mainThemeColor">.</span>js Blog
          </div>
          <div
            onClick={() => {
              hideMenuRef.current.classList.add("-translate-x-[110%]");
              hideMenuRef.current.classList.remove("-translate-x-0");
            }}
            className="hover:text-mainThemeColor dark:text-white"
          >
            <span>
              <FaXmark className="text-2xl cursor-pointer" />
            </span>
          </div>
        </div>

        <div className="hm-middle">
          <ul className="space-y-5 dark:text-white">
            <li>
              <Link
                onClick={handleClick}
                href={"/"}
                className="font-bold text-lg hover:text-mainThemeColor"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                href={"/categories"}
                className="font-bold text-lg hover:text-mainThemeColor"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                href={"/about"}
                className="font-bold text-lg hover:text-mainThemeColor"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                href={"/contact"}
                className="font-bold text-lg hover:text-mainThemeColor"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hm-bottom border-t-2 border-mainThemeColor w-full h-[70px] flex items-center justify-between p-5">
          <div className="icons flex gap-5 dark:text-white">
            <Link href={"/category/"}>
              <FaFacebook className="text-xl hover:text-mainThemeColor transition-all duration-300" />
            </Link>
            <Link href={"/category/"}>
              <FaTwitter className="text-xl hover:text-mainThemeColor transition-all duration-300" />
            </Link>
            <Link href={"/category/"}>
              <FaInstagram className="text-xl hover:text-mainThemeColor transition-all duration-300" />
            </Link>
            <Link href={"/category/"}>
              <FaLinkedin className="text-xl hover:text-mainThemeColor transition-all duration-300" />
            </Link>
          </div>
          <div
            className={`dark-light flex items-center transition-all duration-300 justify-between gap-2 bg-gray-200 w-[70px] h-[35px] py-1 px-1 rounded-full cursor-pointer ${
              isTrue ? "bg-gray-600" : ""
            }`}
          >
            <div
              onClick={() => {
                setIsTrue(false);
                document.documentElement.classList.remove("dark");
              }}
              className={` rounded-full h-[28px] w-[28px] flex transition-all duration-300 items-center justify-center cursor-pointer ${
                isTrue ? "bg-transparent text-white" : "bg-white"
              }`}
            >
              <FaSun className="text-sm" />
            </div>
            <div
              onClick={() => {
                setIsTrue(true);
                document.documentElement.classList.add("dark");
              }}
              className={`rounded-full h-[28px] w-[28px] flex items-center transition-all duration-300 justify-center cursor-pointer ${
                isTrue ? "bg-black text-white" : ""
              }`}
            >
              <FaMoon className="text-sm" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
