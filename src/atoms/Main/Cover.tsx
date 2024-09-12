import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { images } from "../../modules/sliders";

const Cover = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center xl:px-0 lg:px-0 md:px-0 sm:px-0 ">
      <div className="xl:w-4/5 lg:w-full sm:w-full md:w-full flex ">
        <Carousel
          showIndicators={false}
          showThumbs={false}
          stopOnHover={false}
          infiniteLoop={true}
          autoPlay={true}  
          interval={2000}

        >
          {images.map((image) => {
            return (
              <div key={image.id}>
                <img className="rounded-lg" alt="Images of Students of Pilgrim MMC" src={image.img} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Cover;
