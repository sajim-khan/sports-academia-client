import React, { useContext } from "react";
import useSelected from "../../../Hooks/useSelected";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyClass = () => {
  const [slectedClass, refetch] = useSelected();
  // console.log(user);
  // console.log(slectedClass);
  const handleDelete = (clas) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://sports-academia-server.vercel.app/slectedClass/${clas._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch;

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handlePayment = () => {
    // Add your payment logic here
  };
  return (
    <div>
      <h1> Here is Class {slectedClass.length} </h1>
      <div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class Image</th>
                  <th>Instructor Name</th>
                  <th>Num Students</th>
                  <th>Price</th>
                  <th>Class Name</th>
                  <th>Action</th>
                  <th>Pament </th>
                </tr>
              </thead>
              <tbody>
                {slectedClass.map((clas, index) => (
                  <tr key={clas._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={clas.classImage} alt="Class Image" />
                        </div>
                      </div>
                    </td>
                    <td>{clas.instructorName}</td>
                    <td>{clas.numStudents}</td>
                    <td className="text-end">Price ${clas.price}</td>
                    <td>{clas.className}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(clas)}
                        className="btn btn-ghost bg-red-600 text-white"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={handlePayment}
                        className="btn bg-blue-500 text-white mt-4"
                      >
                        Proceed to Payment
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
