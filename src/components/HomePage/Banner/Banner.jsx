import Sidebar from "./Sidebar";
import Slider from "./Slider";


const Banner = () => {
  return (
    <div className="grid grid-cols-1 -z-10 mt-10 xl:mt-0  xl:grid-cols-4 my gap-6">
      <div className="xl:col-span-3">
        <Slider></Slider>
      </div>
      <div className="xl:col-span-1">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Banner;
