import PropTypes from "prop-types";
interface CategorySelectorProps {
  setCategory: (category: string) => void;
  categorys: string[];
};

const CategorySelector:React.FC<CategorySelectorProps> = ({ setCategory, categorys }) => {
  return (
    <div>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 w-full  block h-full outline-0 rounded-[4px]"
      >
        <option value="">Categorys</option>
        {categorys.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;

