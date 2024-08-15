

// eslint-disable-next-line react/prop-types
const Product = ({ image, checkout, name, discount, price }) => {
    return (
        <div className="bg-white p-[15px] relative rounded-md flex flex-col justify-between">
            <p className="absolute left-0 top-3 bg-[#6e2594] text-white text-[12px] px-2 rounded-r-xl" >{checkout}</p>
            <div className="md:w-[228px] md:h-[228px] mt-4 flex justify-center items-center">
                <img className="w-full h-full object-cover flex justify-center items-center" src={image} alt="" />
            </div>
            <div>
                <h6 className="mt-8 font-semibold hover:underline text-[15px] pb-[15px]">{name}</h6>
                <div className="flex gap-5">
                    <p className="text-[#ef4a23] font-bold text-[17px]">{price}<span className="font-extrabold">৳</span></p>
                    <p className="text-sm line-through">{discount}৳</p>
                </div>
            </div>
        </div>
    );
};

export default Product;