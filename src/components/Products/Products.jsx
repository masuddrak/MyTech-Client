import Product from "./Product";
import PropTypes from 'prop-types';

import useAllProduct from "../../Hooks/useAllProduct";


const Products = ({
  brand_name,
  category,
  maxPrice,
  minPrice,
  searchText,
  selectedPage,
  perpageItem,
  handelPage,
  handelPreviusPage,
  handelNextPage,
  pages,
  setSelectedPage
}) => {
  const { products, isLoading } = useAllProduct(selectedPage, perpageItem,searchText, maxPrice,
    minPrice,category,brand_name);

  if (isLoading) {
    return <h1 className="3xl font-extrabold">Loading...........</h1>;
  }
console.log(brand_name)
  return (
    <div>
      {/* load all product */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products?.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            price={product.price}
            discount_price={product.discount_price}
            product_image={product.product_image}
          ></Product>
        ))}
      </div>
      {/*  */}
      <div className="my-4">
        <div className="flex justify-center my-4">
          <div className="space-x-2">
            <button
              onClick={handelPreviusPage}
              className="bg-[#081621] text-white px-2 "
            >
              previus
            </button>
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setSelectedPage(page)}
                className={
                  selectedPage === page
                    ? " base-color  px-2  "
                    : " bg-neutral-800  px-2  text-white"
                }
              >
                {page}
              </button>
            ))}
            <button
              onClick={handelNextPage}
              className="bg-[#081621] text-white px-2 "
            >
             Next
            </button>
            <select
              name="item"
              value={perpageItem}
              onChange={handelPage}
              className="border border-1 border-[#EF4A23] outline-0"
            >
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
Products.propTypes = {
  selectedPage:PropTypes.number,
  perpageItem:PropTypes.number,
  handelPage:PropTypes.func,
  handelPreviusPage:PropTypes.func,
  handelNextPage:PropTypes.func,
  pages:PropTypes.array,
  setSelectedPage:PropTypes.func,
  searchText:PropTypes.string,
  minPrice:PropTypes.number,
  maxPrice:PropTypes.number,
  category:PropTypes.string,
  brand_name:PropTypes.string,
}