import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useSelected from "../../Hooks/useSelected";

const SlectedClass = ({ clas }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useSelected();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    classImage,
    instructorName,
    numStudents,

    price,
    instructorImage,
    className,
    instructorEmail,
    instructorClassesTaken,
    availableSeats,
    _id,
  } = clas;

  const handleSelectClass = (clas) => {
    if (user && user.email) {
      const slectedClass = {
        email: user?.email,
        classId: _id,
        classImage,
        instructorName,
        numStudents,

        price,
        instructorImage,
        className,
        instructorEmail,
        instructorClassesTaken,
        availableSeats,
      };
      fetch("http://localhost:5000/slectedClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(slectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch;
          console.log(data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class added .",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        title: "Please login to Slect Class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div>
        <div
          href="#"
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
        >
          <img
            alt="Home"
            src={clas.classImage}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only"></dt>

                <dd className="text-sm text-gray-500">$ {clas.price} Price </dd>
              </div>

              <div className="flex  justify-between">
                {/* <dt className="sr-only">Address</dt> */}

                <dd className="font-medium">{clas.className} </dd>
                <dd className="font-medium mx-5">
                  {" "}
                  Trainer: {clas.instructorName}{" "}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">student</p>

                  <p className="font-medium">{clas.numStudents} </p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Availabe Seat </p>

                  <p className="font-medium">{clas.availableSeats} </p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <button
                    onClick={() => handleSelectClass(clas)}
                    className="btn bg-indigo-500 text-white  btn-sm btn-outline"
                  >
                    {" "}
                    Slect CLass
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlectedClass;
