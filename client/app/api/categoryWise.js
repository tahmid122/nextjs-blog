export const categoryWiseBlogs = async (category) => {
  const res = await fetch(`http://localhost:4000/category/${category}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};
