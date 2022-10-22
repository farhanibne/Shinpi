import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'pages/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';


SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {

      text:
        'We are a open source non profitable company, just searching for a way to make the world a better place. And behind that, we are a group of people who are passionate about technology and want to make a difference in the world. Futhermore, we love to solve mystery. Such a thing we are finding unknown.',
    },
    {

      text:
        'We have not any dedicated mission to solve. We are in a sll together mission to find and solve to help the earth. History is also a mystery.',

    },
  ],
  [
    {

      text:
        'Do you think, what we give as our name is the correct name ? We dont know. And where do we live. The perfect answer is: somewhere in the world. We are not a company, we are just a group of something . Have a nice day.'
    },
    {

      text:
        'World is a mystery. We are finding unknown. I think everybody should dedicated their life to solve those, how pyramids are built without any technology 5000 years ago or how the mayans are too intelligent.'
    },
  ],
 
 
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
        title="Who we are"
        text="A little description about us."
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({  text }, _index) => (
              <TestimonialsCard

                text={text}

                key={_index}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['px'],
  },
};
