import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="bg-base-100 my-4">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div>
              <h3 className="text-3xl text-center font-semibold text-blue-600">--- Testimonials ---</h3>
            </div>
            <div className="flex flex-col items-center mx-24 my-10">
              <h2 className="text-2xl text-blue-600">{review.name}</h2>
              <h2 className="text-2xl text-blue-600 mt-3">{review.date}</h2>
              <p className="py-8 font-medium">{review.details}</p>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
