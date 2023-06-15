import React from "react";
import UseAdmin from "../../../Hooks/UseAdmin";
import UseInstructor from "../../../Hooks/UseInstructor";

const Payment = () => {
  const [admin, isAdminLoading] = UseAdmin();
  const [instructor, isInstructorLoading] = UseInstructor();

  if (isAdminLoading || isInstructorLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Here is Payment</h1>

      {admin && <div className="bg-red-400">Payment Color (Admin)</div>}

      {instructor && (
        <div className="bg-blue-700">Payment Color (Instructor)</div>
      )}

      {!admin && !instructor && (
        <div className="bg-yellow-500">Payment Color (Normal User)</div>
      )}
    </div>
  );
};

export default Payment;
