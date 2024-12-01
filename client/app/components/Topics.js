import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topics = () => {
  return (
    <div className="mt-10">
      <h4 className="text-base font-bold text-center opacity-70 dark:text-white">
        Explore Trending Topics
      </h4>

      <div className="categories mt-5 flex items-center gap-2 flex-wrap justify-center">
        <Link href={"/category/technology"}>
          <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg  dark:bg-darkMain dark:text-white dark:shadow-sm dark:shadow-white dark:hover:shadow-md dark:hover:shadow-white">
            <span>
              <Image
                src={"/tech@2x.webp"}
                width={"25"}
                height={"25"}
                alt="technology"
              />
            </span>
            <span className="font-bold">Technology</span>
          </div>
        </Link>
        <Link href={"/category/travel"}>
          <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg  dark:bg-darkMain dark:text-white dark:shadow-sm dark:shadow-white dark:hover:shadow-md dark:hover:shadow-white">
            <span>
              <Image
                src={"/travel@2x-1.webp"}
                width={"25"}
                height={"25"}
                alt="technology"
              />
            </span>
            <span className="font-bold">Travel</span>
          </div>
        </Link>
        <Link href={"/category/sport"}>
          <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg  dark:bg-darkMain dark:text-white dark:shadow-sm dark:shadow-white dark:hover:shadow-md dark:hover:shadow-white">
            <span>
              <Image
                src={"/sport@2x.webp"}
                width={"25"}
                height={"25"}
                alt="technology"
              />
            </span>
            <span className="font-bold">Sports</span>
          </div>
        </Link>
        <Link href={"/category/bussiness"}>
          <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg  dark:bg-darkMain dark:text-white dark:shadow-sm dark:shadow-white dark:hover:shadow-md dark:hover:shadow-white">
            <span>
              <Image
                src={"/bussiness@2x.webp"}
                width={"25"}
                height={"25"}
                alt="technology"
              />
            </span>
            <span className="font-bold">Business</span>
          </div>
        </Link>
        <Link href={"/category/management"}>
          <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg  dark:bg-darkMain dark:text-white dark:shadow-sm dark:shadow-white dark:hover:shadow-md dark:hover:shadow-white">
            <span>
              <Image
                src={"/manage@2x.webp"}
                width={"25"}
                height={"25"}
                alt="technology"
              />
            </span>
            <span className="font-bold">Management</span>
          </div>
        </Link>
        <Link href={"/category/startups"}>
          <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg  dark:bg-darkMain dark:text-white dark:shadow-sm dark:shadow-white dark:hover:shadow-md dark:hover:shadow-white">
            <span>
              <Image
                src={"/start@2x.webp"}
                width={"25"}
                height={"25"}
                alt="technology"
              />
            </span>
            <span className="font-bold">Startups</span>
          </div>
        </Link>
        <Link href={"/category/news"}>
          <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg  dark:bg-darkMain dark:text-white dark:shadow-sm dark:shadow-white dark:hover:shadow-md dark:hover:shadow-white">
            <span>
              <Image
                src={"/news@2x-1.webp"}
                width={"25"}
                height={"25"}
                alt="technology"
              />
            </span>
            <span className="font-bold">News</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Topics;
