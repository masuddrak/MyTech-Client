import { IoIosClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
interface ProductListProps {
  getProductList: {
    addedProductList: {
      _id: string;
      name: string;
      price: number;
      product_image: string;
    }[];
    quntity: number;
  };
}
const AddProductListCard: React.FC<ProductListProps> = ({ getProductList }) => {
  console.log(getProductList, "getProductList");
  return (
    <div>
      {getProductList?.addedProductList?.map((product) => (
        <div
          key={product._id}
          className="shadow-sm px-3 py-2   "
        >
          <div>
            <div className="flex items-start gap-2">
              <img
                className="w-10 h-10 object-cover"
                src={product?.product_image}
                alt=""
              />
              <h5>{product.name}</h5>
              <MdDelete className="text-2xl"></MdDelete>
            </div>
          </div>
          <div className="flex justify-between w-full relative items-center gap-2 mt-4">
            <div className="flex items-center gap-2 ml-12">
              <div className="flex items-center gap-2">
                <p className="flex items-center ">
                  {product?.price}
                  <span className="font-extrabold text-sm">৳</span>
                </p>
                <IoIosClose></IoIosClose>
              </div>
              <p> {getProductList.quntity}</p>
            </div>
            <div>
              <p className="flex items-center ">
                = {product?.price * getProductList.quntity}
                <span className="font-extrabold text-sm">৳</span>
              </p>
            </div>
          </div>
          {/* <p>{ product.quntity}</p> */}

          <div className="absolute left-0 bottom-0 space-y-2 w-full bg-white ">
            <div className="space-y-2 px-2">
              <form className="flex justify-between items-center ">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="w-full outline-none p-1 bg-slate-100"
                />
                <button className="primaryB text-white p-1 ">Apply</button>
              </form>
              <div className="flex justify-between items-center gap-3">
                <h3>Sub Total</h3>
                <p className="flex items-center ">
                  {product?.price * getProductList.quntity}
                  <span className="font-extrabold text-sm">৳</span>
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <h3>Total</h3>
                <p className="flex items-center ">
                  {product?.price * getProductList.quntity}
                  <span className="font-extrabold text-sm">৳</span>
                </p>
              </div>
            </div>
            <div>
              <button className="bg-[#EF4A23] text-white w-full py-2">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddProductListCard;
