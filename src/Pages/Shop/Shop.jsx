import { useRef, useState } from "react";
import Products from "../../components/Products/Products";

import { useLoaderData } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const Shop = () => {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);
  // pagination
  const [selectedPage, setSelectedPage] = useState(0);
  const [perpageItem, setPerpageItem] = useState(8);
  const count = useLoaderData();
  const numberOfPage = Math.ceil(count.data.count / perpageItem);
  const pages = [...Array(numberOfPage).keys()];
  // pagination

  // handel page
  const handelPage = (e) => {
    const pagesValue = parseInt(e.target.value);
    setPerpageItem(pagesValue);
  };
  const handelPreviusPage = () => {
    if (selectedPage > 0) {
      setSelectedPage(selectedPage - 1);
    }
  };
  const handelNextPage = () => {
    if (selectedPage < pages.length - 1) {
      setSelectedPage(selectedPage + 1);
    }
  };

  // search handler
  const handelSearch = () => {
    if (inputRef.current) {
      setSearchText(inputRef.current.value); // Access the input value
    }
  };
  console.log(searchText);
  return (
    <div className="mt-16">
      <section className="mb-10">
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
      </section>
      {/* all products container */}
      <Products
        searchText={searchText}
        handelPage={handelPage}
        handelPreviusPage={handelPreviusPage}
        handelNextPage={handelNextPage}
        selectedPage={selectedPage}
        perpageItem={perpageItem}
        pages={pages}
        setSelectedPage={setSelectedPage}
      ></Products>
    </div>
  );
};

export default Shop;
