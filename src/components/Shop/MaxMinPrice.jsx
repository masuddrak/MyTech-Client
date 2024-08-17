import PropTypes from "prop-types";
const MaxMinPrice = ({ handelSearchMaxMin }) => {
  return (
    <form onSubmit={handelSearchMaxMin} className=" flex gap-3">
      <input
        type="number"
        name="min"
        placeholder="Min"
        required
        className="p-2 w-full  block h-full outline-0 rounded-[4px]"
      />
      <input
        name="max"
        type="number"
        placeholder="Max"
        className="p-2 w-full  block h-full outline-0 rounded-[4px]"
        required
      />

      <button className="base-color px-3 rounded-[4px]">Sort</button>
    </form>
  );
};

export default MaxMinPrice;
MaxMinPrice.propTypes = {
  handelSearchMaxMin: PropTypes.func,
};
