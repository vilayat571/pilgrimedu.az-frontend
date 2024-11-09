import { Link } from "react-router-dom";
import { IBlog } from "../../redux/reducers/Blogs/getAllBlogs";
import React from "react";

const BlogsShow: React.FC<{ blogs: IBlog[] | null | undefined }> = ({ blogs }) => {
  return (
    <>
      {blogs?.map((blog: IBlog) => {
        return (
          <div
            key={blog._id} // `key` burada ən xarici div-də olmalıdır
            className="text-white col-span-1 flex items-center justify-center flex-col"
          >
            <img
              src={`https://pilgrimedu.az/medias/${blog.thumbnail}`} // `item.thumbnail` -> `blog.thumbnail`
              className="object-cover xl:w-[440px] lg:w-[440px] md:w-auto sm:w-[400px] h-[300px] rounded-xl"
              alt={`The image of ${blog.title}`} // `alt` atributu yaxşı şəkildə doldurulub
            />
            <div className="flex flex-col xl:w-[440px] lg:w-[440px] md:w-[550px] sm:w-auto xl:px-2 md:px-4 sm:px-2 lg:px-2 h-auto">
              <p
                id="blog"
                className="flex items-center gap-10 mt-4 mb-2 text-[17px] text-[#fff] font-thin"
              >
                <span className="text-white text-sm">{blog.date}</span>
              </p>
              <p className="line-clamp-2">{blog.description}</p>
              <Link
                to={`/bloqlar/${blog._id}`} // blog._id ilə dinamik olaraq getmək
                className="text-center w-28 px-3 py-3 rounded hover:bg-white hover:text-black transition duration-200 bg-[#6F2EB6] text-[15px] text-white mt-4"
              >
                Ardını oxu
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogsShow;
