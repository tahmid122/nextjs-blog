import React from "react";

const Button = ({ text, width }) => {
  return (
    <div>
      <button
        className={`blog-btn bg-mainThemeColor text-white font-bold py-2 px-3 rounded-md min-w-[150px] hover:shadow-lg dark:bg-darkMain dark:shadow-sm dark:shadow-white ${width} dark:hover:shadow-md dark:hover:shadow-white`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
