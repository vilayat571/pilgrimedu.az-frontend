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
import IncreaseLimitBlogs from "../../atoms/Scholarships/IncreaseLimitBlogs";

const Blogs = () => {
  const dispatch = useAppDispatch();
  const [blogs, setBlogs] = useState<IInitialStateAllBlogs["blogs"]>(null);
  const [holeData, setHoleData] = useState<IBlog[] | null>(null); // Changed to IBlog[]
  const [limit, setLimit] = useState<number>(6);
  const [query, setQuery] = useState<string>("");


  React.useEffect(() => {
    dispatch(fetchBlogs({ limit })).then((data) =>
      setBlogs(data.payload.blogs)
    );
    setHoleData(null)
  
  }, [limit, dispatch, query]);

  const filteredBlogs = blogs?.filter((blog: IBlog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <div
        id="bloqlar"
        className="w-full h-auto bg-[#16022C] justify-center flex items-center xl:px-0 lg:px-20 md:px-4 sm:px-3 flex-col py-20"
      >
        <BlogsTitle />
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-5/6">
            <SearchInput query={query} setQuery={setQuery} />
          </div>

          <div className="grid gap-x-5 gap-y-16 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 tracking-wider">
            {filteredBlogs?.length === 0 ? (
              <p className="text-center w-full col-span-3">
                <span className="text-[#fff] text-3xl block">
                  Üzür istəyirik
                </span>
                <span className="text-[#fff] text-3xl block">
                  axtarışa uyğun nəticə tapılmadı!
                </span>
                <button
                  className="text-black bg-[#fff] text-base px-6 rounded py-3 mt-3"
                  onClick={() => setQuery("")}
                >
                  Axtarışı sıfırla
                </button>
              </p>
            ) : (
              <BlogsShow blogs={filteredBlogs} />
            )}
          </div>
        </div>

        <IncreaseLimitBlogs
          holeData={holeData}
          filteredData={filteredBlogs}
          limit={limit}
          setLimit={setLimit}
        />
      </div>
    </Layout>
  );
};

export default Blogs;
