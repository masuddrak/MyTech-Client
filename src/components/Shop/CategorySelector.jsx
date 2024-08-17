import PropTypes from "prop-types";

const CategorySelector = ({setCategory,categorys}) => {
    return (
        <div>
          <select onChange={(e)=>setCategory(e.target.value)} className="p-2 w-full  block h-full outline-0 rounded-[4px]">
            <option value="">Categorys</option>
            {
              categorys.map((category ,index)=><option key={index} value={category}>{category}</option>)
            }
          </select>
        </div>
    );
};

export default CategorySelector;
CategorySelector.propTypes = {
    setCategory: PropTypes.func,
    categorys: PropTypes.array,
  };