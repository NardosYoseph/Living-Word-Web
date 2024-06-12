"use client"
import { useRouter } from "next/navigation";
import { useState,useEffect } from 'react';
import User from '@/app/models/user_model'; 
import styles from "@/app/pages/users/login/loginForm.module.css";
import ProtectedRoute from "@/app/lib/protecteRoute";
import UserServices from '@/app/services/user_service';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegistrationPage = () => {
  const client = UserServices;

const router=useRouter();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'USER',
    branch:''
  });
  // const user = new User(formData.firstname,formData.lastname,formData.email, formData.password, formData.role,formData.branch);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
      const response = await client.register(formData);
        if (response.message && response.message.toLowerCase().includes('email already exists')) {
          toast.error('Email already exists', { position: 'top-right' });
        } else {
          toast.success('Registered successfully', { position: 'top-right' });
          setTimeout(() => {
             router.push("/pages/users/login");
          }, 1000);
        }
  }

  
  return (

    <div className="w-full h-screen">
    <ToastContainer />
    <div className="flex min-h-screen flex-col overflow-hidden w-full h-full justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url('/images/chh.png')` } }>
<div className="formContainer w-full max-w-lg p-8 bg-white bg-opacity-80 rounded-lg shadow-md pt-20 pb-8 overflow-y bg-gray-100 h-full ">
      <p className="text-purple-600 text-xl md:text-3xl font-semibold justify-center">SignUp</p>
      <form className="form flex flex-col items-center justify-center gap-6 pt-8 pb-20" onSubmit={handleSubmit}>

  <input type="text" placeholder="firstname" name="firstname"  className="w-full h-10 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
    required onChange={handleChange}/>
  <input type="text" placeholder="lastname" name="lastname"  className="w-full h-10 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
    required onChange={handleChange}/>
  <input type="email" placeholder="email" name="email"  className="w-full h-10 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
    required onChange={handleChange}/>
  <div className="relative w-full">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="password"
        name="password"
        required
        onChange={handleChange}
        className="w-full h-10 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
      />

      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
      >
        <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
      </button>
    </div>
  <select name="branch" id="branch" value={formData.branch} onChange={handleChange} className="w-full h-15 p-4 border-2 border-black rounded-md bg-transparent">
    <option value={false}>Branch</option>
    <option value="Dir Dawa">Dire Dawa</option>
    <option value="Addis Ababa">Addis Ababa</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Canada">Canada</option>
  </select>
  <button className="w-full p-4 bg-purple-600 text-white rounded-md h-10 flex justify-center items-center" type="submit">SignUp</button>
<p className="text-black text-base sm:text-lg mb-6 lg:text-xl">already have an account?   <Link href="/pages/users/login">  login</Link></p>


</form>
</div>
</div>
    </div>
 
  );
};

export default RegistrationPage;
