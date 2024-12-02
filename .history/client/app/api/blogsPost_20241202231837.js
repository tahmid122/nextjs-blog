const api = process.env.API;
export const postBlogs = async (blog) => {
  const { title, sortdesc, category, author, date, thumb, content } = blog;
  try {
    const res = await fetch(`${api}/blogs-post`, {
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
    if (res.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log({ error });
  }
};
