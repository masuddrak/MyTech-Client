import { useState } from "react";
import Products from "../../components/Products/Products";

import { useLoaderData } from "react-router-dom";

const Shop = () => {
  // pagination
  const [selectedPage, setSelectedPage] = useState(0);
  const [perpageItem, setPerpageItem] = useState(8);
  const count = useLoaderData()
  const numberOfPage = Math.ceil(count.data.count / perpageItem)
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

  return (
    <div className="mt-12">
      <Products
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
