import React, { useEffect, useState } from "react";
// import { FaTrashAlt } from 'react-icons/fa';
// import Swal from "sweetalert2";

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

  // const handleDelete = (_id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`http://localhost:5000/joinCamp/${_id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           const remain = joins?.filter((data) => data._id !== _id);
  //           setJoins(remain);
  //           Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //         });
  //     }
  //   });
  // };

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
                  <td> </td>
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