import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput: React.FC<{
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}> = ({ query, setQuery }) => {
  return (
    <form className="flex w-full justify-center items-center xl:mt-12 lg:mt-12 md:mt-12 sm:mt-6
     xl:mb-12 lg:mb-10 sm:mb-6 md:mb-8">
      <input
        id="blogs"
        placeholder="Açar söz daxil edin.."
        value={query}
        className="h-16 indent-5 outline-none placeholder:text-[#5e5e5e] rounded-lt-md tracking-wider xl:w-2/5 lg:w-2/4 md:w-2/4 sm:w-full rounded-l "
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      <button
        className="
h-16 px-6 indent-5 
rounded-r 
tracking-wider bg-[#6F2EB6] text-white "
      >
        <FiSearch size={24} />
      </button>
    </form>
  );
};

export default SearchInput;
