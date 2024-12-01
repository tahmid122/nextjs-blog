export const getAllBlogs = async () => {
  const res = await fetch("http://localhost:4000/blogs", {
    method: "GET",
  });
  const allBlogs = await res.json();
  return allBlogs;
};
