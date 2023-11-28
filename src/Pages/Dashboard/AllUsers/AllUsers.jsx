import React from 'react';
import useAxiosSecure from '../../../Component/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })
  return (
    <div>
      <div>
        <h2 className="text-3xl">Total Users {users.length} </h2>
      </div>
    </div>
  );
};

export default AllUsers;