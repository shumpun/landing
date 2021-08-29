import React from "react";
import { Box } from "theme-ui";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "components/block-title";
import TestimonialsCard from "components/cards/testimonial-card";
import test1 from "assets/testimonials/1.jpeg";
import test2 from "assets/testimonials/2.jpeg";

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  {
    image: test2,
    text: "Sayangbrita Das, my daughter was diagnosed with ADHD and social communication disorder when she was 4 years old. She was very much restless, couldn't sit at any place for not even 5 minutes earlier. Today she is studying in class 9 and becomes so calm, obedient and empathetic, as she is doing quite well with her studies. Today she is completely different from what she was in her childhood. I am very much thankful to Shumpun Foundation, for my daughter's such behavioural development.",
    name: "Swagata - Mother",
  },
  {
    image: test1,
    text: "I was diagnosed with ASD at the age of 3 years. I worked with Shumpun Foundation since 2008 to 2018, with the Special Educator along with the drama therapist. Through all these interventions, I have learned to make friends and to work together with other people. At present I am doing my graduation in mainstream.",
    name: "Hritam - Ex Student",
  },
  // [
  //   {
  //     image: testimonialsImage3,
  //     text: "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you",
  //     username: "@hi.veona",
  //     name: "Veona Watson",
  //   },
  //   {
  //     image: testimonialsImage4,
  //     text: "I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result",
  //     username: "@hey.nku",
  //     name: "Paseka Nku",
  //   },
  // ],
  // [
  //   {
  //     image: testimonialsImage5,
  //     text: "Thank you for all your help. Your service was excellent and very FAST.",
  //     username: "@cherice.me",
  //     name: "Cherice Justin",
  //   },
  //   {
  //     image: testimonialsImage6,
  //     text: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
  //     username: "@myself.thais",
  //     name: "Thais Carballal",
  //   },
  // ],
  // [
  //   {
  //     image: testimonialsImage1,
  //     text: "I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.",
  //     username: "@hello.mimmie",
  //     name: "Minnie Horn",
  //   },
  //   {
  //     image: testimonialsImage2,
  //     text: "Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.",
  //     username: "@merryn.manley",
  //     name: "Merryn Manley",
  //   },
  // ],
  // [
  //   {
  //     image: testimonialsImage3,
  //     text: "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you",
  //     username: "@hi.veona",
  //     name: "Veona Watson",
  //   },
  //   {
  //     image: testimonialsImage4,
  //     text: "I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result",
  //     username: "@hey.nku",
  //     name: "Paseka Nku",
  //   },
  // ],
  // [
  //   {
  //     image: testimonialsImage5,
  //     text: "Thank you for all your help. Your service was excellent and very FAST.",
  //     username: "@cherice.me",
  //     name: "Cherice Justin",
  //   },
  //   {
  //     image: testimonialsImage6,
  //     text: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
  //     username: "@myself.thais",
  //     name: "Thais Carballal",
  //   },
  // ],
];

const Testimonials = () => {
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
      <BlockTitle
        title="What client say about us"
        text="Customer testimonial"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map(({ image, text, name, username }) => (
          <SwiperSlide key={new Date().toDateString()}>
            <TestimonialsCard
              image={image}
              text={text}
              name={name}
              key={new Date().toDateString()}
              username={username}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
