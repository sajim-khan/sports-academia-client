import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: admin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      const data = await res.json();
      return data.admin; // Assuming the response is in the form { admin: true/false }
    },
  });
  return [admin, isAdminLoading];
};

export default UseAdmin;
