import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { IBlog } from "../../redux/reducers/Blogs/getAllBlogs";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/index.css";
const SingleBlog = () => {
  const [newBlog, setNewBlog] = useState<IBlog | null>(null);

  const { id } = useParams();

  const url = `http://localhost:3001/api/v1/blogs/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewBlog(data.blog));
  }, [url]);

  const navigate = useNavigate();


  console.log(newBlog?.thumbnail)

  return (
    <Layout>
      <div className="flex flex-col w-full items-center justify-center  py-12">
        <div className="flex flex-col w-4/5 pz-2 justify-center items-center">
          <div className="flex flex-col w-full mb-12 items-start ">
            <p
              id="blog"
              className="text-[18px] text-[#fff] mb-2 mt-4 flex items-center gap-4 "
            >
              <span>{newBlog?.date}</span>
              <span>{newBlog?.author}</span>
            </p>
            <p className="text-3xl text-[#fff] ">{newBlog?.title}</p>
          </div>

          <div className="w-full">
            <img
              src={newBlog?.thumbnail}
              className=" rounded-md object-cover w-full h-auto"
              alt={`the thumbnail of blog about ${newBlog?.title}`}
            />

            <p className="text-xl w-4/5 mt-12 mb-4 text-justify text-white">{newBlog?.description}</p>

            <div
              dangerouslySetInnerHTML={{ __html: newBlog?.body || "" }}
              className=" text-[#fff] text-justify"
            />

            <div className="flex items-start mt-12 ">
              <button
                className="text-[17px] mb-4  bg-[#6F2EB6] rounded text-[#d8d7d7] px-6 py-3"
                onClick={() => navigate(-1)}
              >
                Geri dönün
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
