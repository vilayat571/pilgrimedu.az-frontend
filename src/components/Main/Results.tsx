import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store/store";
import {
  fetchResults,
  IResults,
} from "../../redux/reducers/Main/resultsSlicer";

const Results = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState<IResults[] | null>(null);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchResults())
      .then((data) => setImages(data.payload.images))
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-white py-12 px-0">
      {loading ? (
        <div className="text-3xl text-white">Yüklənir</div>
      ) : (
        <div id="telebelerimiz" className=" flex justify-center items-center flex-col">
          <p className="text-center text-3xl text-[#fff] bg-[#210442] px-5 py-3 rounded-md inline">Nəticələrimiz 🔥</p>

          <div
            className="grid 
      xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1
      gap-4 my-10 sm:px-4"
          >
            {images?.map((item: IResults) => {
              return (
                <img
                  src={item.resultImg}
                  key={Math.random()}
                  alt={`the image about ${item.title}`}
                  className="col-span-1 sm:rounded object-cover"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
