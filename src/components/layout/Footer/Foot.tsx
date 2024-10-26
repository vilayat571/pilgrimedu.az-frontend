import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { homeHrefs, pagesRefs } from "../../../modules/navrefs";
import { services } from "../../../modules/services";
import ToTop from "../../../atoms/Footer/ToTop";
import { Link, NavLink } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Foot() {
  return (
    <main className="flex-col bg-[#010101] text-white gradient">
      <div className="grid xl:grid-cols-3 md:grid-cols-1 gap-y-16 sm:grid-cols-1 lg:grid-cols-3 mt-16">
        <div className="flex xl:justify-start lg:justify-start md:justify-start sm:justify-start items-start">
          <div>
            <p className="text-xl font-semibold mb-6">
              Suallarınız və ya hər hansı məlumat <br /> əldə etmək üçün bizimlə
              əlaqə saxlayın.
            </p>
            <p className=" flex flex-row items-center mb-4  gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="bg-white text-[#210542] p-3  text-xl rounded-full"
              />
              <span>+994 70 595 90 23</span>
            </p>
            <p className=" flex flex-row items-center mb-4 gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="bg-white text-[#210542] p-3  text-xl rounded-full"
              />
              <span>info@pilgrimedu.az</span>
            </p>
            <div className="flex flex-row mt-6 gap-2 items-center">
              <NavLink to={'https://www.instagram.com/pilgrimedu_az/'} className=" flex flex-row items-center cursor-pointer mb-4 gap-3">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="bg-[#6F2EB5] text-[#FFF] p-4  text-xl rounded-full"
                />
              </NavLink>
              <NavLink to={'https://www.facebook.com/pilgrimedu.az/'} className=" flex flex-row items-center cursor-pointer mb-4 gap-3">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="bg-[#6F2EB5] text-[#FFF] p-4  text-xl rounded-full"
                />
              </NavLink>

              <NavLink to={'https://www.linkedin.com/company/pilgrimeducation/'} className=" flex flex-row items-center cursor-pointer mb-4 gap-3">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="bg-[#6F2EB5] text-[#FFF] p-4  text-xl rounded-full"
                />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex xl:justify-end   lg:justify-end   md:justify-start sm:justify-start    items-start ">
          <div>
            <p className="text-xl font-semibold">Saytda mövcud səhifələr</p>
            <div id="links" className="flex flex-col gap-y-2 mt-4 ">
              {pagesRefs.map((link) => {
                return (
                  <Link
                    key={link.id}
                    aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
                    className="text-white hover:underline block"
                    to={link.hrefs}
                  >
                    {link.text}
                  </Link>
                );
              })}
              {homeHrefs.map((link) => {
                return (
                  <a
                    key={link.id}
                    aria-label="The ancor tag to redirect Whatsapp account of Pilgrim MMC"
                    className="text-white hover:underline block"
                    href={link.hrefs}
                  >
                    {link.text}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex xl:justify-end   lg:justify-end   md:justify-start sm:justify-start  items-start">
          <div>
            <p className="text-xl font-semibold">Xidmətlərimiz</p>
            <div id="links" className="flex-col flex gap-y-2 mt-4 ">
              {services.map((service) => (
                <a
                  aria-label="Pilgrim EDU MMC xidmətinə aparan link"
                  href="/#xidmetlerimiz"
                  key={service.id}
                  className="block hover:underline"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 gradient4" />

      <ToTop />

      <div className="mb-6">
        <p className="text-left">Made with 💜 by PilgrimEdu : Version 1.</p>
      </div>
    </main>
  );
}

export default Foot;
