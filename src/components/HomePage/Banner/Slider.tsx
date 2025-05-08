// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import banner1 from "../../../assets/banner1.webp";
import banner2 from "../../../assets/bannner2.webp";
import banner3 from "../../../assets/bannner3.webp";
import banner4 from "../../../assets/bannner4.webp";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider() {
  const images = [banner1, banner2, banner3, banner4];
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="w-full" src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
