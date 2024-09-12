import { faGraduationCap, faBookOpen, faGlobe, faSchool, faRoadCircleCheck, faCertificate, faTasks, faSpellCheck } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IService {
  id: number;
  title: string;
  icon: IconDefinition;
  description: string;
}

export const services: IService[] = [
  {
    id: 1,
    title: "Background artımı",
    icon: faGraduationCap,
    description: "Burada tələbə öz sosial aktivliyini artırır, xarici və ya yerli əmək bazarı üçün lazımlı göstərici və bacarıqları əldə edir."
  },
  {
    id: 2,
    title: "Peşə-seçimi testi",
    icon: faBookOpen,
    description: "Testimiz sayəsində tələbə 30 sualı cavablandırdıqdan sonra ona uyğun olacaq ixtisas istiqamətlərini təyin etmə şansı qazanır."
  },
  {
    id: 3,
    title: "Peşə-seçimi testi",
    icon: faGlobe,
    description: "World Bank, United Nations, European Parlianment kimi yerlərdə layihədə və ya təcrübədə iştirak etmək artıq realdır. 100+ layihə və təcrübə proqramına qeydiyyat aktivdir."
  },
  {
    id: 4,
    title: "Xaricdə yay məktəbləri",
    icon: faSchool,
    description: "Yayı səmərəli keçirmək üçün Summer School-lara müraciət edə bilərsiniz. Bu təqdirdə həm beynəlxalq sertifikat alırsınız, həm də yayı xaricdə keçirirsiniz."
  },
  {
    id: 5,
    title: "Xaricdə iş",
    icon: faRoadCircleCheck,
    description: "Fərqli Avropa ölkələrində qarantiyalı iş."
  },
  {
    id: 6,
    title: "Xaricdə sertifikasiya",
    icon: faCertificate,
    description: "UX/UI Design, Web Design, Product Ownership kimi sahələr üzrə xarici diplom və sertifikatlar."
  },
  {
    id: 7,
    title: "Almaniyada iş",
    icon: faTasks,
    description: "Almaniyada işlərə 100% qarantiya veririk. Bura daxildir IT, Finance kimi sahələr, yeganə tələb B2 Goethe ya da TestDAF sertifikatına nail olmaqdır."
  },
  {
    id: 8,
    title: "Ausbildung",
    icon: faSpellCheck,
    description: "Almaniyada peşə-təhsili ilə siz həftəlik 20 saat işləyə, 20 saat isə oxuya bilərsiniz. Almaniyada Ausbildung etmək üçün ali təhsil tələb olunmur."
  }
];
