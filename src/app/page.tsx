import LatestBlog from "@/components/latestBlog/LatestBlog";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return (
    <>
      <LatestBlog blogs={blogs}></LatestBlog>
    </>
  );
};

export default HomePage;
