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
  const user = new User(formData.firstname,formData.lastname,formData.email, formData.password, formData.role,formData.branch);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
      const response = await client.register(user);
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

    <div className={styles.container}>
    <ToastContainer />
      <form className={styles.form} onSubmit={handleSubmit}>
      <img src="/images/lwlogo.jpg" alt="Company Logo" className='rounded-full w-68 h-32'  />

  <input type="text" placeholder="firstname" name="firstname" required onChange={handleChange}/>
  <input type="text" placeholder="lastname" name="lastname" required onChange={handleChange}/>
  <input type="email" placeholder="email" name="email" required onChange={handleChange}/>
  <input type="password" placeholder="password" name="password" required onChange={handleChange}/>
  <select name="branch" id="branch" value={formData.branch} onChange={handleChange} className="w-full h-18 p-4 border-2 border-black rounded-md bg-transparent">
    <option value={false}>Branch</option>
    <option value="Dir Dawa">Dire Dawa</option>
    <option value="Addis Ababa">Addis Ababa</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Canada">Canada</option>
  </select>
  <button type="submit">Submit</button>
<p className="text-white text-base sm:text-lg mb-6 lg:text-xl">already have an account?   <Link href="/pages/users/login">  login</Link></p>


</form>
    </div>
 
  );
};

export default RegistrationPage;
