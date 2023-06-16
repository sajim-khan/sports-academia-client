import React from "react";
import useClass from "../../Hooks/useClass";
import Marquee from "react-marquee-slider";

import Banner from "../../Components/Home/Banner/Banner";
import Title from "../../Common/Title/Title";

const Instructors = () => {
  const [instructor] = useClass();

  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <div className="container mx-auto mt-32">
        <Title
          subHeading={"OUR POPULAR TRAINER"}
          heading={"EXPLORE YOUR FAVORITE INSTRUCTOR"}
        ></Title>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {instructor.map((instructor) => (
            <div
              key={instructor.instructorName}
              className="w-full mb-4 px-2 transition duration-300 ease-in transform hover:scale-105"
            >
              <div className="bg-indigo-600 border border-gray-200 rounded-lg shadow">
                <div className="flex justify-end px-4 pt-4">
                  {/* Remove the button code */}
                </div>
                <div className="flex flex-col items-center pb-6 md:pb-10">
                  <img
                    className="w-32 h-32 mb-3 rounded-full shadow-lg"
                    src={instructor.instructorImage}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-white">
                    {instructor.instructorName}
                  </h5>
                  <span className="text-sm text-yellow-50">
                    {instructor.instructorEmail}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add friend
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      Message
                    </a>
                  </div>
                </div>
                <div className="flex justify-between px-4 mt-auto">
                  <div>
                    <p className="text-sm text-white">
                      Students: {instructor.numStudents}
                    </p>
                    <p className="text-sm text-white">
                      Seats available: {instructor.availableSeats}
                    </p>
                  </div>
                  <p className="text-sm text-white">
                    Class: {instructor.className}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
