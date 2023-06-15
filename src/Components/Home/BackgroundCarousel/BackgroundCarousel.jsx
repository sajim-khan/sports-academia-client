import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BackgroundCarousel.css"; // Custom CSS styles

const BackgroundCarousel = () => {
  const carouselItems = [
    {
      imageUrl:
        "https://img.freepik.com/premium-vector/neon-glowing-rectangle-frame-banner-dark-empty-grunge-brick-background_561158-27.jpg",
      title: "Slide 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Button 1",
    },
    {
      imageUrl:
        "https://img.freepik.com/premium-vector/neon-glowing-rectangle-frame-banner-dark-empty-grunge-brick-background_561158-2296.jpg",
      title: "Slide 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Button 2",
    },
    {
      imageUrl:
        "https://img.freepik.com/premium-vector/neon-glowing-rectangle-frame-banner-dark-empty-grunge-brick-background_561158-27.jpg",
      title: "Slide 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      buttonText: "Button 3",
    },
  ];

  return (
    <Carousel autoPlay>
      {carouselItems.map((item, index) => (
        <div key={index} className="carousel-item">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          ></div>
          <div className="content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>{item.buttonText}</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BackgroundCarousel;
