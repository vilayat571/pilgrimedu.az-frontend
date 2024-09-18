import React, { useState } from "react";
import Layout from "../../layout/Layout";
import TitleScholarships from "../../components/Scholarships/TitleScholarships";
import SearchInput from "./SearchInput";
import ShowScholarships from "./ShowScholarships";
import InnerLayoutSc from "./InnerLayoutSc";
import styles from "../../assets/styles/PopupSc.module.css";

export interface IScholarship {
  _id: string;
  name: string;
  country: string;
  region: string;
  type: string;
  degree: string;
  description: string;
  deadline: string;
}

const Scholarships = () => {
  const [limit, setLimit] = useState(6);
  const [query, setQuery] = useState("");
  const [scholarships, setScholarships] = useState<IScholarship[] | null>(null);
  const [region, setRegion] = useState<string | null>("Hamısı");

  React.useEffect(() => {
    const url =
      region != "Hamısı"
        ? `http://localhost:3001/api/v1/scholarships/?skip=0&limit=${limit}&type&region=${region}`
        : `http://localhost:3001/api/v1/scholarships/?skip=0&limit=${limit}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setScholarships(data.scholarships));
  }, [region, limit]);

  const [data, setData] = useState<IScholarship | null>(null);

  const filteredScholarships = scholarships?.filter((item) => {
    return (item.description + item.name)
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  const optionsDegree = [
    {
      id: 0,
      value: "Hamısı",
    },
    {
      id: 1,
      value: "Avropa",
    },
    {
      id: 2,
      value: "Asiya",
    },
    {
      id: 3,
      value: "Rusiya və postsovet ölkələri",
    },
    {
      id: 4,
      value: "Amerika və Kanada",
    },
    {
      id: 5,
      value: "İngiltərə",
    },
    {
      id: 6,
      value: "Türkiyə və İslam ölkələri",
    },
  ];

  const filterData = (value: string) => {
    setRegion(value);
  };

  return (
    <Layout>
      <div className="w-full flex bg-[#16022C] items-center justify-center">
        <InnerLayoutSc>
          {/* 
          <div className={data != null ? styles.close : styles.open}>
          </div> */}

          <TitleScholarships />

          <SearchInput query={query} setQuery={setQuery} />

          <div className="flex gap-x-5 mt-1 mb-6 w-full  items-start">
            {optionsDegree.map((option) => {
              return (
                <button
                  className="text-white rounded bg-[#7924d3] px-4 py-3 "
                  key={option.id}
                  onClick={() => filterData(option.value)}
                >
                  {option.value}
                </button>
              );
            })}
          </div>
          <ShowScholarships data={filteredScholarships} setData={setData} />

          <div className="w-full flex items-center justify-center mt-12">
            <button
              onClick={() => setLimit(limit + 6)}
              className="text-white rounded bg-[#7924d3] px-4 py-3 "
            >
              Daha çox göstər
            </button>
          </div>
        </InnerLayoutSc>
      </div>
    </Layout>
  );
};

export default Scholarships;
