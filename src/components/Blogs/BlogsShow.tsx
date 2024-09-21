import { Link } from "react-router-dom";
import { IBlog } from "../../redux/reducers/Blogs/getAllBlogs";
import React from "react";

const BlogsShow: React.FC<{
  blogs: IBlog[] | null | undefined;
  loading: boolean | undefined;
}> = ({ blogs, loading }) => {
  return (
    <>
      {blogs?.map((blog: IBlog) => {
        return (
          <>
            {loading ? (
              <div className="h- [300px]">
                Yüklənir
              </div>
            ) : (
              <div
                key={blog._id}
                className=" text-white col-span-1 flex items-center justify-center flex-col "
              >
                <img
                  src={blog.thumbnail}
                  className=" object-cover w-[440px] h-[300px] rounded-xl"
                  alt={`the image of ${blog.title}`}
                />
                <div className="flex flex-col  w-[440px] h-auto ">
                  <p
                    id="blog"
                    className=" flex items-center gap-10 mt-4 mb-2  text-[17px] text-[#fff] font-thin "
                  >
                    <span className="text-white text-sm">{blog.date}</span>
                  </p>
                  <p className="text-[#fff] text-lg line-clamp-2 mt-1">{blog.body}...</p>
                  <Link
                  to={`/bloqlar/${blog._id}`}
                  className="text-center w-28 px-3 py-3 rounded bg-[#6F2EB6] text-[15px] text-white mt-4"
                >
                  Ardını oxu
                </Link>
                </div>

                
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default BlogsShow;
