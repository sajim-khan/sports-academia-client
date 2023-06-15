import React from "react";
import Logo from "../../Common/Logo/Logo";
import Banner from "../../Components/Home/Banner/Banner";
import useClass from "../../Hooks/useClass";
import SlectedClass from "./SlectedClass";

const Class = () => {
  const [classes] = useClass();

  return (
    <div className="container mx-auto">
      <>
        {" "}
        <Banner></Banner>
      </>
      <Logo></Logo>
      <div className="">
        <div className="  mt-10 grid lg:grid-cols-4 sm:grid:cols-1 md:grid-cols-2 ">
          {classes.map((clas) => (
            <SlectedClass clas={clas} key={clas._id}></SlectedClass>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Class;
