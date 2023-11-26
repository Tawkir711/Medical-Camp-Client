// import React, { useEffect, useState } from 'react';
// import CampDetails from './CampDetails';

// const PopularCamps = () => {
//   const [camps, setCamps] = useState([]);

//   useEffect(() => {
//     fetch('popularCamp.json')
//       .then(res => res.json())
//     .then(data => setCamps(data))
//   } , [])

//   return (
//     <div>
//       <h2 className="text-4xl font-semibold text-center">
//         Popular Medical Camps Section
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10"
//       >
//         {
//           camps.map((camp) => (
//             <CampDetails key={camp._id} camp={camp}></CampDetails>
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// export default PopularCamps;