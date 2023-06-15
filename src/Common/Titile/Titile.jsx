import React from "react";

const Titile = ({ heading, subHeading }) => {
  return (
    <div className="font-serif font-bold">
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className=" text-red-500 mb-2"> {subHeading}</p>
        <h3 className="text-3xl  text-indigo-600 uppercase border-y-4 py-4">
          {heading}
        </h3>
      </div>
    </div>
  );
};

export default Titile;
