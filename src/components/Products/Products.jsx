import Product from "./Product";

import useAllProduct from "../../Hooks/useAllProduct";
const Products = () => {
  const { products, isLoading } = useAllProduct();

  if (isLoading) {
    return <h1>Loading...........</h1>;
  }
  console.log(products);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl font-bold">Featured Products</h3>
        <p className="mb-[30px]">Check & Get Your Desired Product!</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {products.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            price={product.price}
            discount_price={product.discount_price}
            product_image={product.product_image}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
