
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import UserServices from '@/app/services/user_service';

const ForgotPasswordForm = () => {
  const client = UserServices;

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await client.forgotPassword({ email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("error sending email");
    }
  };

  return (

    <section id="forgotPassword" className="w-full h-screen">
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url('/images/chh.png')` }}>
      <div className="formContainer w-full max-w-lg p-8 bg-white bg-opacity-80 rounded-lg shadow-md pt-20 pb-8 overflow-y-auto bg-gray-100 h-800 mb-10">
        <p className="text-purple-600 text-xl md:text-3xl font-semibold justify-center">Forgot Password</p>
        <form className="form flex flex-col items-center justify-center gap-6 pt-8 pb-20" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required 
            className="w-full h-10 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
          />
          {message && <p className='text-red-700'>{message}</p>}
         <button type="submit" className="w-full p-4 bg-purple-600 text-white rounded-md h-10 flex justify-center items-center">Submit</button>
        
          <p>Remembered password? <Link href="/pages/users/login" className='text-purple-900'>Login</Link></p>
        </form>
        
      </div>
    </div>
  </section>













    // <div>
    //   <h2>Forgot Password</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //     <button type="submit">Submit</button>
    //   </form>
    //   {message && <p>{message}</p>}
    // </div>
  );
};

export default ForgotPasswordForm;
