import getPost from "@/lib/getPost";
import React from "react";

const BlogPage = async ({ params }) => {
  const { id } = params;
  const data = await getPost(id);

  return (
    <div className="mt-7">
      <h1 className="text-center font-semibold text-2xl">Blog Post {id}</h1>
      <h1 className="mt-5 mb-3 font-semibold">{data.title}</h1>

      <p>{data.body}</p>
    </div>
  );
};

export default BlogPage;
