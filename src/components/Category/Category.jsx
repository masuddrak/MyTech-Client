import CategoryCard from "./CategoryCard";
import { BsLaptop } from "react-icons/bs";

const Category = () => {
    return (
        <div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <CategoryCard title={"Laptop Finder"} subTitle={"Find Your Laptop Easily"} icon={<BsLaptop />}></CategoryCard>
                <CategoryCard title={"Laptop Finder"} subTitle={"Find Your Laptop Easily"} icon={<BsLaptop />}></CategoryCard>
                <CategoryCard title={"Laptop Finder"} subTitle={"Find Your Laptop Easily"} icon={<BsLaptop />}></CategoryCard>
                <CategoryCard title={"Laptop Finder"} subTitle={"Find Your Laptop Easily"} icon={<BsLaptop />}></CategoryCard>
            </div>

            <p className="bg-white py-2 px-4 rounded-full mt-5 text-sm text-[#444]">
                <marquee>9th July Tuesday, all our outlets are open except Multiplan outlets. Additionally, our online activities are open and operational.</marquee>
            </p>

        </div>
    );
};

export default Category;