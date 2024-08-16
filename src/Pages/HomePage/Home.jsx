import Storege from "../../components/CommonCard/Storege";
import Banner from "../../components/HomePage/Banner/Banner";
import Category from "../../components/HomePage/Category/Category";
import Featured from "../../components/HomePage/featured/Featured";



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
      {/* feature product */}
      <div className="py-6">
        
      </div>
    </div>
  );
};

export default Home;
