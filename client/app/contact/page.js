import React from "react";
import NewsLetter from "../components/NewsLetter";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="mt-10 p-5">
      <div className="w-full flex items-center justify-center gap-2 flex-col mb-10">
        <h1 className="text-3xl font-semibold text-center leading-10 dark:text-white">
          Feel Free to
          <span className="text-mainThemeColor"> Contact </span>
          Me
        </h1>
        <p className="text-center opacity-80 dark:text-white">
          Lorem ipsum dolor sit amet consectetur. Facilisis eu sit commodo sit.{" "}
          <br className="hidden lg:block" />
          Phasellus elit sit sit dolor risus faucibus vel aliquam. Fames mattis.
        </p>
      </div>

      <form className="p-5 lg:p-10 shadow-lg rounded-xl flex flex-col justify-center gap-3 lg:w-[50%] lg:mx-auto bg-white dark:bg-darkMain dark:text-white dark:shadow-sm dark:shadow-white">
        <h3 className="font-bold text-lg dark:text-white">
          Ready to Get Started?
        </h3>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="Name dark:text-white">Name *</label>
          <input
            type="text"
            required
            className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain dark:text-white"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="Name dark:text-white">Email *</label>
          <input
            type="email"
            className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain dark:text-white"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="Name">Message *</label>
          <textarea
            className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold h-[120px] dark:text-white dark:bg-darkMain"
            name="message"
            id=""
          ></textarea>
        </div>
        <Button text={"Submit"} />
      </form>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default Contact;
