"use client";
import { useState } from 'react';
import { useContext } from 'react';
import styles from "./loginForm.module.css";
import { useRouter } from 'next/navigation';
import { AuthContext } from "@/app/lib/userAuth";
import ApiClient from '@/app/lib/HttpRequestManager/api_client';
import jwt_decode from 'jsonwebtoken/decode';
import UserServices from '@/app/services/user_service';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 const client = ApiClient.getInstance();
 const { handleLogin} = useContext(AuthContext);
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(credentials);
      const response = await UserServices.login(credentials);
      console.log(response);
      const token = response.token.accessToken;
      console.log(token)
            const refreshToken = response.refresh_token;
            const user = jwt_decode(token);
            console.log("decoded token",user)
            client.setAuthorization(token);
            const role = user.user.role;
            localStorage.setItem('token', token);
            localStorage.setItem('userEmail', user.user.email);
            localStorage.setItem('userFirstname', user.user.firstname);
            console.log("userEmail",user.user.email);

             localStorage.setItem('userId', user.user._id);
             console.log("userID",user.user._id);
            localStorage.setItem('refreshToken', refreshToken);
           localStorage.setItem('role', role);
            // console.log("here this is :",role);
            handleLogin(user);
      router.push('/pages');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <section  id="login">
       <div className="container flex min-h-screen w-full justify-center items-center bg-cover bg-center py-4 blur-5px" style={{ backgroundImage: `url('/images/prayers.jpg')` }}>
<div className="formContainer w-full max-w-lg p-8 bg-white bg-opacity-80 rounded-lg shadow-md pt-20 pb-8 overflow-y-auto bg-gray-100 min-h-screen ">
      
    <form className="form flex flex-col items-center gap-6" onSubmit={handleSubmit}>
    <img src="/images/lwlogo.jpg" alt="Company Logo" className='rounded-full w-68 h-52'  />
    <input type="text" placeholder="email" name="email" required onChange={handleChange}
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
    <button type="submit" className="w-full p-4 bg-purple-600 text-white rounded-md">Login</button>
     {/* <Link href="/forgotPassword">forgot password?</Link> */}
      <p>don't have an account?   <Link href="/pages/users/register">signup</Link></p>
       
    </form>
    </div>
    </div>
    </section>
  );
};

export default LoginForm;
