import React from "react";
import NewsLetter from "../components/NewsLetter";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-10 p-5">
      <h1 className="text-4xl font-semibold text-center leading-10 dark:text-white">
        Hey,
        <span className="text-mainThemeColor"> Wonderful </span>
        to Meet You
      </h1>
      <div className="flex flex-col items-center gap-3 justify-around w-full py-4 lg:flex-row lg:py-10 lg:gap-3 lg:justify-center">
        <div>
          <Image
            src="/about-image-001.webp"
            alt="image"
            className="object-cover w-[400px] h-[300px] rounded-2xl"
            width={400}
            height={300}
          />
        </div>

        <div>
          <Image
            src="/about-image-002.webp"
            alt="image"
            className="object-cover w-[400px] h-[300px] rounded-2xl"
            width={400}
            height={300}
          />
        </div>

        <div>
          <Image
            src="/about-image-003.webp"
            alt="image"
            className="object-cover w-[400px] h-[300px] rounded-2xl"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div className="lg:w-[50%] lg:mx-auto dark:text-white">
        <h3 className="font-bold text-xl ">
          By 2016, we began to see the fruits of our labor as word spread about
          our work, leading us to our first major client — a regional retail
          chain. This was a pivotal moment for us, as it allowed us to hire our
          first employee. Emma stepped up to lead user experience design, while
          Liam and I focused on coding and project management.
        </h3>
        <h3 className="font-bold text-xl mt-5">
          As we gathered to reflect on our incredible journey, hosting a
          community event to showcase local tech talent felt like the perfect
          way to give back and inspire the next generation of innovators. It
          reminded us that with passion, collaboration, and a bit of code,
          anything is possible.
        </h3>
      </div>
      <div className="py-5 flex flex-col gap-3 items-center justify-center lg:flex-row lg:gap-5 mt-10 dark:text-white">
        <div className="card px-5 py-10 shadow-lg rounded-xl space-y-2 lg:w-[25%] h-[250px]  dark:bg-darkMain dark:shadow-sm dark:shadow-white">
          <Image
            src="/about-icon-001.webp"
            alt="image"
            className="w-[50px] h-[50px] mb-5"
            width={50}
            height={50}
          />
          <h3 className="font-bold text-lg">Empowering Innovation</h3>
          <p className="opacity-80">
            We consistently push the boundaries of technology, leading to unique
            and effective solutions.
          </p>
        </div>
        <div className="card px-5 py-10 shadow-lg rounded-xl space-y-2 lg:w-[25%] h-[250px] dark:bg-darkMain dark:shadow-sm dark:shadow-white">
          <Image
            src="/about-icon-002.webp"
            alt="image"
            className="w-[50px] h-[50px] mb-5"
            width={50}
            height={50}
          />
          <h3 className="font-bold text-lg">Community-Centric Approach</h3>
          <p className="opacity-80">
            Our commitment to giving back not only enhances their reputation but
            also strengthens ties within the community.
          </p>
        </div>
        <div className="card px-5 py-10 shadow-lg rounded-xl space-y-2 lg:w-[25%] h-[250px] dark:bg-darkMain dark:shadow-sm dark:shadow-white">
          <Image
            src="/about-icon-003.webp"
            alt="image"
            className="w-[50px] h-[50px] mb-5"
            width={50}
            height={50}
          />
          <h3 className="font-bold text-lg">Flexibility & Adaptability</h3>
          <p className="opacity-80">
            Our team agile work environment allows them to quickly adapt to
            changing market needs.
          </p>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default About;
