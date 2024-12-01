import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="mb-5 px-5 flex gap-4 flex-col items-center justify-center lg:justify-between lg:items-center lg:flex-row">
      <div className="logo lg:text-start">
        <Link href={"/"} className=" text-2xl font-bold dark:text-white">
          Next<span className="text-2xl text-mainThemeColor">.</span>js Blog
        </Link>
        <div className="text-xs hidden lg:block font-bold dark:text-white">
          <span>&copy; 2024 - Next.js Blog All Rights Reserved.</span>
        </div>
      </div>
      <div>
        <span className="font-semibold">Developed By : </span>
        <Link
          className="font-bold"
          href={"https://tahmidalam.vercel.app/"}
          target="_blank"
        >
          Tahmid Alam
        </Link>
      </div>
      <div className="icons flex gap-5">
        <Link href={"/"}>
          <FaFacebook className="text-xl hover:text-mainThemeColor transition-all duration-300 dark:text-white dark:hover:text-mainThemeColor" />
        </Link>
        <Link href={"/"}>
          <FaTwitter className="text-xl hover:text-mainThemeColor transition-all duration-300 dark:text-white dark:hover:text-mainThemeColor" />
        </Link>
        <Link href={"/"}>
          <FaInstagram className="text-xl hover:text-mainThemeColor transition-all duration-300 dark:text-white dark:hover:text-mainThemeColor" />
        </Link>
        <Link href={"/"}>
          <FaLinkedin className="text-xl hover:text-mainThemeColor transition-all duration-300 dark:text-white dark:hover:text-mainThemeColor" />
        </Link>
      </div>
      <div className="text-xs lg:hidden font-bold dark:text-white">
        <span>&copy; 2024 - Next.js Blog All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
