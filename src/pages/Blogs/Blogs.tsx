import React, { useState } from "react";
import Layout from "../../layout/Layout";
import {
  fetchBlogs,
  IBlog,
  IInitialStateAllBlogs,
} from "../../redux/reducers/Blogs/getAllBlogs";
import { useAppDispatch } from "../../redux/store/store";
import BlogsTitle from "../../components/Blogs/BlogsTitle";
import BlogsShow from "../../components/Blogs/BlogsShow";
import SearchInput from "../Scholarships/SearchInput";
import IncreaeLimit from "../../atoms/Scholarships/IncreaeLimit";

const Blogs = () => {
  const dispatch = useAppDispatch();

  const [blogs, setBlogs] = useState<IInitialStateAllBlogs["blogs"]>(null);
  const [holeData, setHoleData] = useState<IBlog | null>(null);
  const [limit, setLimit] = useState<number>(2);

  const [query, setQuery] = useState<string>("");

  React.useEffect(() => {
    const url = "http://localhost:3001/api/v1/blogs/";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setHoleData(data.blogs));
  }, [setHoleData]);

  React.useEffect(() => {
    dispatch(fetchBlogs({ limit })).then((data) =>
      setBlogs(data.payload.blogs)
    );
  }, [limit, dispatch, query]);

  const fileteredBlogs = blogs?.filter((blog: IBlog) => {
    return blog.title.toLowerCase().includes(query.toLowerCase());
  });


  console.log(holeData)

  return (
    <Layout>
      <div
        id="bloqlar"
        className="w-full h-auto bg-[#16022C] justify-center flex items-center xl:px-0 lg:px-20 md:px-4 sm:px-3 flex-col  py-20"
      >
        <BlogsTitle />
        <div className="flex  flex-col items-center justify-center ">
          <SearchInput query={query} setQuery={setQuery} />

          <div
            className="grid gap-x-5  gap-y-16
  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 
  tracking-wider"
          >
            {fileteredBlogs?.length == 0 ? (
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
              <BlogsShow blogs={fileteredBlogs} />
            )}
          </div>
        </div>

        <IncreaeLimit
          holeData={holeData}
          filteredData={fileteredBlogs}
          limit={limit}
          setLimit={setLimit}
        />
      </div>
    </Layout>
  );
};

export default Blogs;
