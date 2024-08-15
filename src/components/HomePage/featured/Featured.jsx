import FeaturedCard from "./FeaturedCard";
import image1 from "../../../assets/featured/ac-48x48.png"
import image2 from "../../../assets/featured/action-camera-48x48.png"

import image3 from "../../../assets/featured/drone-48x48.png"
import image4 from "../../../assets/featured/earbuds-48x48.png"
import image5 from "../../../assets/featured/gimbal-48x48.png"
import image6 from "../../../assets/featured/laptop-48x48.png"
import image7 from "../../../assets/featured/mobile-phone-accessories-48x48.png"
import image8 from "../../../assets/featured/powerstation-48x48.png"
import image9 from "../../../assets/featured/tv-48x48.png"
import image10 from "../../../assets/featured/vr-48x48.png"
const Featured = () => {
    return (
        <div>
            <div className="text-center">
                <h3 className="text-xl font-bold">Featured Category
                </h3>
                <p className="mb-[30px]">Get Your Desired Product from Featured Category!</p>
            </div>
  
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-5">
                <FeaturedCard title={"AC"} image={image1}></FeaturedCard>
                <FeaturedCard title={" Drone"} image={image2}></FeaturedCard>
                <FeaturedCard title={"Gimbal"} image={image3}></FeaturedCard>
                <FeaturedCard title={"TV"} image={image4}></FeaturedCard>
                <FeaturedCard title={"Mobile "} image={image5}></FeaturedCard>
                <FeaturedCard title={"Mobile "} image={image6}></FeaturedCard>
                <FeaturedCard title={"AC"} image={image7}></FeaturedCard>
                <FeaturedCard title={"VR (Virtual )"} image={image8}></FeaturedCard>
                <FeaturedCard title={"AC"} image={image9}></FeaturedCard>
                <FeaturedCard title={"Smart "} image={image10}></FeaturedCard>

                <FeaturedCard title={"Action "} image={image4}></FeaturedCard>
                <FeaturedCard title={"AC"} image={image5}></FeaturedCard>
                <FeaturedCard title={"Bluetooth "} image={image6}></FeaturedCard>
                <FeaturedCard title={"Earbuds"} image={image7}></FeaturedCard>
                <FeaturedCard title={"AC"} image={image9}></FeaturedCard>
                <FeaturedCard title={"Gaming "} image={image10}></FeaturedCard>
            </div>
        </div>
    );
};

export default Featured;