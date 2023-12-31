// import { data } from 'autoprefixer';
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./../../../Component/hooks/useAuth";

const ManageCamps = () => {
  const [camp, setCamp] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://medical-camp-server-delta.vercel.app/addCamp?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCamp(data);
        setLoading(false);
      });
  }, [camp, loading]);

  const handleDelete = (_id) => {
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
        fetch(`https://medical-camp-server-delta.vercel.app/addCamp/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remain = camp?.filter((data) => data._id !== _id);
            setCamp(remain);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        --- Manage Camps ---
      </h3>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table">
            <thead>
              <tr>
                {/* <th>#</th> */}

                <th>Camp Name</th>
                <th>Location</th>
                <th>Service</th>
                <th>Audience</th>
                <th>Fees </th>
                <th>Date </th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {camp.map((cam, index) => (
                <tr key={cam._id}>
                  {/* <td>{index + 1}</td> */}
                  <td>{cam.name}</td>
                  <td>{cam.location}</td>
                  <td>{cam.service}</td>
                  <td>{cam.audience}</td>
                  <td>${cam.fees}</td>
                  <td>{cam.date}</td>
                  <td>
                    <Link to={`/dashboard/updateCamp/${cam._id}`}>
                      <button className="btn btn-ghost btn-lg bg-blue-500">
                        <FaEdit className="text-white "></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(cam._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-blue-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCamps;
