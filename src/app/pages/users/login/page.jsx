"use client";
import { useState, useContext } from 'react';
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
  const [error, setError] = useState(''); // New state for error messages
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const client = ApiClient.getInstance();
  const { handleLogin } = useContext(AuthContext);
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
    setError(''); // Clear error when the user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await UserServices.login(credentials);
      const token = response.token.accessToken;
      const refreshToken = response.refresh_token;
      const user = jwt_decode(token);

      client.setAuthorization(token);
      const role = user.user.role;
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', user.user.email);
      localStorage.setItem('userFirstname', user.user.firstname);
      localStorage.setItem('userId', user.user._id);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('role', role);

      handleLogin(user);
      router.push('/pages');
    } catch (error) {
      setError('Invalid email or password. Please try again.'); // Set error message
      console.error('Error:', error.message);
    }
  };
  // const handleForgotPassword = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Call the backend API to initiate the password reset process
  //     await UserServices.forgotPassword(credentials.email);
  //     // Optionally, show a success message to the user
  //     alert('Password reset email sent. Please check your inbox.');
  //   } catch (error) {
  //     // Handle any errors from the backend
  //     setError('Failed to initiate password reset process. Please try again.');
  //     console.error('Error:', error.message);
  //   }
  // };

  return (
    <section id="login" className="w-full h-screen">
      <div className="flex flex-col w-full min-h-screen justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url('/images/chh.png')` }}>
        <div className="formContainer w-full max-w-lg p-8 bg-white bg-opacity-80 rounded-lg shadow-md pt-20 pb-8 overflow-y-auto bg-gray-100 h-800 mb-10">
          <p className="text-purple-600 text-xl md:text-3xl font-semibold justify-center">Login</p>
          <form className="form flex flex-col items-center justify-center gap-6 pt-8 pb-20" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full h-10 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
            />
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
            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
            <button type="submit" className="w-full p-4 bg-purple-600 text-white rounded-md h-10 flex justify-center items-center">Login</button>
            <Link type="button" href='/pages/users/forgote_password' className="text-purple-900">
              Forgot password?
            </Link>
            <p>Don't have an account? <Link href="/pages/users/register" className='text-purple-900'>Signup</Link></p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
