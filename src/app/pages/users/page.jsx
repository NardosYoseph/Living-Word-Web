"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
      console.log(userId);
      const response = await client.deleteUser({ userId }); // Pass eventId as an object
      if (response) {
        setUsers(users.filter(user => user._id !== userId));
      }
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };

  return (
    <ProtectedRoute allowedRoles={['ADMIN']}>
      <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-cover bg-center" >
      <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/chh.png')" }}
        ></div>
    <div className="relative z-10 m-0 p-4 bg-white bg-opacity-90 shadow-lg mt-20 sm:m-0 ">
    <AdminNavbar />
          <div className='gap-0 flex flex-col mt-20 mb-5 sm:flex-row p-0 mr-0 sm:m-0 min-w-full w-full'>
          <Link href="/pages/users/add">
            <button className="px-4 py-2 mb-0 rounded-lg bg-[#7469B6] text-white font-medium cursor-pointer hover:bg-blue-700">
              Add New
            </button>
          </Link>
          </div>
          <div className="overflow-x-auto">
          <table className="w-full border-white mt-10 mb-2 text-black">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">FirstName</th>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">LastName</th>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Email</th>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Role</th>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Branch</th>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-2 border border-black">{user.firstname}</td>
                    <td className="px-4 py-2 border border-black">{user.lastname}</td>
                    <td className="px-4 py-2 border border-black">{user.email}</td>
                    <td className="px-4 py-2 border border-black">{user.role}</td>
                    <td className="px-4 py-2 border border-black">{user.branch}</td>
                    <td className="px-4 py-2 border border-black">
                      <div className="flex space-x-2">
                        <button className="px-5 py-2 rounded-md text-white focus:outline-none cursor-pointer bg-red-500 hover:bg-red-700" onClick={() => handleDelete(user._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-black">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default UsersPage;
