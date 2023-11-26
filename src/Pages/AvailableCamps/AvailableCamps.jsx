import React, { useEffect, useState } from 'react';
import CampDetails from './../Home/PopularCamps/CampDetails';

const AvailableCamps = () => {
 const [camps, setCamps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addCamp")
      .then((res) => res.json())
      .then((data) => setCamps(data));
  }, [])
  console.log(camps);
  return (
    <div className='bg-base-200 p-3'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {camps.map((camp) => (
          <CampDetails key={camp._id} camp={camp}></CampDetails>
        ))}
      </div>
    </div>
  );
};

export default AvailableCamps;