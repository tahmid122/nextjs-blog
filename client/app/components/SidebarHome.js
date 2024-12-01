import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLocationDot,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaLink,
} from "react-icons/fa6";
const SidebarHome = () => {
  return (
    <div className="mt-10 space-y-5 lg:mt-0 lg:w-[30%]">
      <div className="about flex flex-col gap-3 shadow-lg p-5 rounded-lg bg-white dark:bg-darkMain">
        <h4 className="font-bold dark:text-white">ABOUT</h4>
        <div className="name-image flex gap-3">
          <Link href={"/author"}>
            {" "}
            <Image
              src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/Ethan-Caldwell.webp"
              alt="image"
              className="w-[50px] h-[50px] rounded-full"
              width={500}
              height={500}
            />
          </Link>
          <div className="details">
            <Link href={"/author/Ethan-Caldwell"}>
              <h3 className="font-bold dark:text-white">Tahmid Alam</h3>
            </Link>
            <span className="font-semibold text-sm opacity-70 dark:text-white">
              Reflective Blogger
            </span>
          </div>
        </div>
        <div className="desc opacity-80 dark:text-white">
          Tahmid Alam shares thoughtful insights and reflections on life,
          culture, and personal growth. His work explores the intersections of
          creativity and experience, offering readers unique perspectives.
        </div>
        <div className="location flex gap-1 items-center">
          <FaLocationDot className="text-mainThemeColor text-2xl" />{" "}
          <span className="dark:text-white">Rangpur, Bangladesh</span>
        </div>
        <div className="social">
          <div className="icons flex gap-5">
            <Link href={"/"}>
              <FaFacebook className="text-2xl hover:text-mainThemeColor transition-all duration-300 dark:text-white dark:hover:text-mainThemeColor" />
            </Link>
            <Link href={"/"}>
              <FaTwitter className="text-2xl hover:text-mainThemeColor transition-all duration-300 dark:text-white dark:hover:text-mainThemeColor" />
            </Link>
            <Link href={"/"}>
              <FaInstagram className="text-2xl hover:text-mainThemeColor transition-all duration-300 dark:text-white dark:hover:text-mainThemeColor" />
            </Link>
            <Link href={"/"}>
              <FaLinkedin className="text-2xl hover:text-mainThemeColor transition-all duration-300 dark:text-white dark:hover:text-mainThemeColor" />
            </Link>
          </div>
        </div>
      </div>
      <div className="about flex flex-col gap-3 shadow-lg p-5 rounded-lg bg-white dark:bg-darkMain">
        <h4 className="font-bold dark:text-white">CREATING</h4>
        <div>
          <Link href={"/"}>
            <h4 className="text-lg font-bold flex items-center gap-2 text-mainThemeColor hover:text-black dark:hover:text-white">
              Heartfelt Reflections <FaLink />
            </h4>
          </Link>
          <p className="text-[15px] dark:text-white">
            A deep dive into emotional experiences and personal growth, sharing
            valuable insights on lifes most meaningful moments.
          </p>
        </div>
        <div>
          <Link href={"/"}>
            <h4 className="text-lg font-bold flex items-center gap-2 text-mainThemeColor hover:text-black dark:hover:text-white">
              Latest Tech Gadgets <FaLink />
            </h4>
          </Link>
          <p className="text-[15px] dark:text-white">
            A look ahead at the emerging trends that will shape the world in
            2024, from lifestyle shifts to groundbreaking innovations.
          </p>
        </div>
        <div>
          <Link href={"/"}>
            <h4 className="text-lg font-bold flex items-center gap-2 text-mainThemeColor hover:text-black dark:hover:text-white">
              Trends for 2024 <FaLink />
            </h4>
          </Link>
          <p className="text-[15px] dark:text-white">
            Explore the newest and most innovative technology products hitting
            the market, from smart devices to cutting-edge tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarHome;
