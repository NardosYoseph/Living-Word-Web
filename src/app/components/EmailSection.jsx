"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailSection = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your Email.js template ID, user ID, and service ID
    const templateParams = {
      to_name: 'Nardos Yosef',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

   const response= emailjs.send('service_axkmcyj','template_h0e4ehj', templateParams, '8TAl-WXVb9a_JQQJX')
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        console.log(error);
        // Display an error toast notification
        toast.error('Email failed to send.');
      });
    };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-black my-2">
          Contact Us
        </h5>
        <p className="text-black mb-4 max-w-md">
          {" "}
          We welcome any inquiries, prayer requests, or simply the opportunity to connect with you. 
          Whether you're seeking spiritual guidance, have questions about our services, or want to learn
           more about our church community, we're here to assist you. 
          Please feel free to reach out to us. 
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/NardosYoseph">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/nardos-yosef-286088299/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        
 
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                onChange={handleChange} 
                className="bg-white border border-black placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black block text-sm mb-2 font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                onChange={handleChange} 
                className="bg-white border border-black placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white border border-black placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="To talk about..."
                onChange={handleChange} 
              />
            </div>
            <button
              type="submit"
              className="bg-[#6420AA] hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        
          <ToastContainer />
      </div>
    </section>
  );
};

export default EmailSection;
