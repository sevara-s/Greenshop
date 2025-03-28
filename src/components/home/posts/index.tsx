import { posts } from "../../../utils";
import Post from "./postItem";
import { FC } from "react";

const AllPosts: FC = () => {
  return (
    <section>
        <div className="container">
      <div className="text-center mt-10">
        <h3 className="text-[#3D3D3D] text-[30px] font-bold">Our Blog Posts</h3>
        <p className="text-[#727272] text-[14px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-7 mt-10 mb-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      </div>
    </section>
  );
};
export default AllPosts;
