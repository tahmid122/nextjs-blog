import React from "react";
import NewsLetter from "../components/NewsLetter";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-10 p-5">
      <h1 className="font-bold text-4xl mb-10 dark:text-white">Categories</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="card w-full h-[400px] rounded-xl overflow-hidden bg-blue-300 relative ">
          <Image
            src="/demo-category-0001.webp"
            alt="image"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
            width={500}
            height={500}
          />
          <Link
            href={"/category/technology"}
            className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg border dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:border-none">
              <span>
                <Image
                  src={"/tech@2x.webp"}
                  width={"25"}
                  height={"25"}
                  alt="technology"
                />
              </span>
              <span className="font-bold dark:text-white">Technology</span>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[400px] rounded-xl overflow-hidden bg-blue-300 relative">
          <Image
            src="/demo-category-0002.webp"
            alt="image"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
            width={500}
            height={500}
          />
          <Link
            href={"/category/travel"}
            className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg border dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:border-none">
              <span>
                <Image
                  src={"/travel@2x-1.webp"}
                  width={"25"}
                  height={"25"}
                  alt="technology"
                />
              </span>
              <span className="font-bold dark:text-white">Travel</span>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[400px] rounded-xl overflow-hidden bg-blue-300 relative">
          <Image
            src="/demo-category-0003.webp"
            alt="image"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
            width={500}
            height={500}
          />
          <Link
            href={"/category/sport"}
            className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg border dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:border-none">
              <span>
                <Image
                  src={"/sport@2x.webp"}
                  width={"25"}
                  height={"25"}
                  alt="technology"
                />
              </span>
              <span className="font-bold dark:text-white">Sport</span>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[400px] rounded-xl overflow-hidden bg-blue-300 relative">
          <Image
            src="/demo-category-0004.webp"
            alt="image"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
            width={500}
            height={500}
          />
          <Link
            href={"/category/business"}
            className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg border dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:border-none">
              <span>
                <Image
                  src={"/bussiness@2x.webp"}
                  width={"25"}
                  height={"25"}
                  alt="technology"
                />
              </span>
              <span className="font-bold dark:text-white">Business</span>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[400px] rounded-xl overflow-hidden bg-blue-300 relative">
          <Image
            src="/demo-category-0005.webp"
            alt="image"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
            width={500}
            height={500}
          />
          <Link
            href={"/category/management"}
            className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg border dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:border-none">
              <span>
                <Image
                  src={"/manage@2x.webp"}
                  width={"25"}
                  height={"25"}
                  alt="technology"
                />
              </span>
              <span className="font-bold dark:text-white">Management</span>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[400px] rounded-xl overflow-hidden bg-blue-300 relative">
          <Image
            src="/demo-category-0006.webp"
            alt="image"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
            width={500}
            height={500}
          />
          <Link
            href={"/category/trends"}
            className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg border dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:border-none">
              <span>
                <Image
                  src={"/trand@2x.webp"}
                  width={"25"}
                  height={"25"}
                  alt="technology"
                />
              </span>
              <span className="font-bold dark:text-white">Trends</span>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[400px] rounded-xl overflow-hidden bg-blue-300 relative">
          <Image
            src="/demo-category-0007.webp"
            alt="image"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
            width={500}
            height={500}
          />
          <Link
            href={"/category/startups"}
            className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg border dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:border-none">
              <span>
                <Image
                  src={"/start@2x.webp"}
                  width={"25"}
                  height={"25"}
                  alt="technology"
                />
              </span>
              <span className="font-bold dark:text-white">Startups</span>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[400px] rounded-xl overflow-hidden bg-blue-300 relative">
          <Image
            src="/demo-category-0008.webp"
            alt="image"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
            width={500}
            height={500}
          />
          <Link
            href={"/category/news"}
            className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <div className="category flex items-center gap-2 h-[50px] bg-white py-2 px-3 rounded-full cursor-pointer shadow-lg border dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:border-none">
              <span>
                <Image
                  src={"/news@2x-1.webp"}
                  width={"25"}
                  height={"25"}
                  alt="technology"
                />
              </span>
              <span className="font-bold dark:text-white">News</span>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default page;
