// import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const ManageCamps = () => {
  const [camp, setCamp] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/addCamp')
      .then(res => res.json())
      .then(data => {
        setCamp(data)
        setLoading(false)
    })
  }, [camp, loading])
  
  const handleDelete = (items) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then( async (result) => {
      if (result.isConfirmed) {
        await fetch(`http://localhost:5000/addCamp/${items._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
        if (res.data.deletedCount > 0) {
          
          Swal.fire({
            title: "Deleted!",
            text: `${items.name} has been deleted.`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold text-center">Manage Camps</h3>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Camp Name</th>
                <th>Fees </th>
                <th>Date </th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {camp.map((cam, index) => (
                <tr key={cam._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={cam.image} alt=".." />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{cam.name}</td>
                  <td>{cam.fees}</td>
                  <td>{cam.date}</td>
                  <td>
                    <button className="btn btn-ghost btn-lg bg-blue-500">
                      <FaEdit className="text-white "></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete()}
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