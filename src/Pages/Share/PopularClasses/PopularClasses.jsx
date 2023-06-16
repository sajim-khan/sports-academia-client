import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../../../Common/Title/Title";


const PopularClasses = () => {
  const [classesData, setClassesData] = useState([]);
  console.log(classesData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("sportsData.json");
      setClassesData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const sortedClasses = classesData.sort(
    (a, b) => b.numStudents - a.numStudents
  );

  const topClasses = sortedClasses.slice(0, 6);

  return (
    <div className=" container w-1/2 mx-auto mt-32 ">
      <Title
        heading={" Popular Classes"}
        subHeading={"Select Your Class"}
      ></Title>

      <div className="popular-classes-container  grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {topClasses.map((classItem) => (
          <div
            key={classItem.classImage}
            className="class-card border-indigo-500 border-spacing-2"
          >
            <a
              href="#"
              className="group relative block bg-indigo-600 h-96 border border--600"
            >
              <img
                alt="Developer"
                src={classItem.classImage}
                className="absolute inset-0 h-full w-full p-1 object-cover opacity-90 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm  uppercase tracking-widest font-serif font-bold text-red-500">
                  STUDENT IN{" "}
                  <span className="text-indigo-500">
                    CLASS {classItem.numStudents}
                  </span>
                </p>

                <p className="text-xl font-bold text-indigo-700 sm:text-2xl">
                  {classItem.className}
                </p>

                <div className="mt-32 ">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="btn bg-blue-900 text-white btn-sm">
                      {" "}
                      BOOK NOW
                    </button>

                    <p className="text-sm text-white">
                      A sport is a physical activity that people do for fun and
                      as a way to compete with others. People have enjoyed
                      sports for thousands of years. Every sport has a set of
                      rules that the players follow.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
