import React from "react";
import {
  FaArrowRight,
  FaBook,
  FaDashcube,
  FaHome,
  FaPaypal,
  FaProductHunt,
  FaSchool,
  FaSign,
  FaUser,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import UseInstructor from "../../Hooks/UseInstructor";

const Dashbord = () => {
  const [admin, isAdminLoading] = UseAdmin();
  const [instructor, isInstructorLoading] = UseInstructor();

  if (isAdminLoading || isInstructorLoading) {
    return <div>Loading...</div>;
  }

  // {
  //   !admin && !instructor && (
  //     <div className="bg-yellow-500">Payment Color (Normal User)</div>
  //   );
  // }

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to="/" className="flex ml-2 md:mr-24">
                <img
                  src="https://img.freepik.com/premium-vector/modern-sports-logo-template-with-flat-design_23-2147946074.jpg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  SPORTS CLUB
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          {/* isSTudent ?  */}

          <div className="bg-slate-100"></div>

          <ul className="space-y-2 font-medium">
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaDashcube className="text-2xl"></FaDashcube>
                <span className="ml-3"> DASHBORD</span>
              </div>
            </li>
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaSchool></FaSchool>
                <Link to="myClass">
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {" "}
                    MY CLASS
                  </span>
                </Link>

                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </div>
            </li>
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaPaypal className="text-2xl text-indigo-600"></FaPaypal>

                <Link to="payment">
                  <span className="flex-1 ml-3 whitespace-nowrap">Payment</span>
                </Link>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </div>
            </li>
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaBook></FaBook>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {" "}
                  MY ENROLL CLASS
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </div>
            </li>

            {/* ---------- */}

            {/* instructor */}

            {instructor && (
              <div className="bg-blue-700">
                <li>
                  <div
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaUser className="text-2xl text-indigo-600"></FaUser>

                    <Link to="addClass">
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        ADD A CLASS
                      </span>
                    </Link>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaUser className="text-2xl text-indigo-600"></FaUser>

                    <Link to="InstructorClass">
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        My Classes
                      </span>
                    </Link>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  </div>
                </li>
              </div>
            )}

            {/*  admin */}

            {admin && (
              <div className="bg-red-400">
                {" "}
                <li>
                  <div
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaUser className="text-2xl text-indigo-600"></FaUser>

                    <Link to="manageUser">
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        MANAGE USER{" "}
                      </span>
                    </Link>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaUser className="text-2xl text-indigo-600"></FaUser>

                    <Link to="manageClass">
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Manage Classes:
                      </span>
                    </Link>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  </div>
                </li>
              </div>
            )}

            <hr className="border" />
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaHome></FaHome>

                <span className="flex-1 ml-3 whitespace-nowrap">HOME </span>
              </div>
            </li>
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaProductHunt></FaProductHunt>

                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </div>
            </li>
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaSign></FaSign>

                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </div>
            </li>
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaArrowRight></FaArrowRight>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;

