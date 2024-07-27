import React from "react";
import { clientList } from "../../data/Data";
import Slider from "react-slick";

const ClientContent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="our-client">
      <div className="container">
        <Slider {...settings} className="client-slider">
          {clientList.map((item) => (
            <div className="single-client d-flex" key={item.id}>
              <img src={item.imgSrc} alt={item.id} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientContent;
