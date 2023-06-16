import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../../../Pages/Share/PopularClasses/PopularClasses";

import PopularInstructors from "../../../Pages/PopularInstructors/PopularInstructors";
import ParticlesBg from "particles-bg";
import GallerySection from "../../../Common/Review/GallerySection";
import BannerVideo from "../Banner/BannerVideo/BannerVideo";

const Home = () => {
  return (
    <div>
      <ParticlesBg
        className="mx-auto container"
        type="circle"
        bg={true}
        num={5}
      />
      <div className="my-0 py-0">
        <Banner></Banner>
      </div>

      <div>
        <PopularClasses></PopularClasses>
      </div>

      <div>
        <PopularInstructors></PopularInstructors>
      </div>

      <div className="container mx-auto">
        <BannerVideo />
      </div>

      <GallerySection></GallerySection>
      <ParticlesBg
        className="mx-auto container"
        type="ball"
        bg={true}
        num={5}
      />
      <div></div>
    </div>
  );
};

export default Home;
