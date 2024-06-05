"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useEffect,useState} from "react";
import UserServices from '@/app/services/user_service';
import ProtectedRoute from "@/app/lib/protecteRoute";
import AdminNavbar from "@/app/components/AdminNavbar";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
 
  const router = useRouter();
  const client = UserServices;
  const fetchUsers = async () => {
    const userData = await client.getAllUsers();
    const users = userData.userList;
    setUsers(users);
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleDelete = async (userId) => {
    try {
     console.log(userId)
     const response = await client.deleteUser({userId}); // Pass eventId as an object
    if (response) {
      setUsers(users.filter(user => user._id !== userId));
      }

      } catch (error) {
    console.error("Error deleting event", error);
      }
     };
  return (
    <ProtectedRoute allowedRoles={['ADMIN']}>
    <div className="min-h-screen min-w-screen m-10 p-20 text-xl text-gray-700 bg-white">
<AdminNavbar/>
        <Link href="/pages/users/add">
          <button className="px-4 py-2 mb-4 rounded-lg bg-[#7469B6] text-white font-medium cursor-pointer hover:bg-blue-700 mb-0">
            Add New</button>
        </Link>
   

      <table className="w-full border-black mt-24 mb-2 text-black">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">FirstName</th>
            <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">LastName</th>
            <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Email</th>
            <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Role</th>
            <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Branch</th>
            <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Action</th>
          </tr>
        </thead>
        <tbody>
  {Array.isArray(users) && users.length > 0 ? (
    users.map((user) => (
      <tr key={user.id}>
        <td className="px-4 py-2 border border-gray-800">{user.firstname}</td>
        <td className="px-4 py-2 border border-gray-800">{user.lastname}</td>
        <td className="px-4 py-2 border border-gray-800">{user.email}</td>
        <td className="px-4 py-2 border border-gray-800">{user.role}</td>
        <td className="px-4 py-2 border border-gray-800">{user.branch}</td>
        <td className="px-4 py-2 border border-gray-800">
                      <div className="flex space-x-2">
                    
                        <button className="px-5 py-2 rounded-md text-white focus:outline-none cursor-pointer bg-red-500 hover:bg-red-700" onClick={() => handleDelete(user._id)}>Delete</button>
                      </div>
                    </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5">No users found</td>
    </tr>
  )}
</tbody>

      </table>
    </div>
      </ProtectedRoute>
      );
};

export default UsersPage;
