import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.webp";
import img5 from "../assets/images/img5.webp";
import img6 from "../assets/images/img6.webp";
import img7 from "../assets/images/img7.webp";
import img8 from "../assets/images/img8.webp";

export interface IImage {
  id: number;
  img: string;
  alt: string;
}

export const images: IImage[] = [
  {
    id: 1,
    img: img1,
    alt: "First image of this section",
  },
  {
    id: 2,
    img: img2,
    alt: "Second image of this section",
  },
  {
    id: 3,
    img: img3,
    alt: "Third image of this section",
  },
  {
    id: 4,
    img: img4,
    alt: "Fourth image of this section",
  },
  {
    id: 5,
    img: img5,
    alt: "Fifth image of this section",
  },
  {
    id: 6,
    img: img6,
    alt: "Sixth image of this section",
  },
  {
    id: 7,
    img: img7,
    alt: "Seventh image of this section",
  },
  {
    id: 8,
    img: img8,
    alt: "Eighth image of this section",
  },
];
