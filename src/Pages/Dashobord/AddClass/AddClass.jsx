import React, { useContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import Titile from "../../../Common/Titile/Titile";

const img_hosting_token = "324916c420eadc578e623a667da06d42";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [imageURL, setImageURL] = useState(""); // New state variable
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const response = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imgResponse = await response.json();

      if (imgResponse.success) {
        const imgURL = imgResponse.data.display_url;
        setImageURL(imgURL);

        const {
          price,
          availableSeats,
          instructorName,
          instructorEmail,
          numStudents,
        } = data;

        const newItem = {
          price: parseFloat(price),
          availableSeats,
          instructorName,
          instructorEmail,
          numStudents,
          classImage: imgURL,
        };

        console.log(newItem);
        try {
          const classResponse = await axios.post(
            "http://localhost:5000/class",
            newItem
          );

          console.log("after posting new class item", classResponse.data);
          if (classResponse.data.insertedCount > 0) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          console.log(error);
          // Handle error during class creation
        }
      }
    } catch (error) {
      console.log(error);
      // Handle error during image upload
    }
  };

  return (
    <div className="w-full px-10">
      <Titile subHeading="What's new" heading="Add a Class" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("className", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
            {...register("instructorName", { required: true })}
            placeholder="Type here"
            defaultValue={user.displayName}
            readOnly
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email*</span>
          </label>
          <input
            type="text"
            {...register("instructorEmail", { required: true })}
            placeholder="Type here"
            defaultValue={user.email}
            readOnly
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Seats*</span>
            </label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              placeholder="Available Seats"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Number Students</span>
            </label>
            <input
              type="number"
              {...register("numStudents", { required: true })}
              placeholder="numStudents"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <button className="btn btn-primary">Add Class</button>
      </form>
    </div>
  );
};

export default AddClass;
