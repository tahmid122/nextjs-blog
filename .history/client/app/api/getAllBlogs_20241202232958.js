const api = process.env.API;
console.log(api);
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${api}/blogs`, {
      method: "GET",
    });
    const allBlogs = await res.json();
    if (res.ok) {
      return allBlogs;
    } else {
      return null;
    }
  } catch (error) {
    console.log({ error });
  }
};
