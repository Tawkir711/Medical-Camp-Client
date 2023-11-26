// import React from 'react';
// import useAxiosPublic from './useAxiosPublic';
// import { useQuery } from '@tanstack/react-query';

// const useAddCamps = () => {
//   const axiosPublic = useAxiosPublic();

//   const { data: addCamp = [], refetch} = useQuery({
//     queryKey: ['addCamp'],
//     queryFn: async () => {
//       const res = await axiosPublic.get('/addCamp');
//       return res.data;
//     }
//   })
//   return [addCamp, refetch]
// };

// export default useAddCamps;