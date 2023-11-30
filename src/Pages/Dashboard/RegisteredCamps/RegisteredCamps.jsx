import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RegisteredCamps = () => {
  const [joins, setJoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/joinCamp")
      .then((res) => res.json())
      .then((data) => {
        setJoins(data);
        setLoading(false);
      });
  }, [joins, loading]);

  return (
    <div>
      <h3 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        --- Register Camps ---
      </h3>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Camp Name</th>
                <th>Date</th>
                <th>Location </th>
                <th>Camp Fees </th>
                <th>Payment Status</th>
                <th>Confirm Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {joins.map((join, index) => (
                <tr key={join._id}>
                  <td>{index + 1}</td>
                  <td> {join.camp} </td>
                  <td>{join.dat}</td>
                  <td> {join.address} </td>
                  <td> ${join.fee} </td>
                  <td>
                    {join?.paymentStatus === "NonPaid" ? (
                      <Link
                        to={`/dashboard/payment?id=${join.campId},${join._id}`}
                        className="bg-red-500  py-1 text-white px-4 rounded-md"
                      >
                        Pay
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="bg-[#B354A6]  py-1 text-white px-4 rounded-md"
                      >
                        Paid
                      </button>
                    )}
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredCamps;
