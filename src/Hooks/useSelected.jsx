import React, { useContext } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
const useSelected = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading: loading,
    data: slectedClass = [],
    refetch,
  } = useQuery({
    queryKey: ["/slectedClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://sports-academia-server.vercel.app/slectedClass?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [slectedClass, loading, refetch];
};

export default useSelected;
