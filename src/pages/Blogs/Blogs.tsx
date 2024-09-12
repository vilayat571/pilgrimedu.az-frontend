import React, { useState } from "react";
import Layout from "../../layout/Layout";
import {
  fetchBlogs,
  IBlog,
  IInitialStateAllBlogs,
} from "../../redux/reducers/Blogs/getAllBlogs";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Blogs: React.FC<{}> = () => {
  // searching anf fetching
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.getAllBlogs.loading);

  const [blogs, setBlogs] = useState<IInitialStateAllBlogs["blogs"]>(null);

  const [limit, setLimit] = useState<number>(6);

  React.useEffect(() => {
    dispatch(fetchBlogs({ limit, query })).then((data) =>
      setBlogs(data.payload.blogs)
    );
  }, [limit]);

  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const paginet = async () => {
    setLimit((limit) => limit + 6);
    dispatch(fetchBlogs({ limit, query })).then((data) =>
      setBlogs(data.payload.blogs)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    query.length > 0
      ? dispatch(fetchBlogs({ limit, query })).then((data) =>
          setBlogs(data.payload.blogs)
        )
      : alert("Açar söz daxil edin");
  };

  return (
    <Layout>
      <div className="w-full h-auto flex-col bg-[#EDF3F5]  pt-20 pb-12 xl:px-0 lg:px-20 md:px-12 sm:px-8
       xl:w-3/5 lg:w-full md:w-full sm:w-full">
        <p className="text-center">
          <span className="text-[#3C3C3C] text-5xl block">
            Yenilikləri izləmək üçün
          </span>
          <span className="text-[#8D8D8D] text-5xl block">bizimlə qalın!</span>
        </p>

        <div className="flex flex-col gap-y-6 mt-12">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex w-full justify-center items-center mb-12"
          >
            <input
              id="blogs"
              placeholder="Açar söz daxil edin.."
              value={query}
              className="h-16 indent-5 outline-none placeholder:text-[#5e5e5e] rounded tracking-wider w-2/4 "
              onChange={(e) => handleChange(e)}
              type="text"
            />
            <button
              className="
            h-16 px-6 indent-5 
            rounded-r 
            tracking-wider bg-[#0F0916] text-white "
            >
              <FiSearch size={24} />
            </button>
          </form>

          <div className="grid grid-cols-3 gap-x-5 gap-y-10 tracking-wider">
            {blogs?.length == 0 ? (
              <p className="text-center w-full col-span-3">
                <span className="text-[#3C3C3C] text-3xl block">
                  Üzür istəyirik
                </span>
                <span className="text-[#8D8D8D] text-3xl block">
                  axtarışa uyğun nəticə tapılmadı!
                </span>
                <button
                  className="text-white bg-[#0F0916] text-[15px] px-6 rounded py-2  mt-3"
                  onClick={() => setQuery("")}
                >
                  Yenilə
                </button>
              </p>
            ) : loading ? (
              <div className="w-full text-center text-2xl text-black font-semibold">
                Yüklənilir
              </div>
            ) : (
              blogs?.map((blog: IBlog) => {
                return (
                  <div
                    key={blog._id}
                  
                    className=" col-span-1  flex flex-col "
                  >
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
                      <p className="text-black text-xl">{blog.title}</p>
                    </div>

                    <Link
                    to={`/bloqlar/${blog._id}`}
                    className="text-center w-28 px-3 py-3 rounded bg-[#0F0916] text-[15px] text-white mt-4">
                      Ardını oxu
                      </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="flex w-full justify-center items-center mt-12">
          {blogs?.length != 0 && (
            <button
              onClick={() => paginet()}
              className="text-white bg-[#0F0916] w-auto text-[15px] px-6 rounded py-4  mt-3"
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
