import BlogDetails from "@/components/ui/BlogDetails";

interface blogId {
  params: {
    blogId: string;
  };
}
const page = async ({ params }: blogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  console.log(blog);
  //   blog={blog}
  return <div className="my-5">{<BlogDetails blog={blog}></BlogDetails>}</div>;
};

export default page;
