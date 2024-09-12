import { Link } from "react-router-dom";

function Foot() {

    return(
 <main className="flex-col">
    
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-y-16 sm:grid-cols-1 lg:grid-cols-3 mt-16">
      <div className="flex xl:justify-start lg:justify-start md:justify-start sm:justify-start items-start">
        <div>
          <p className="text-xl font-semibold">
            Suallarınız və ya hər hansı məlumat <br /> əldə etmək üçün bizimlə
            əlaqə saxlayın.
          </p>
        </div>
      </div>

      <div className="flex xl:justify-end   lg:justify-end   md:justify-start sm:justify-start    items-start ">
        <div>
          <p className="text-xl font-semibold">Saytda mövcud səhifələr</p>
          <div id="links" className="flex-col mt-4 ">
            <Link className=" mb-1 block" to="">
              Biz kimik?
            </Link>
            <Link className=" mb-1 block" to="">
              Qalereya
            </Link>
            <Link className=" mb-1 block" to="">
              Bloqlar
            </Link>
            <Link className=" mb-1 block" to="">
              Xidmətlər
            </Link>
          </div>
        </div>
      </div>

      <div className="flex xl:justify-end   lg:justify-end   md:justify-start sm:justify-start  items-start">
        <div>
          <p className="text-xl font-semibold">Xidmətlərimiz</p>
          <div id="links" className="flex-col mt-4 ">
            <Link className=" mb-1 block" to="">
              Xaricdə təhsil
            </Link>
            <Link className=" mb-1 block" to="">
              Karyera hazırlığı
            </Link>
            <Link className=" mb-1 block" to="">
              Mentorluq
            </Link>
            <Link className=" mb-1 block" to="">
              Onlayn kurslar
            </Link>
          </div>
        </div>
      </div>
    </div>

<hr className="my-8" />

    <div>
        <p className="text-left">

        Copyright © 2024 Pilgrim MMC tərəfindən hazırlanıb.
        </p>
    </div>
 </main>
    )
}

export default Foot;
