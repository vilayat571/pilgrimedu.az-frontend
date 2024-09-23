export interface IIHrefs {
  id: number;
  hrefs: string;
  text: string;
}

export const homeHrefs: IIHrefs[] = [
  {
    id: 1,
    hrefs: "/#neticelerimiz",
    text: "Nəticələrimiz",
  },
  {
    id: 2,
    hrefs: "/#xidmetlerimiz",
    text: "Xidmətlərimiz",
  },
  {
    id: 3,
    hrefs: "/teqaudler",
    text: "Təqaüdlər",
  },
  {
    id: 4,
    hrefs: "/bloqlar",
    text: "Bloqlar",
  },
  {
    id: 5,
    hrefs: "/#elaqe",
    text: "Əlaqə",
  },
];

export const pagesRefs: IIHrefs[] = [
  {
    id: 1,
    hrefs: "/",
    text: "Əsas səhifə",
  },
  {
    id: 2,
    hrefs: "/teqaudler",
    text: "Təqaüdlər",
  },
  {
    id: 3,
    hrefs: "/bloqlar",
    text: "Bloqlar",
  },
];
