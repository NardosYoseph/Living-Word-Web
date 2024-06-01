// ProtectedRoute.js (HOC for protecting routes based on user role)
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ allowedRoles, children }) => {
 
  const router = useRouter();
 

  useEffect(() => {
    const role = localStorage.getItem('role');
   if (!allowedRoles.includes(role)) {
      
      router.push('/');
    }
  }, []);

  

  return children;
};

export default ProtectedRoute;
