import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput: React.FC<{
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}> = ({ query, setQuery }) => {
  return (
    <form className="flex w-full justify-center items-center mt-12 mb-12">
      <input
        id="blogs"
        placeholder="Açar söz daxil edin.."
        value={query}
        className="h-16 indent-5 outline-none placeholder:text-[#5e5e5e] rounded-lt-md tracking-wider w-2/4 "
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
