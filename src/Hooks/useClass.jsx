import React, { useEffect, useState } from "react";

const useClass = () => {
  const [classes, setSclass] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        setSclass(data);
        setLoading(false);
      });
  }, []);
  return [classes, loading];
};

export default useClass;
