import DahsboardLayout from "./DahsboardLayout";

export interface IUSER {
  username: string;
  email: string;
  phone: string;
  password: string;
  degree: string;
  service: string;
  status: string;
}

const MainPage = () => {
  // Check if user data exists in localStorage
  const user: IUSER | null = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

  return (
    <DahsboardLayout>
      <>
        {user ? (
          <div>
            <p className="text-3xl mb-8">İstifadəçi məlumatları:</p>
            <div className="flex flex-col items-start gap-y-2">
              <p className="flex flex-col">
                <span className="text-xl text-black font-semibold">
                  Adı və soyadı:
                </span>
                <span className="text-base mt-2">{user.username} </span>
              </p>
              <p className="flex flex-col mt-6">
                <span className=" text-xl font-semibold">
                  Cari təhsil pilləsi:
                </span>
                <span className="text-base mt-2">{user.degree} </span>
              </p>
              <p className="flex flex-col mt-6">
                <span className=" text-xl font-semibold">E-poçt adresi:</span>
                <span className="text-base mt-2">{user.email} </span>
              </p>
              <p className="flex flex-col mt-6">
                <span className=" text-xl font-semibold">Telefon nömrəsi:</span>
                <span className="text-base mt-2">{user.phone} </span>
              </p>
              <p className="flex flex-col mt-6">
                <span className=" text-xl font-semibold">
                  Müraciət etdiyi xidmət:
                </span>
                <span className="text-base mt-2">{user.service} </span>
              </p>
              <p className="flex flex-col mt-6">
                <span className=" text-xl font-semibold">
                  Müraciətin cari vəziyyəti:
                </span>
                <span className="text-base mt-3 bg-[#16022C] text-white py-3 inline rounded text-center">
                  {user.status}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xl">İstifadəçi məlumatları tapılmadı.</p>
        )}
      </>
    </DahsboardLayout>
  );
};

export default MainPage;
