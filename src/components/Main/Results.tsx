import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store/store";
import {
  fetchResults,
  IResults,
} from "../../redux/reducers/Main/resultsSlicer";

const Results = () => {
  const [images, setImages] = useState<IResults[] | null>(null);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchResults()).then((data) => setImages(data.payload.images));
  }, []);

  return (
    <div className="">
      <div id="neticelerimiz">
        <p className="text-center text-4xl text-[#0F0916]">Nəticələrimiz 🔥</p>

        <div
          className="grid
      xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1
      gap-0 my-10 sm:px-8"
        >
          {images?.map((item: IResults) => {
            return (
              <img
                src={item.resultImg}
                key={Math.random()}
                alt={`the image about ${item.title}`}
                className="col-span-1  object-cover"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;
