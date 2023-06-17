import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts/MainLayouts";
import Home from "../../Components/Home/Home/Home";
import Login from "../../Pages/Share/Login/Login";
import SignUp from "../../Pages/Share/SignUp/SignUp";

import MyEnrolled from "../../Pages/Dashobord/MyEnrolled/MyEnrolled";
import Payment from "../../Pages/Dashobord/Payment/Payment";
import Class from "../../Pages/Class/Class";
import MyClass from "../../Pages/Dashobord/MyClass/MyClass";
import Instructors from "../../Pages/Instructors/Instructors";
import ManageUser from "../../Pages/Dashobord/ManageUser/ManageUser";
import AddClass from "../../Pages/Dashobord/AddClass/AddClass";
import PrivetRouter from "./PrivetRouter";
import InstructorClasses from "../../Pages/Dashobord/AddClass/InstructorClasses/InstructorClasses";
import ManageClass from "../../Pages/Dashobord/ManageClass/ManageClass";
import Error from "../../Components/Home/Error/Error";
import Dashbord from "../../Pages/Dashobord/Dashbord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/class",
        element: <Class></Class>,
      },
      {
        path: "/instructor",
        element: <Instructors></Instructors>,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <Dashbord></Dashbord>,
    // element: (
    //   <PrivetRouter>
    //     {" "}
    //     {" "}
    //   </PrivetRouter>
    // ),
    children: [
      {
        path: "myEnroll",
        element: <MyEnrolled></MyEnrolled>,
      },
      {
        path: "payment",

        element: <Payment></Payment>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "InstructorClass",
        element: <InstructorClasses></InstructorClasses>,
      },
      {
        path: "manageClass",
        element: <ManageClass></ManageClass>,
      },
    ],
  },
]);
