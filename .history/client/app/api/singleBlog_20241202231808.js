const api = process.env.API;
export const getSingleBlog = async (title) => {
  try {
    const res = await fetch(`${api}/single-blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    const blog = await res.json();
    if (res.ok) {
      return blog;
    } else {
      return null;
    }
  } catch (error) {
    console.log({ error });
  }
};
