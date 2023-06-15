import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cover1 from "../../../assets/cover/imgbin_football-uniform-child-kit-png.png";
import cover2 from "../../../assets/cover/imgbin_team-sport-football-player-png.png";

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider className=" w-full h-full" {...settings}>
        <div>
          <img className="h-96" src={cover1} alt="Image 1" />
        </div>
        <div>
          <img className="" src={cover2} alt="Image 2" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;
