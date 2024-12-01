"use client";
import React, { useState } from "react";
import Button from "./Button";

const Comment = () => {
  const [isTrue, setIsTrue] = useState(false);
  const handleClick = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div>
      <div onClick={handleClick}>
        <Button text={"Write a comment"} />
      </div>
      <div className={`mt-5 ${isTrue ? "block" : "hidden"}`}>
        <form className="p-5 lg:p-10 shadow-lg rounded-xl flex flex-col justify-center gap-3 lg:w-[50%] lg:mx-auto bg-white dark:text-white dark:bg-darkMain">
          <div>
            <h3 className="font-bold text-lg">Leave a Comment</h3>
            <p className="text-sm">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="Name">Name *</label>
            <input
              type="text"
              className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain"
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="Name">Email *</label>
            <input
              type="email"
              className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain"
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="Name">Message *</label>
            <textarea
              className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold h-[120px] dark:bg-darkMain"
              name="message"
              id=""
            ></textarea>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="save"
              id=""
              className="h-[20px] w-[20px] dark:bg-darkMain"
            />
            <label htmlFor="Save" className="text-sm">
              Save my name and email in this browser for the next time I
              comment.
            </label>
          </div>
          <Button text={"Submit"} width={"w-full"} />
        </form>
      </div>
    </div>
  );
};

export default Comment;
