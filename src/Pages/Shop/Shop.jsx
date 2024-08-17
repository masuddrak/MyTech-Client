import { useRef, useState } from "react";
import Products from "../../components/Products/Products";

import { useLoaderData } from "react-router-dom";

import SearchSection from "../../components/Shop/SearchSection";
import MaxMinPrice from "../../components/Shop/MaxMinPrice";
import CategorySelector from "../../components/Shop/CategorySelector";
const categorys = [
  "Television",
  "Audio",
  "Mobile Phones",
  "Laptops",
  "Home Appliances",
  "Lighting",
  "Kitchen Appliances",
  "Fitness Equipment",
  "Gardening",
];
const brands = [
  "TechVision",
  "SoundMax",
  "PhoneTech",
  "GameMaster",
  "SoundWave",
  "UltraClean",
  "SmartHome",
  "CleanAir",
  "GigaSound",
  "QuickBake",
  "ProFit",
  "NatureGlow",
];
const Shop = () => {
  // low to hi
  const [sortPrice,setSortPrice]=useState("")
  // category sort
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  // max nad min state
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  // search state
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
  // max and min price form handler
  const handelSearchMaxMin = (e) => {
    e.preventDefault();
    const min = e.target.min.value;
    const max = e.target.max.value;
    setMinPrice(min);
    setMaxPrice(max);
  };


  console.log(sortPrice);
  return (
    <div className="mt-16 md:grid grid-cols-5 justify-between gap-6">
      {/* search product name */}
      <section className="space-y-3">
        <SearchSection
          inputRef={inputRef}
          handelSearch={handelSearch}
        ></SearchSection>
        {/* sort max and min */}
        <MaxMinPrice handelSearchMaxMin={handelSearchMaxMin}></MaxMinPrice>
        {/* chose category product */}
        <CategorySelector
          setCategory={setCategory}
          categorys={categorys}
        ></CategorySelector>
        {/* brand basis products */}
        <div>
          <select
            onChange={(e) => setBrand(e.target.value)}
            className="p-2 w-full  block h-full outline-0 rounded-[4px]"
          >
            <option value="">Brands</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        {/* sort data price low to hi */}
        <div>
          <button onClick={()=>setSortPrice("low")} className="base-color px-3 rounded-[4px]">Low to Hi</button>
        </div>
      </section>
      {/* all products container */}
      <section className="col-span-4">
        <Products
          sortPrice={sortPrice}
          category={category}
          brand_name={brand}
          maxPrice={parseInt(maxPrice)}
          minPrice={parseInt(minPrice)}
          searchText={searchText}
          handelPage={handelPage}
          handelPreviusPage={handelPreviusPage}
          handelNextPage={handelNextPage}
          selectedPage={selectedPage}
          perpageItem={perpageItem}
          pages={pages}
          setSelectedPage={setSelectedPage}
        ></Products>
      </section>
    </div>
  );
};

export default Shop;
