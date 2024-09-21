import React, { useState } from "react";
import Layout from "../../layout/Layout";
import {
  fetchBlogs,
  IBlog,
  IInitialStateAllBlogs,
} from "../../redux/reducers/Blogs/getAllBlogs";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import BlogsTitle from "../../components/Blogs/BlogsTitle";
import BlogsShow from "../../components/Blogs/BlogsShow";
import SearchInput from "../Scholarships/SearchInput";

const Blogs = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.getAllBlogs.loading);

  const [blogs, setBlogs] = useState<IInitialStateAllBlogs["blogs"]>(null);

  const [limit, setLimit] = useState<number>(6);

  const [query, setQuery] = useState<string>("");

  React.useEffect(() => {
    dispatch(fetchBlogs({ limit })).then((data) =>
      setBlogs(data.payload.blogs)
    );
  }, [limit, dispatch, query]);

  const fileteredBlogs = blogs?.filter((blog: IBlog) => {
    return blog.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <Layout>
      <div
        id="bloqlar"
        className="w-full h-auto bg-[#16022C] justify-center flex items-center flex-col  py-20"
      >
        <BlogsTitle />

        <SearchInput query={query} setQuery={setQuery} />

        <div className="w-4/5 flex items-center justify-center ">
          <div
            className="grid gap-x-5 gap-y-10 
  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 
  tracking-wider"
          >
            {blogs?.length == 0 ? (
              <p className="text-center w-full col-span-3">
                <span className="text-[#fff] text-3xl block">
                  Üzür istəyirik
                </span>
                <span className="text-[#8D8D8D] text-3xl block">
                  axtarışa uyğun nəticə tapılmadı!
                </span>
                <button
                  className="text-black bg-[#fff] text-base px-6 rounded py-3  mt-3"
                  onClick={() => setQuery("")}
                >
                  Yenilə
                </button>
              </p>
            ) : (
              <BlogsShow loading={loading} blogs={fileteredBlogs} />
            )}
          </div>
        </div>

        <div className="flex w-full justify-center items-center mt-12">
          {blogs?.length != 0 && (
            <button
              onClick={() => setLimit(limit + 1)}
              className="text-white bg-[#6F2EB6] w-auto text-[15px] px-6 rounded py-4  mt-3"
            >
              Daha çox göstər!
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
