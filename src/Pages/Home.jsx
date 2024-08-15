import Banner from "../components/Banner";
import Category from "../components/Category/Category";
import Featured from "../components/featured/Featured";
import Products from "../components/Products/Products";
import Storege from "../components/Storege";


const Home = () => {
    return (
        <div className="px-3 -z-10 xl:px-0 ">
            {/* banner */}
            <div className="py-6 xl:mt-14 ">
                <Banner></Banner>
            </div>
            {/* category */}
            <div className="py-6">
                <Category></Category>
            </div>
            {/* featured */}
            <div className="py-6">
                <Featured></Featured>
            </div>
            <div className="py-6">
                <Storege></Storege>
            </div>
            {/* all products */}
            <div className="py-6">
                <Products></Products>
            </div>
            
        </div>
    );
};

export default Home;