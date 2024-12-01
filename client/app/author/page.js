import NewsLetter from "@/app/components/NewsLetter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLocationDot,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { getAllBlogs } from "../api/getAllBlogs";

const page = async () => {
  const blogs = await getAllBlogs();
  return (
    <div className="mt-10 p-5">
      <div className=" lg:w-[40%] about flex flex-col gap-3 bg-white border-b-2 pb-10 dark:text-white dark:bg-darkMain">
        <div className="name-image flex gap-3 items-center">
          <Link href={"/author/Ethan-Caldwell"}>
            <Image
              src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/Ethan-Caldwell.webp"
              alt="image"
              className="w-[100px] h-[100px] rounded-full"
              width={100}
              height={100}
            />
          </Link>
          <div className="details">
            <Link href={"/author/Ethan-Caldwell"}>
              <h3 className="font-bold text-3xl">Tahmid Alam</h3>
            </Link>
            <span className="font-semibold text-sm opacity-70">
              Reflective Blogger
            </span>
          </div>
        </div>
        <div className="desc opacity-80">
          Tahmid Alam shares thoughtful insights and reflections on life,
          culture, and personal growth. His work explores the intersections of
          creativity and experience, offering readers unique perspectives.
        </div>
        <div className="location flex gap-1 items-center">
          <FaLocationDot className="text-mainThemeColor text-2xl" />{" "}
          <span>Rangpur, Bangladesh</span>
        </div>
        <div className="social">
          <div className="icons flex gap-5">
            <Link href={"/"}>
              <FaFacebook className="text-2xl hover:text-mainThemeColor transition-all duration-300" />
            </Link>
            <Link href={"/"}>
              <FaTwitter className="text-2xl hover:text-mainThemeColor transition-all duration-300" />
            </Link>
            <Link href={"/"}>
              <FaInstagram className="text-2xl hover:text-mainThemeColor transition-all duration-300" />
            </Link>
            <Link href={"/"}>
              <FaLinkedin className="text-2xl hover:text-mainThemeColor transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:grid lg:grid-cols-3 lg:gap-6 dark:text-white">
        {blogs &&
          blogs.map((blog, index) => {
            const { title, sortdesc, category, author, date, thumb, content } =
              blog;
            const formattedTitle = title.replace(/ /g, "-");

            return (
              <div
                className="blog flex flex-col gap-5  w-full  pb-10"
                key={index}
              >
                <div className="blog-img object-cover relative overflow-hidden">
                  <Image
                    src={thumb}
                    alt="image"
                    className="object-cover rounded-2xl w-full h-auto"
                    width={500}
                    height={250}
                  />
                  <Link
                    href={`/category/${category}`}
                    className="absolute left-4 top-4 font-bold bg-white py-1 px-2 rounded-lg text-xs dark:text-black"
                  >
                    SPORT
                  </Link>
                </div>
                <div className="blog-desc flex flex-col gap-3 justify-between ">
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">
                      <Link href={"/author"} className="text-mainThemeColor ">
                        {author}
                      </Link>{" "}
                      <span className="opacity-70">{date}</span>
                    </span>
                    <Link
                      href={`/blogs/${formattedTitle}`}
                      className="hover:opacity-70"
                    >
                      <h1 className="text-xl font-bold lg:text-2xl">{title}</h1>
                    </Link>
                    <p className="opacity-80">{sortdesc}</p>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default page;
