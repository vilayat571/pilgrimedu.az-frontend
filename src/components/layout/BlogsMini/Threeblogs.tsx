import React, { useState } from "react";
import {
  IBlog,
  IInitialStateAllBlogs,
} from "../../../redux/reducers/Blogs/getAllBlogs";
import { useAppDispatch } from "../../../redux/store/store";
import { fetchThree } from "../../../redux/reducers/Main/threeBlogs";
import { Link } from "react-router-dom";

const Threeblogs = () => {
  const [blogs, setBlogs] = useState<IInitialStateAllBlogs["blogs"]>(null);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchThree()).then((data) => setBlogs(data.payload.blogs));
  }, []);

  return (
    <div className="bg-[#EDF3F5] 
    xl:w-3/5 lg:w-full md:w-full sm:w-full flex flex-col 
    h-auto py-20 xl:px-0 lg:px-20 px-8 ">
      <p className="text-center ">
        <span className="text-[#3C3C3C] text-4xl block">
          Yenilikləri izləmək üçün
        </span>
        <span className="text-[#8D8D8D] text-4xl block">bizimlə qalın!</span>
      </p>

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-10 mt-12 tracking-wider">
        {blogs?.map((blog: IBlog) => {
          return (
            <div key={blog._id} className=" col-span-1  flex flex-col ">
              <img
                src={blog.thumbnail}
                className=" object-cover w-[400px] h-[250px] rounded-md"
                alt={`the image of ${blog.title}`}
              />
              <div className="flex flex-col ">
                <p
                  id="blog"
                  className=" flex items-center gap-10 mt-4 mb-2  text-[17px] text-[#000] font-thin "
                >
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </p>
                <p className="text-black text-xl line-clamp-1">{blog.title}</p>
              </div>

              <Link
                to={`/bloqlar/${blog._id}`}
                className="text-center w-28 px-3 py-3 rounded bg-[#0F0916] text-[15px] text-white mt-4"
              >
                Ardını oxu
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Threeblogs;
