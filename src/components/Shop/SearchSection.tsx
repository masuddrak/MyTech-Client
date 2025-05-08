import { IoMdSearch } from "react-icons/io";
import PropTypes from "prop-types";
const SearchSection = ({ inputRef, handelSearch }) => {
  return (
    <div className="h-[42px] relative col-span-4">
      <input
        ref={inputRef}
        placeholder="search"
        className="px-2 w-full  block h-full outline-0 rounded-[4px]"
      />
      <IoMdSearch
        onClick={handelSearch}
        className="text-2xl text-black  absolute right-2 top-2 cursor-pointer"
      ></IoMdSearch>
    </div>
  );
};

export default SearchSection;
SearchSection.propTypes = {
  inputRef: PropTypes.object,
  handelSearch: PropTypes.func,
};
