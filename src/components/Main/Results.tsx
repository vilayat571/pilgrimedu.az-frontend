import { IImage, images } from "../../modules/imagesStudents";

const Results = () => {
  return (
    <div className="text-white py-12 px-0">
      <div
        id="telebelerimiz"
        className=" flex justify-center items-center flex-col"
      >
        <p className="text-center text-3xl text-[#fff] bg-[#210442] px-5 py-3 rounded-md inline">
          Nəticələrimiz 🔥
        </p>

        <div
          className="grid 
      xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1
      gap-4 my-10 sm:px-4"
        >
          {images.map((item: IImage) => {
            return (
              <img
                src={item.img}
                key={Math.random()}
                alt={`the image about ${item.alt}`}
                className="col-span-1 sm:rounded object-cover"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;
