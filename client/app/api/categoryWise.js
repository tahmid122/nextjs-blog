const api = process.env.API;
export const categoryWiseBlogs = async (category) => {
  try {
    const res = await fetch(`${api}/category/${category}`, {
      method: "GET",
    });
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log({ error });
  }
};
