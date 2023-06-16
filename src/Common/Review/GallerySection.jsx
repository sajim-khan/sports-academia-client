import React from "react";
import Title from "../Title/Title";


const GallerySection = () => {
  const cardData = [
    {
      id: 1,
      name: "Jon",

      image:
        "https://st4.depositphotos.com/4218696/40440/i/450/depositphotos_404403774-stock-photo-surprised-shocked-little-boy-looking.jpg",

      review:
        " his shop has a great variety of beautiful toys and  Ann good Products",
    },
    {
      name: "Da",

      id: 2,
      image:
        "https://st2.depositphotos.com/15865422/46018/i/600/depositphotos_460188556-stock-photo-surprised-little-preschool-girl-look.jpg",
      review:
        " his shop has a great variety of beautiful toys and  Ann good Products",
    },
    {
      id: 3,
      name: "MEGHLA",
      review:
        " his shop has a great variety of beautiful toys and  Ann good Products",

      image:
        "https://img.freepik.com/premium-photo/amused-kid-perfect-surprise-wow-reaction-special-offer-portrait-happy-amazed-impressed-little-girl-white-enjoying-good-news-smiling-isolated-yellow-empty-space-advertising-background_279525-20441.jpg",
    },
    {
      id: 4,
      name: "RUKAIYA",
      review:
        " his shop has a great variety of beautiful toys and  Ann good Products",

      image:
        "https://img.freepik.com/free-photo/surprised-ginger-kid-listens-audio-track-headphones-impressed-by-loud-sound-opens-mouth-with-wonder-wears-oversized-knitted-sweater-isolated-yellow-wall-children-hobby-concept_273609-42095.jpg",
    },
  ];

  return (
    <div>
      <section className="mx-auto w-fit p-12 mt-20 ">
        <Title
          heading={"Clients Review"}
          subHeading={"What is says our student "}
        ></Title>
        <div className="grid grid-cols-1  hover:scale-105 hover:shadow-xl duration-500 rounded-3xl md:grid-cols-2 lg:grid-cols-4  bg-indigo-600 justify-center">
          {cardData.map((card) => (
            <div className="p-5" key={card.id} card={card}>
              <div className="py-12 ">
                <div className="mx-auto container max-w-[228px] px-4 py-4 bg-white rounded relative">
                  <div className="flex gap-2">
                    <svg
                      className="w-4 h-4"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75 2C4.57469 2 2 4.57469 2 7.75C2 10.9253 4.57469 13.5 7.75 13.5C10.9253 13.5 13.5 10.9253 13.5 7.75C13.5 4.57469 10.9253 2 7.75 2Z"
                        stroke="#1F2937"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M6.875 6.875H7.875V10.5"
                        stroke="#1F2937"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.5 10.625H9.25"
                        stroke="#1F2937"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M7.75 4.0625C7.5893 4.0625 7.43222 4.11015 7.2986 4.19943C7.16499 4.28871 7.06084 4.41561 6.99935 4.56407C6.93785 4.71254 6.92176 4.8759 6.95311 5.03351C6.98446 5.19112 7.06185 5.3359 7.17548 5.44953C7.28911 5.56316 7.43388 5.64054 7.59149 5.67189C7.7491 5.70324 7.91247 5.68715 8.06093 5.62566C8.2094 5.56416 8.3363 5.46002 8.42557 5.3264C8.51485 5.19279 8.5625 5.0357 8.5625 4.875C8.5625 4.65951 8.4769 4.45285 8.32453 4.30048C8.17215 4.1481 7.96549 4.0625 7.75 4.0625Z"
                        fill="#1F2937"
                      />
                    </svg>
                    <p className="text-sm font-semibold leading-none text-indigo-800">
                      {card.name}
                    </p>
                  </div>
                  <p className=" text-xs leading-none text-gray-600 pt-2 pb-2">
                    This club is my favourite
                  </p>
                  <svg
                    className="absolute z-10 bottom-[-10px]"
                    width={16}
                    height={10}
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
                  </svg>
                  <svg
                    className="absolute bottom-[-30px] z-10 cursor-pointer"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.75 2C4.57469 2 2 4.57469 2 7.75C2 10.9253 4.57469 13.5 7.75 13.5C10.9253 13.5 13.5 10.9253 13.5 7.75C13.5 4.57469 10.9253 2 7.75 2Z"
                      stroke="#1F2937"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M6.875 6.875H7.875V10.5"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 10.625H9.25"
                      stroke="#1F2937"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.75 4.0625C7.5893 4.0625 7.43222 4.11015 7.2986 4.19943C7.16499 4.28871 7.06084 4.41561 6.99935 4.56407C6.93785 4.71254 6.92176 4.8759 6.95311 5.03351C6.98446 5.19112 7.06185 5.3359 7.17548 5.44953C7.28911 5.56316 7.43388 5.64054 7.59149 5.67189C7.7491 5.70324 7.91247 5.68715 8.06093 5.62566C8.2094 5.56416 8.3363 5.46002 8.42557 5.3264C8.51485 5.19279 8.5625 5.0357 8.5625 4.875C8.5625 4.65951 8.4769 4.45285 8.32453 4.30048C8.17215 4.1481 7.96549 4.0625 7.75 4.0625Z"
                      fill="#1F2937"
                    />
                  </svg>
                </div>
              </div>

              <div className="w-72  group">
                <div className="relative overflow-hidden">
                  <img
                    className="h-72  w-full object-cover"
                    src={card.image}
                    alt=""
                  />
                  <div className="absolute h-full w-full  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-black text-white py-2 px-5">
                      {card.review}
                    </button>
                  </div>
                  <div className="">
                    {/* <button className="bg-black text-white py-2 px-5">
                     
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GallerySection;
