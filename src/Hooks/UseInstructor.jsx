import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseInstructor = () => {
  const { user } = useContext(AuthContext);
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://sports-academia-server.vercel.app/users/instructor/${user?.email}`
      );
      const data = await res.json(); // Parse the JSON response
      return data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default UseInstructor;
