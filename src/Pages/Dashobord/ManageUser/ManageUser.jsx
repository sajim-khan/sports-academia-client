import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const [disabledUsers, setDisabledUsers] = useState([]);

  const handleMakeInstructor = (user) => {
    // Disable the button for the clicked user
    setDisabledUsers([...disabledUsers, user._id]);

    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an instructor now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        if (data.modifiedCount) {
          refetch();
        }
      });
  };

  const handleMakeAdmin = (user) => {
    // Disable the button for the clicked user
    setDisabledUsers([...disabledUsers, user._id]);

    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        if (data.modifiedCount) {
          refetch();
        }
      });
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-2xl">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-1xl font-serif font-bold">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={disabledUsers.includes(user._id)}
                    className="btn btn-ghost bg-green-600 text-white"
                  ></button>
                </td> */}
                <td>
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <>
                      {" "}
                      <button
                        disabled={disabledUsers.includes(user._id)}
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-ghost bg-orange-600  text-white"
                      >
                        Make Instructor
                        <FaUserShield></FaUserShield>
                      </button>
                    </>
                  )}
                </td>

                {/* <td>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={disabledUsers.includes(user._id)}
                    className="btn btn-ghost bg-orange-600 text-white"
                  >
                    Make Admin
                  </button>
                </td> */}

                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <>
                      {" "}
                      <button
                        disabled={disabledUsers.includes(user._id)}
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost bg-orange-600  text-white"
                      >
                        Make Admin
                        <FaUserShield> </FaUserShield>
                      </button>
                    </>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
