import { categoryWiseBlogs } from "@/app/api/categoryWise";
import NewsLetter from "@/app/components/NewsLetter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const category = (await params).slug;
  const blogs = await categoryWiseBlogs(category);
  let img = null;
  if (category == "technology") {
    img = "/demo-category-0001.webp";
  }
  if (category == "travel") {
    img = "/demo-category-0002.webp";
  }
  if (category == "sport") {
    img = "/demo-category-0003.webp";
  }
  if (category == "business") {
    img = "/demo-category-0004.webp";
  }
  if (category == "management") {
    img = "/demo-category-0005.webp";
  }
  if (category == "trends") {
    img = "/demo-category-0006.webp";
  }
  if (category == "startups") {
    img = "/demo-category-0007.webp";
  }
  if (category == "news") {
    img = "/demo-category-0008.webp";
  }
  return (
    <div className="p-5  space-y-5 mt-10">
      <div className="flex flex-col gap-3 justify-center border-b-2 pb-10">
        <Image
          src={img}
          alt={category}
          className="w-[100px] h-[100px] object-cover rounded-md"
          width={500}
          height={500}
        />
        <h1 className="text-3xl font-bold dark:text-white">
          {category.toUpperCase()}
        </h1>
        <p className="opacity-80 lg:w-[30%] dark:text-white">
          Stay ahead of the curve with the newest developments in technology,
          from cutting-edge gadgets to breakthroughs in AI, cybersecurity, and
          beyond.
        </p>
      </div>
      <div className=" lg:w-[90%] lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-10 py-10 dark:text-white">
        {blogs &&
          blogs.map((blog, index) => {
            const { title, sortdesc, category, author, date, thumb, content } =
              blog;
            const formatedTitle = title.replace(/ /g, "-");
            return (
              <div
                className="blog flex flex-col gap-5  w-full  pb-10"
                key={index}
              >
                <div className="blog-img object-cover relative overflow-hidden">
                  <Image
                    src={thumb}
                    className="w-full object-cover h-auto rounded-2xl"
                    alt="image"
                    width={500}
                    height={250}
                  />
                  <Link
                    href={`/category/${category}`}
                    className="absolute left-4 top-4 font-bold bg-white py-1 px-2 rounded-lg text-xs dark:text-black"
                  >
                    {category.toUpperCase()}
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
                      href={`/blogs/${formatedTitle}`}
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
