
import useAllProduct from "../../../Hooks/useAllProduct";
import Loader from "../../../shared/Loader";
import Product from "../../Products/Product";

const FeatureProduct = () => {
  const { products, isLoading } = useAllProduct(
    "0",
    "10",
    "",
    "",
    "",
    "",
    "",
    ""
  );
  if (isLoading && products.length < 1) {
    return <Loader></Loader>;
  }
  return (
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
  );
};

export default FeatureProduct;
