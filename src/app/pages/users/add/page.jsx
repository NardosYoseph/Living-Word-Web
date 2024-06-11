"use client";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import User from '@/app/models/user_model'; 
import ProtectedRoute from "@/app/lib/protecteRoute";
import UserServices from '@/app/services/user_service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUserPage = () => {
  const client = UserServices;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
    branch: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await client.register(formData);
      if (response.message && response.message.toLowerCase().includes('email already exists')) {
        toast.error('Email already exists', { position: 'top-right' });
      } else {
        toast.success('User added successfully', { position: 'top-right' });
        setTimeout(() => {
          router.push("/pages/users");
        }, 1000);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <ProtectedRoute allowedRoles={['ADMIN']}>
      <div className="flex min-h-screen w-full justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url('/images/chh.png')` }}>
        <ToastContainer />
        <div className="formContainer w-full max-w-lg p-8 bg-white bg-opacity-80 rounded-lg shadow-md pt-20 pb-8 overflow-y-auto min-h-screen">
        <p className="text-purple-600 text-xl md:text-3xl font-semibold justify-center">Add User</p>
         
          <form className="form flex flex-col items-center gap-6 mt-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="FirstName" name="firstname" required onChange={handleChange}
              className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
            />
            <input type="text" placeholder="LastName" name="lastname" required onChange={handleChange}
              className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
            />
            <input type="email" placeholder="email" name="email" required onChange={handleChange}
              className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
            />
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="password"
                name="password"
                required
                onChange={handleChange}
                className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
            <select name="role" id="role" value={formData.role} onChange={handleChange} className="w-full h-18 p-4 border-2 border-black rounded-md bg-transparent">
              <option value={false}>Role</option>
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
            <select name="branch" id="branch" value={formData.branch} onChange={handleChange} className="w-full h-18 p-4 border-2 border-black rounded-md bg-transparent">
              <option value={false}>Branch</option>
              <option value="Dire Dawa">Dire Dawa</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Canada">Canada</option>
            </select>
            <button type="submit" className="w-full p-4 bg-purple-600 text-white rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AddUserPage;
