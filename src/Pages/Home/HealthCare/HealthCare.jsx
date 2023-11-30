import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import "swiper/css";

const HealthCare = () => {
  return (
    <section className="bg-base-200 py-3">
      <h3 className="text-center text-blue-500 font-semibold text-3xl py-4">
       --- Healthcare Professionals ---
      </h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/XSfQS6v/istockphoto-1494324933-1024x1024.jpg"
            alt=""
          />
          <h3 className="text-3xl font-semibold uppercase text-center ">
            doctor mizan
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/QMnz02k/stock-photo-cheee.jpg" alt="" />
          <h3 className="text-3xl font-semibold uppercase text-center ">
            Doctor Faiza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/XWSpxh1/360-F-320523164-tx7-Rdd7-I2-XDTvv-Kfz2o-Ru-Rp-KOPE5z0ni.jpg"
            alt=""
          />
          <h3 className="text-3xl font-semibold uppercase text-center ">
            doctor Faruk
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/PtZvmGk/istockphoto-1425798958-1024x1024.jpg"
            alt=""
          />
          <h3 className="text-3xl font-semibold uppercase text-center ">
            Doctor lima
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/bsXGhF5/istockphoto-1203995945-1024x1024.jpg"
            alt=""
          />
          <h3 className="text-3xl font-semibold uppercase text-center ">
            Doctor limon
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HealthCare;


// import slide1 from "../../../assets/home/slide1.jpg";
// import slide2 from "../../../assets/home/slide2.jpg";
// import slide3 from "../../../assets/home/slide3.jpg";
// import slide4 from "../../../assets/home/slide4.jpg";
// import slide5 from "../../../assets/home/slide5.jpg";
// import SectionTitle from "../../../Components/SectioTitle/SectionTitle";

// const Category = () => {
  
// };

// export default Category;