"use client";
import { useState } from 'react';
import { useContext } from 'react';
import styles from "./loginForm.module.css";
import { useRouter } from 'next/navigation';
//import { AuthContext } from "@/app/lib/userAuth";
//import ApiClient from '@/app/lib/HttpRequestManager/api_client';
//import jwt_decode from 'jsonwebtoken/decode';
//import UserServices from '@/services/user_service';
import Link from 'next/link';


const LoginForm = () => {
 // const client = ApiClient.getInstance();
 // const { handleLogin} = useContext(AuthContext);
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
      // const response = await UserServices.login(credentials);
      // console.log(response);
      // const token = response.token.accessToken;
      // console.log(token)
      //       const refreshToken = response.refresh_token;
      //       const user = jwt_decode(token);
      //       console.log("decoded token",user)
      //       client.setAuthorization(token);
      //       const role = user.user.role;
      //       localStorage.setItem('token', token);
      //       localStorage.setItem('userEmail', user.user.email);
      //       console.log("userEmail",user.user.email);

      //        localStorage.setItem('userId', user.user._id);
      //        console.log("userID",user.user._id);
      //       localStorage.setItem('refreshToken', refreshToken);
      //      localStorage.setItem('role', role);
      //       // console.log("here this is :",role);
      //       handleLogin(user);
      router.push('/homePage');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <section className={styles.container} id="login">
    <form className={styles.form} onSubmit={handleSubmit}>
      <img src="/images/lwlogo.jpg" alt="Company Logo" className='rounded-full w-68 h-52'  />
      {/* <h1>Login</h1> */}
      <input type="text" placeholder="email" name="email" required onChange={handleChange}/>
      <input type="password" placeholder="password" name="password" onChange={handleChange}/>      
      
      <button>Login</button>
      <Link href="/forgotPassword">forgot password?</Link>
    </form>
    </section>
  );
};

export default LoginForm;
