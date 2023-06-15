import React from "react";
import Marquee from "react-marquee-slider";

const Logo = () => {
  const cardData = [
    {
      image:
        "https://i.pinimg.com/736x/51/5e/ed/515eed2e3701d135a33a0be5ac493941.jpg",
      title: "Football",
    },
    {
      image:
        "https://static5.depositphotos.com/1012094/501/v/600/depositphotos_5017448-stock-illustration-cricket-background.jpg",
      title: "Cricket",
    },
    {
      image:
        "https://i.pinimg.com/736x/51/5e/ed/515eed2e3701d135a33a0be5ac493941.jpg",
      title: "Soccer",
      description: "Description 3",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oQB45gja58IC7LE89-e30CmFaHn1blF0NxIiaiWnmJCN8bm09secnWPVv0bd2wMXKHo&usqp=CAU",
      title: "Tennis",
      description: "Description 4",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyTbJMZmrUEyPtWh4SfY_fXwMdm5G_9Jhyqr3CIqtitKyhKLhjmvtag2qj0kSMHy5ciU&usqp=CAU",
      title: "Basketball",
      description: "Description 5",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
      title: "Baseball",
      description: "Description 6",
    },
    {
      image:
        "https://media.istockphoto.com/id/1316842892/vector/golf-ball-vector-logo-golf-ball-on-tee-with-wreath-and-crown-vector-illustration.jpg?s=612x612&w=0&k=20&c=14Ox6PK8aVysMUN6SNGWHLPGnN4Roz7trBZsrdlm1xk=",
      title: "Golf",
      description: "Description 7",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/03/63/87/80/360_F_363878072_EKomOkjmke5wZPZo9qIRuMgd3h37oI9t.jpg",
      title: "Hockey",
      description: "Description 8",
    },
    {
      image:
        "https://png.pngtree.com/templates/sm/20180519/sm_5b003e7c06eb2.jpg",
      title: "Badminton",
      description: "Description 9",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/011/161/984/original/volleyball-logo-design-template-vector.jpg",
      title: "Volleyball",
      description: "Description 10",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/01/05/87/39/360_F_105873983_jtA1SGMqRd1lI67mry39OYDf9SEGE0ko.jpg",
      title: "Swimming",
      description: "Description 11",
    },
    {
      image:
        "https://st2.depositphotos.com/3431221/10712/v/450/depositphotos_107127572-stock-illustration-mountain-biker-front-view-abstract.jpg",
      title: "Cycling",
      description: "Description 12",
    },
  ];
  return (
    <div className="mt-8 container mx-auto">
      <Marquee velocity={30} direction="rtl" className="flex items-center ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center  mx-2"
          >
            <a
              style={{ backgroundImage: `url(${card.image})` }}
              href="#"
              className="relative block overflow-hidden rounded-3xl bg-indigo-500 bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute inset-0 bg-black/5"></div>

              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 className="text-xl font-bold sm:text-2xl"></h3>

                  <p className="text-sm text-red-700  mt-10 font-bold">
                    {" "}
                    {/* {card.title} */}
                  </p>
                </div>

                <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                  4.5
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Logo;
