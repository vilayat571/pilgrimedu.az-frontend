import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { IBlog } from "../../redux/reducers/Blogs/getAllBlogs";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/index.css";
const SingleBlog = () => {
  const [newBlog, setNewBlog] = useState<IBlog | null>(null);

  const { id } = useParams();

  const url = `https://pilgrimedu.az/api/v1/blogs/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewBlog(data.blog));
  }, [url]);

  const navigate = useNavigate();



  return (
    <Layout>
      <div className="flex flex-col w-full bg-[#16022C] items-center justify-center  py-12">
        <div className="flex flex-col xl:w-4/5 lg:w-4/5 md:w-5/6 sm:w-[94%] pz-2 justify-center items-center">
          <div className="flex flex-col w-full mb-6 mt-8 items-start ">
            <p
              id="blog"
              className="text-sm text-[#fff] mb-2 mt-4 flex items-center gap-4 "
            >
              <span>{newBlog?.date}</span>
            </p>
            <p  id="formDiv" className="text-3xl text-[#fff] ">{newBlog?.title}</p>
          </div>

          <div id="formDiv" className="w-full">
            <img
              src={`https://pilgrimedu.az/medias/${newBlog?.thumbnail}`} 
              className=" rounded-md object-cover w-full h-auto"
              alt={`the thumbnail of blog about ${newBlog?.title}`}
            />

            <p className="text-2xl xl:w-4/5 lg:w-4/5 md:w-5/6 sm:w-[94%] mt-12 mb-4 text-justify text-white px-3">{newBlog?.description}</p>

            <div
              dangerouslySetInnerHTML={{ __html: newBlog?.body || "" }}
              className=" text-[#fff] text-justify px-3"
            />

            <div className="flex items-start mt-5 ">
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
