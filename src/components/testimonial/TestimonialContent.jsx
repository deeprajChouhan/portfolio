import React, { useRef } from "react";
import { testimonialList } from "../../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";


const TestimonialContent = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="testimonial">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-5">
            <h2 className="section-title title-center">
              Mentors Say About <span>me</span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-md-10">
            <Swiper
              ref={swiperRef}
              className="testimonial-slider"
              slidesPerView={1}
              loop={true}
              effect="fade"
              autoplay={{ delay: 3000 }}
              navigation={{
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
              }}
              modules={[Autoplay,Navigation,EffectFade]}
            >
              {testimonialList.map((item) => (
                <SwiperSlide className="single-feedback" key={item.id}>
                  <div className="part-img">
                    <img src={item.imgSrc} alt={item.name} />
                  </div>
                  <div className="part-txt">
                    <p style={{justifyContent: "justify"}}>{item.review}</p>
                    <h3>{item.name}</h3>
                    <span>{item.position}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testimonial-btn-container">
              <button type="button" className="testimonial-btn testimonial-prev" onClick={handlePrev}><i className="fa-regular fa-left-long"></i></button>
              <button type="button" className="testimonial-btn testimonial-next" onClick={handleNext}><i className="fa-regular fa-right-long"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContent;
