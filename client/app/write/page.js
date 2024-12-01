"use client";
import axios from "axios";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { postBlogs } from "../api/blogsPost";
import { redirect } from "next/navigation";
import Image from "next/image";
// Dynamically import JoditEditor to prevent SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const Write = () => {
  const [content, setContent] = useState("");
  const [image2, setImage2] = useState(null);
  const [uploading2, setUploading2] = useState(false);
  const [imageLink2, setImageLink2] = useState("");
  const [blogData, setBlogData] = useState({
    title: "",
    sortdesc: "",
    category: "",
    author: "",
    date: "",
    thumb: "",
    content: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBlogData({ ...blogData, [name]: value });
  };
  const uploadImage2 = async () => {
    if (!image2) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("file", image2);
    formData.append("upload_preset", "unsigned_upload"); // Replace with your preset name

    try {
      setUploading2(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dzatule9f/image/upload",
        formData
      );
      console.log("Uploaded:", response.data);
      setImageLink2(response.data.secure_url);
      setBlogData({ ...blogData, thumb: response.data.secure_url });
      console.log(blogData);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed!");
    } finally {
      setUploading2(false);
    }
  };
  //upload image
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [imageLink, setImageLink] = useState("");
  const uploadImage = async () => {
    if (!image) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "unsigned_upload"); // Replace with your preset name

    try {
      setUploading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dzatule9f/image/upload",
        formData
      );
      setImageLink(response.data.secure_url);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed!");
    } finally {
      setUploading(false);
    }
  };
  const editor = useRef(null);
  return (
    <div className="mt-0 p-5 flex flex-col gap-3 ">
      <div className="upload-blog">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            placeholder="Blog Title"
            className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain dark:text-white"
          />
          <textarea
            name="sortdesc"
            required
            onChange={handleChange}
            placeholder="Sort Description"
            className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain dark:text-white h-[100px]"
          ></textarea>
          <select
            name="author"
            required
            onChange={handleChange}
            id=""
            className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain dark:text-white"
          >
            <option value="Select Author">Select Author</option>
            <option value="Tahmid Alam">Tahmid Alam</option>
          </select>
          <select
            name="category"
            required
            onChange={handleChange}
            id=""
            className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain dark:text-white"
          >
            <option value="Select Category">Select Category</option>
            <option value="technology">Technology</option>
            <option value="travel">Travel</option>
            <option value="sport">Sport</option>
            <option value="business">Business</option>
            <option value="management">Management</option>
            <option value="trends">Trends</option>
            <option value="startups">Startups</option>
            <option value="news">News</option>
          </select>
          <input
            type="date"
            required
            name="date"
            onChange={handleChange}
            className="outline-none p-2 rounded-md border border-gray-400 placeholder:font-semibold dark:bg-darkMain dark:text-white"
          />
          <div className="flex items-center gap-2">
            <label htmlFor="thumb" className="dark:text-white font-semibold">
              Blog Thumbnail :
            </label>
            <input
              type="file"
              required
              accept="image/*"
              onChange={(e) => {
                setImage2(e.target.files[0]);
              }}
            />
            <button
              onClick={uploadImage2}
              disabled={uploading2}
              className={`blog-btn bg-mainThemeColor text-white font-bold py-2 px-3 rounded-md w-[150px] hover:shadow-lg dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:hover:shadow-md dark:hover:shadow-white`}
            >
              {uploading2 ? "Uploading..." : "Upload Thumb"}
            </button>
            <span className="font-bold dark:text-white">
              Link: {imageLink2}
            </span>
          </div>
        </div>
      </div>

      <div className="image-upload">
        <div className="flex flex-col gap-3">
          <h2 className="dark:text-white font-semibold">
            If you want to use any image on your blog post you must upload it
            first. You will get a link for the image. Then use it into your post
          </h2>
          <div className="flex gap-3">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {preview && (
              <div style={{ margin: "20px 0" }}>
                <Image
                  src={preview}
                  alt="Preview"
                  style={{ maxWidth: "200px" }}
                  width={500}
                  height={500}
                />
              </div>
            )}
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={uploadImage}
              disabled={uploading}
              className={`blog-btn bg-mainThemeColor text-white font-bold py-2 px-3 rounded-md w-[150px] hover:shadow-lg dark:bg-darkMain dark:shadow-sm dark:shadow-white dark:hover:shadow-md dark:hover:shadow-white`}
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </button>
            <span>
              <span className="font-bold dark:text-white">Link:</span>{" "}
              <span className="font-bold dark:text-white">{imageLink}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="editor">
        <div>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setBlogData({ ...blogData, content: newContent });
            }}
          />
          <button
            className={`blog-btn mt-5 bg-mainThemeColor text-white font-bold py-2 px-3 rounded-md min-w-[150px] hover:shadow-lg dark:bg-darkMain dark:shadow-sm dark:shadow-white  dark:hover:shadow-md dark:hover:shadow-white`}
            onClick={async () => {
              const post = await postBlogs(blogData);
              if (post) {
                alert("Successfully posted your blog");
                redirect("/");
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
