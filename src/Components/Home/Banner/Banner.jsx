import React from "react";
import BannerCarousel from "./BannerCourosel";

const Banner = () => {
  const backgroundImageUrl =
    "https://tuk-cdn.s3.amazonaws.com/can-uploader/Hero%2008.png";

  return (
    <section className="container mx-auto  mb-0">
      <div className="w-full relative pb-10 px-6 xl:px-0">
        <img
          className="absolute w-full inset-0 h-full object-cover object-center"
          src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
          alt="we care family"
        />

        <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
          <div className="w-full mx-auto lg:w-1/4 h-full lg:pr-10 xl:pr-0">
            <BannerCarousel></BannerCarousel>
          </div>
          <div role="contentinfo" className="w-full lg:w-1/2 h-full">
            <p tabIndex="0" className="text-emerald-500  text-2xl mb-4">
              Welcome to SportsAcademia
            </p>
            <h1
              tabIndex="0"
              className="text-indigo-600 text-3xl lg:text-4xl font-black mb-8 mr-10"
            >
              Unleash Your Athletic Potential:{" "}
              <span className="text-red-600">Your Gateway to Sports Excellence!</span>
            </h1>
            <p tabIndex="0" className="text-gray-800 font-regular mb-8">
              Engaging in kids sports provides a wide range of benefits for
              children's physical, mental, and social well-being. It promotes
              active lifestyles, helping to combat sedentary habits and
              childhood obesity. Regular participation in sports enhances
              cardiovascular health, builds strength and coordination, and
              improves overall fitness levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
