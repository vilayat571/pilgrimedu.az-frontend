import hungary_flag from "../assets/images/hungary_flag.png";
import malaysia_flag from "../assets/images/malaysia_flag.png";
import china_flag from "../assets/images/china_flag.png";
import poland_flag from "../assets/images/poland_flag.png";
import turkish_flag from "../assets/images/turkish_flag.png";
import estonia_flag from "../assets/images/estonia_flag.png";
import korea_flag from "../assets/images/korea_flag.webp";
import canada_flag from "../assets/images/canada_flag.png";
import rusia_flag from "../assets/images/rusia_flag.png";
import usa_flag from "../assets/images/usa_flag.png";

export interface ICountries {
  id: number;
  name: string;
  area: string;
  url: string;
}

export const areas = ["Bütün Ölkələr", "Avropa", "Asiya", 'Amerika və Kanada'];

export const allCountries = [
  {
    id: 1,
    name: "Macarıstan",
    area: "Avropa",
    url: hungary_flag,
  },
  {
    id: 2,
    name: "Polşa",
    area: "Avropa",
    url: poland_flag,
  },
  {
    id: 3,
    name: "Çin",
    area: "Asiya",
    url: china_flag,
  },
  {
    id: 4,
    name: "Malaziya",
    area: "Asiya",
    url: malaysia_flag,
  },
  {
    id: 5,
    name: "Türkiyə",
    area: "Avropa",
    url: turkish_flag,
  },
  {
    id: 6,
    name: "Estoniya",
    area: "Avropa",
    url: estonia_flag,
  },
  {
    id: 7,
    name: "Koreya",
    area: "Asiya",
    url: korea_flag,
  },
  {
    id: 8,
    name: "Kanada",
    area: "Amerika və Kanada",
    url: canada_flag,
  },
  {
    id: 9,
    name: "Rusiya",
    area: "Avropa",
    url: rusia_flag,
  },
  {
    id: 10,
    name: "Amerika",
    area: "Amerika və kanada",
    url: usa_flag,
  },
];
