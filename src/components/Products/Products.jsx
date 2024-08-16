import Product from "./Product";
import PropTypes from 'prop-types';

import useAllProduct from "../../Hooks/useAllProduct";

const Products = ({
  selectedPage,
  perpageItem,
  handelPage,
  handelPreviusPage,
  handelNextPage,
  pages,
  setSelectedPage
}) => {
  const { products, isLoading } = useAllProduct(selectedPage, perpageItem);

  if (isLoading) {
    return <h1 className="3xl font-extrabold">Loading...........</h1>;
  }

  return (
    <div>
      {/* load all product */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
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
          <div>
            <button
              onClick={handelPreviusPage}
              className="btn bg-neutral-800 mx-2 px-2 text-white"
            >
              previus
            </button>
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setSelectedPage(page)}
                className={
                  selectedPage === page
                    ? "btn base-color mx-2 px-2 "
                    : "btn bg-neutral-800 mx-2 px-2 text-white"
                }
              >
                {page}
              </button>
            ))}
            <button
              onClick={handelNextPage}
              className="btn bg-neutral-800 mx-2 px-2 text-white"
            >
              Next
            </button>
            <select
              name="item"
              value={perpageItem}
              onChange={handelPage}
              className="border border-1 border-gray-800"
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
}