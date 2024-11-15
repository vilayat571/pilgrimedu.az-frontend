import React, { useState } from "react";
import BlogsShow from "../../Blogs/BlogsShow";
import {
  fetchBlogs,
  IInitialStateAllBlogs,
} from "../../../redux/reducers/Blogs/getAllBlogs";
import { useAppDispatch } from "../../../redux/store/store";
import { useNavigate } from "react-router-dom";
import BlogsTitle from "../../Blogs/BlogsTitle";

const Threeblogs = () => {
  const dispatch = useAppDispatch();

  const [blogs, setBlogs] = useState<IInitialStateAllBlogs["blogs"]>(null);

  const navigate = useNavigate();

  const limit = 3;
  React.useEffect(() => {
    dispatch(fetchBlogs({ limit })).then((data) =>
      setBlogs(data.payload.blogs)
    );
  }, [limit, dispatch]);

  return (
    <div
      className=" xl:w-4/5  xl:px-0 lg:px-20 md:px-4 sm:px-3 lg:w-full md:w-full sm:w-full 
    flex flex-col justify-center items-start py-20  bg-[#000] 
  "
    >
      <div className="w-full flex items-center mb-10 justify-center">
        <BlogsTitle />
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-y-20 gap-6 w-full">
        <BlogsShow blogs={blogs} />
      </div>
      <div className="flex w-full items-center justify-center mt-20 ">
        <button
          className="bg-[#6F2EB5] text-base hover:bg-white hover:text-black transition duration-200 px-5 py-3 rounded text-white"
          onClick={() => navigate("/bloqlar")}
        >
          Hamısını gör {">"}
        </button>
      </div>
    </div>
  );
};

export default Threeblogs;
