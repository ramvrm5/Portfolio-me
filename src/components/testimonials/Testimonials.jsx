import React, { useEffect, useState } from 'react';

import { collection, doc, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './testimonials.css';


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {

    const getTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      setTestimonials(querySnapshot.docs.map((doc) => doc.data()));
    }
    getTestimonials();

  }, [])

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {
          testimonials.map(({ image }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <img src={image} alt="Avatart one" />
                {/* <div className="client__avatar">
                  <img src={avatar} alt="Avatart one" />
                </div>
                <h5>{name}</h5>
                <small className="client__review">
                  {review}
                </small> */}
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials