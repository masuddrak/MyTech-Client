
// eslint-disable-next-line react/prop-types
const CategoryCard = ({ title, subTitle, icon }) => {
    return (
        <div className="flex items-center gap-3 bg-white px-[20px] py-[15px] rounded-md shadow-sm">
            <div className="h-[50px] w-[50px] base-color flex justify-center items-center rounded-full">
               <p className="text-[24px]"> {icon}</p>
            </div>
            <div>
                <h4 className="text-[18px] font-bold">{title}</h4>
                <p className="text-[15px]">{subTitle}</p>
            </div>
        </div>
    );
};

export default CategoryCard;