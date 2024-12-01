import { getAllBlogs } from "@/app/api/getAllBlogs";
import { getSingleBlog } from "@/app/api/singleBlog";
import Comment from "@/app/components/Comment";
import NewsLetter from "@/app/components/NewsLetter";
import ScrollTopButton from "@/app/components/ScrollTopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
const page = async ({ params }) => {
  const blogTitle = (await params).blog;
  const formatedBlogTitle = blogTitle.replace(/-/g, " ");
  const decodedText = decodeURIComponent(formatedBlogTitle);
  const blogPost = await getSingleBlog(decodedText);
  const { title, sortdesc, category, author, date, thumb, content } = blogPost;
  //
  const allBlogs = await getAllBlogs();
  const blogIndex = allBlogs.findIndex((blog) => blog.title === title);
  const prevBlog = blogIndex > 0 ? allBlogs[blogIndex - 1] : null;
  const nextBlog = blogIndex >= 0 ? allBlogs[blogIndex + 1] : null;
  const formatedBlogTitleP = prevBlog && prevBlog.title.replace(/ /g, "-");
  const formatedBlogTitleN = nextBlog && nextBlog.title.replace(/ /g, "-");
  const nextBlogs = allBlogs.filter(
    (blog) =>
      blog.title !== title &&
      blog.title !== (prevBlog && prevBlog.title) &&
      blog.title !== (nextBlog && nextBlog.title)
  );
  // console.log(prevBlog);
  // console.log(nextBlog);
  return (
    <div className="p-5 relative dark:text-white">
      <div>
        <div className="header text-center flex flex-col items-center justify-center gap-3 dark:text-white">
          <span className="font-semibold">
            <Link href={"/"} className="text-mainThemeColor ">
              {author}
            </Link>{" "}
            <span className="opacity-70">{date}</span>
          </span>

          <h1 className="text-3xl font-semibold lg:text-4xl lg:font-bold">
            {title}
          </h1>
          <p className="text-lg opacity-70 lg:w-[50%]">{sortdesc}</p>
          <span>
            <Link
              href={`/category/${category}`}
              className="font-bold bg-white py-1 px-2 rounded-lg text-xs dark:text-black"
            >
              {category.toUpperCase()}
            </Link>
          </span>
        </div>

        <div className="main-body py-10 dark:text-white">
          <div className="w-full flex items-center justify-center ">
            <Image
              className="w-full rounded-xl lg:w-[80%]"
              src={thumb}
              alt={title}
              width={1000}
              height={1000}
            />
          </div>

          <div
            className="desc py-10 text-lg dark:text-white text-black lg:w-[70%] lg:mx-auto"
            dangerouslySetInnerHTML={{
              __html: content.replace(
                /style="(.*?)"/g,
                'style="$1; color: inherit;"'
              ),
            }}
          ></div>
        </div>

        <div className="flex items-center justify-between  lg:w-[70%] lg:mx-auto dark:text-white">
          <span className="font-semibold">
            <Link href={"/author"} className="text-mainThemeColor ">
              {author}
            </Link>{" "}
            <span className="opacity-70">{date}</span>
          </span>
          <span>
            <Link
              href={`/category/${category}`}
              className="font-bold bg-white py-1 px-2 rounded-lg text-xs dark:text-black"
            >
              SPORT
            </Link>
          </span>
        </div>
        <div className="flex items-center gap-5 mt-5 border-b-2 pb-5  lg:w-[70%] lg:mx-auto dark:text-white">
          <span className="font-semibold text-sm">SHARE</span>
          <div className="icons flex gap-3">
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
      <div className="mt-10 flex flex-col gap-3 items-center justify-center  lg:w-[70%] lg:mx-auto lg:flex-row dark:text-white">
        {prevBlog && (
          <Link
            href={`/blogs/${formatedBlogTitleP}`}
            className="hover:opacity-80"
          >
            <div className="card w-full p-5 shadow-lg rounded-xl flex flex-col gap-3 cursor-pointer">
              <div className="grid grid-cols-3">
                <span className="font-bold">&lt;</span>
                <span className="text-sm font-semibold tracking-wide">
                  PREVIOUS ARTICLE
                </span>
              </div>
              <h2 className="font-bold text-lg text-center">
                {prevBlog.title}
              </h2>
            </div>
          </Link>
        )}
        {nextBlog && (
          <Link
            href={`/blogs/${formatedBlogTitleN}`}
            className="hover:opacity-80 boi"
          >
            <div className="card w-full p-5 shadow-lg rounded-xl flex flex-col gap-3 cursor-pointer">
              <div className="flex items-center justify-between">
                <span></span>
                <span className="text-sm font-semibold tracking-wide">
                  NEXT ARTICLE
                </span>
                <span className="font-bold">&gt;</span>
              </div>
              <h2 className="font-bold text-lg text-center">
                {nextBlog.title}
              </h2>
            </div>
          </Link>
        )}
      </div>
      <div className="mt-10  lg:w-[70%] lg:mx-auto">
        <Comment />
      </div>
      <div className="mt-10">
        <h2 className="text-4xl font-bold dark:text-white">Read Next</h2>
        <div className="mt-5 lg:grid lg:grid-cols-3 lg:gap-6 dark:text-white">
          {nextBlogs &&
            nextBlogs.map((nextBlog, index) => {
              const {
                title,
                sortdesc,
                category,
                author,
                date,
                thumb,
                content,
              } = nextBlog;
              const formatedBlogTitle = nextBlog.title.replace(/ /g, "-");
              return (
                <div
                  className="blog flex flex-col gap-5  w-full  pb-10"
                  key={index}
                >
                  <div className="blog-img object-cover relative overflow-hidden">
                    {/* <img
                      src={thumb}
                      className="w-full object-cover h-[250px] rounded-2xl"
                      alt="image"
                    /> */}
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
                        href={`/blogs/${formatedBlogTitle}`}
                        className="hover:opacity-70"
                      >
                        <h1 className="text-xl font-bold lg:text-2xl">
                          {title}
                        </h1>
                      </Link>
                      <p className="opacity-80">{sortdesc}</p>
                    </div>
                    <div></div>
                  </div>
                </div>
              );
            })}

          {/* <div className="blog flex flex-col gap-5  w-full  pb-10">
            <div className="blog-img object-cover relative overflow-hidden">
              <img
                src={
                  "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0037.webp"
                }
                className="w-full object-cover h-[250px] rounded-2xl"
                alt="image"
              />
              <Link
                href={"/category/sport"}
                className="absolute left-4 top-4 font-bold bg-white py-1 px-2 rounded-lg text-xs dark:text-black"
              >
                SPORT
              </Link>
            </div>
            <div className="blog-desc flex flex-col gap-3 justify-between ">
              <div className="flex flex-col gap-2">
                <span className="font-semibold">
                  <Link href={"/"} className="text-mainThemeColor ">
                    Ethan Caldwell
                  </Link>{" "}
                  <span className="opacity-70">on September 24, 2024</span>
                </span>
                <Link
                  href={
                    "/blogs/Key Sports Trends for 2024: From AI to Virtual Reality"
                  }
                  className="hover:opacity-70"
                >
                  <h1 className="text-xl font-bold lg:text-2xl">
                    Key Sports Trends for 2024: From AI to Virtual Reality
                  </h1>
                </Link>
                <p className="opacity-80">
                  Dive into the key sports trends like AI and virtual reality
                  set to redefine the sports industry in 2024.
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="blog flex flex-col gap-5  w-full  pb-10">
            <div className="blog-img object-cover relative overflow-hidden">
              <img
                src={
                  "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0037.webp"
                }
                className="w-full object-cover h-[250px] rounded-2xl"
                alt="image"
              />
              <Link
                href={"/category/sport"}
                className="absolute left-4 top-4 font-bold bg-white py-1 px-2 rounded-lg text-xs dark:text-black"
              >
                SPORT
              </Link>
            </div>
            <div className="blog-desc flex flex-col gap-3 justify-between ">
              <div className="flex flex-col gap-2">
                <span className="font-semibold">
                  <Link href={"/"} className="text-mainThemeColor ">
                    Ethan Caldwell
                  </Link>{" "}
                  <span className="opacity-70">on September 24, 2024</span>
                </span>
                <Link
                  href={
                    "/blogs/Key Sports Trends for 2024: From AI to Virtual Reality"
                  }
                  className="hover:opacity-70"
                >
                  <h1 className="text-xl font-bold lg:text-2xl">
                    Key Sports Trends for 2024: From AI to Virtual Reality
                  </h1>
                </Link>
                <p className="opacity-80">
                  Dive into the key sports trends like AI and virtual reality
                  set to redefine the sports industry in 2024.
                </p>
              </div>
              <div></div>
            </div>
          </div> */}
        </div>
      </div>
      <div>
        <ScrollTopButton />
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default page;
