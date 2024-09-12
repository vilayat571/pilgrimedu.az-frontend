import {
  faGraduationCap,
  faHandshake,
  faUserCheck,
  faCheck,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface Statistic {
  id?:number,
  color: string;
  icon: IconDefinition;
  value: string;
  label: string;
}

export const statisticsData: Statistic[] = [
  {
    id:1,
    color: "bg-[#B31BA9]",
    icon: faGraduationCap,
    value: "30",
    label: "təqaüd proqramı",
  },
  {
    id:2,
    color: "bg-[#3991D6]",
    icon: faHandshake,
    value: "5000",
    label: "ödənişsiz konsultasiya",
  },
  {
    id:3,
    color: "bg-[#3A9556]",
    icon: faUserCheck,
    value: "500",
    label: "xoşbəxt tələbə",
  },
  {
    id:4,
    color: "bg-[#B35B5A]",
    icon: faCheck,
    value: "95",
    label: "uğur reytinqi",
  },
];
