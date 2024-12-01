import React from "react";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <div className=" border-b-2 pb-5 w-full flex items-center justify-center">
      <div className="mt-10 text-center flex flex-col justify-center items-center gap-3 lg:w-[400px]">
        <h1 className="text-3xl font-semibold dark:text-white">
          Subscribe to our Newsletter
        </h1>
        <p className="opacity-80 dark:text-white">
          Subscribe to our email newsletter to get the latest posts delivered
          right to your email.
        </p>

        <div className="flex flex-col gap-3 w-full relative">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="outline-none p-3 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain dark:text-white"
          />
          <Button text={"Subscribe"} width={"w-full"} />
        </div>

        <span className="text-sm font-bold dark:text-white">
          Pure inspiration, zero spam ✨
        </span>
      </div>
    </div>
  );
};

export default NewsLetter;
