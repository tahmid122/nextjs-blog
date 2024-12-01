export const postBlogs = async (blog) => {
  const { title, sortdesc, category, author, date, thumb, content } = blog;
  const res = await fetch("http://localhost:4000/blogs-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      sortdesc,
      category,
      author,
      date,
      thumb,
      content,
    }),
  });

  const post = await res.json();
  console.log(post);
  return true;
};
