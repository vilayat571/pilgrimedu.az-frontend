import plane from "../../assets/images/plane.png";
import ATag from "../../atoms/Layout/ATag";

const Add = () => {
  return (
    <div className="gradient w-full flex items-center justify-center rounded-2xl">
      <div
        className="flex gradient2 px-4  flex-col justify-center py-16 rounded-t-2xl rounded-b-2xl items-center 
 mb-16 bg-[#210442]
  "
      >
        <p className="mb-6 text-4xl sm:hidden xl:block lg:block md:hidden text-white text-center gradient">
          Xəyalını gerçəkləşdirmək
          <br /> artıq bizə müraciət qədər asandır 🎉{" "}
        </p>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-y-16  w-full ">
          <div
            className="col-span-1 rounded-l-xl  
       xl:pt-20 lg:pt-20 md:pt-10 sm:pt-8 xl:px-16 lg:px-16 
        md:px-10 sm:px-2"
          >
            <p className="text-3xl text-white">
              Etibarlı və yüksək
              <br />
              keyfiyyətli təhsil şirkəti
            </p>

            <p className="mt-4 text-white text-base">
              Bizimlə istədiyin qitədən və arzuladığın regiondan qəbul ala
              bilərsən. Bunun üçün isə sadəcə 4 addım var…
            </p>

            <p className="text-white flex flex-col gap-4 mt-6 mb-10">
              <span>1. Bizə yaz</span>
              <span>2. Ödənişsiz konsultasiyamızdan yararlan</span>
              <span>3. Göstəricilərinə və istəyinə uyğun müəssisələr seç</span>
              <span>4. Müqaviləni bağla və qəbul məktubunu əldə et</span>
            </p>
            <ATag
              href="#elaqe"
              style="w-28 text-center hover:bg-white hover:text-black transition duration-200 tracking-wider text-white bg-[#6f2eb7] px-3 mt-5 py-3 rounded"
              text="Bizə yaz"
              label="Pilgrim MMC - nin nəticələri"
            />
          </div>

          <div className="col-span-1">
            <img src={plane} alt="the image of Add section" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
