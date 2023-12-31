import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Title from "../../../../Common/Title/Title";

const InstructorClasses = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(
        `https://sports-academia-server.vercel.app/class?email=${user?.email}`
      )
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (item) => {
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
        axios
          .delete(`https://sports-academia-server.vercel.app/class/${item._id}`)
          .then((res) => {
            console.log("deleted res", res.data);
            if (res.data.deletedCount > 0) {
              fetchData();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Title heading="Manage All CLass" subHeading="Hurry up" />
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th> Students</th>
              <th>Feedback</th>
              <th> update</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.classImage} alt="Class Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.availableSeats}</td>
                <td>${item.price}</td>
                <td>{item.status}</td>
                <td>{item.numStudents}</td>
                <td>{item.feedback}</td>
                <td>All Class is Good</td>
                <td>
                  <button className="btn btn-primary">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorClasses;
