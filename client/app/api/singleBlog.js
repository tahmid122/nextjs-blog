export const getSingleBlog = async (title) => {
  const res = await fetch("http://localhost:4000/single-blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  const blog = await res.json();
  return blog;
};
