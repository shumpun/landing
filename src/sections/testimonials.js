import React from "react";
import { Box } from "theme-ui";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "components/block-title";
import TestimonialsCard from "components/cards/testimonial-card";

SwiperCore.use([Autoplay]);

const Testimonials = ({ testimonials = [] }) => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle title="What people say about us" text="Testimonials" />
      {testimonials.length && (
        <Swiper {...testimonialCarousel}>
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialsCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: "#F4F4F6",
    pt: ["60px", null, null, null, "60px", null, "60px"],
    pb: ["60px", null, null, null, "80px", null, "120px"],
  },
};
