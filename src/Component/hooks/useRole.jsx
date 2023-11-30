import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const roleFn = async () => {
    const res = await axiosSecure.get(`userRole/${user.email}`)
    return res
  }

  const { data:userRole, isLoading, isPending } = useQuery({
    queryKey: [user?.email,],
    queryFn: roleFn
  })

  const role = userRole?.data?.role
  return {role, isLoading, isPending}
};

export default useRole;