import  { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { IBlog } from "../../redux/reducers/Blogs/getAllBlogs";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/index.css";
const SingleBlog = () => {
  const [newBlog, setNewBlog] = useState<IBlog | null>(null);

  const { id } = useParams();

  const url = `${import.meta.env.VITE_API_URL}/blogs/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewBlog(data.blog));
  }, []);

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col border xl:w-3/5 lg:w-full md:w-full sm:w-full  py-12">
        <div className="flex flex-col items-start w-full ">
          <button
            className="text-[17px] mb-4 mt-6"
            onClick={() => navigate(-1)}
          >
            {"<"} Geri dönün
          </button>
          <p
            id="blog"
            className="text-[18px] text-black mb-2 mt-4 flex items-center gap-4 "
          >
            <span>{newBlog?.date}</span>
            <span>{newBlog?.author}</span>
          </p>
          <p className="text-3xl text-black ">{newBlog?.title}</p>
        </div>
{newBlog?.thumbnail}
        <img
          src={newBlog?.thumbnail}
          className="my-12 rounded-md object-cover"
          alt={`the thumbnail of blog about ${newBlog?.title}`}
        />
        <div className="flex flex-col px-4">
          <p className="text-2xl mb-4">{newBlog?.description}</p>

          <div
            dangerouslySetInnerHTML={{ __html: newBlog?.body || '' }}
            className=" text-black"
          />
        </div>
        <div className="flex items-start  mx-6 mt-6">
          <button
            className="text-[17px] mb-4 mt-6 bg-black text-white px-6 py-3"
            onClick={() => navigate(-1)}
          >
            Geri dönün
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
