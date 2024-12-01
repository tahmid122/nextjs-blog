import Link from "next/link";
import React from "react";
import SidebarHome from "./SidebarHome";
import Button from "./Button";
import { getAllBlogs } from "../api/getAllBlogs";
import Image from "next/image";

const Blogs = async () => {
  const blogs = await getAllBlogs();
  return (
    <div className="mt-20 lg:flex lg:items-start lg:gap-5 lg:justify-between">
      <div className="blogs flex flex-col items-center gap-5 lg:w-[60%]">
        {blogs &&
          blogs.map((blog, index) => {
            const { title, sortdesc, category, author, date, thumb, content } =
              blog;
            const formattedTitle = title.replace(/ /g, "-");
            return (
              <div
                className="blog flex lg:flex-row flex-col gap-5  w-full border-b-2 pb-10"
                key={index}
              >
                <div className="blog-img w-full object-cover relative overflow-hidden lg:w-[60%]">
                  <Image
                    src={thumb}
                    alt="image"
                    className="object-cover rounded-2xl w-full h-full"
                    width={500}
                    height={0}
                  />

                  <Link
                    href={`/category/${category}`}
                    className="absolute left-4 top-4 font-bold bg-white py-1 px-2 rounded-lg text-xs"
                  >
                    {category.toUpperCase()}
                  </Link>
                </div>
                <div className="blog-desc flex flex-col gap-3 justify-between ">
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">
                      <Link href={"/"} className="text-mainThemeColor ">
                        {author}
                      </Link>{" "}
                      <span className="opacity-70 dark:text-white">{date}</span>
                    </span>
                    <Link
                      href={`/blogs/${formattedTitle}`}
                      className="hover:opacity-70 dark:text-white"
                    >
                      <h1 className="text-xl font-bold lg:text-2xl">{title}</h1>
                    </Link>
                    <p className="opacity-80 dark:text-white">{sortdesc}</p>
                  </div>
                  <div>
                    <Link href={`/blogs/${formattedTitle}`}>
                      <Button text={"Discover More"} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <SidebarHome />
    </div>
  );
};

export default Blogs;
