"use client"
import React, { useEffect, useState } from 'react';
import ProtectedRoute from "@/app/lib/protecteRoute";
//import PaginationManager from '@/app/lib/pagination_manager';
import EventServices from '@/app/services/event_service';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from "next/image";
import { ref, uploadBytes, getDownloadURL, getStorage} from 'firebase/storage';
import { getAuth} from 'firebase/auth';
import { signInAnonymously as signInAnonymouslyFirebase } from 'firebase/auth'; 
import AdminNavbar from '@/app/components/AdminNavbar';




const AddEventPage = () => {
  const storage = getStorage(); 

  const router = useRouter();
  const eventClient = EventServices;
  const [formData, setFormData] = useState({
    title: '',
    category:'',
    description: '',
    date: '',
    time: '',
    address: '',
    image: null,

  });
  
  const [imageUrl, setImageUrl] = useState();
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'date' || name === 'time' ? value : String(value),
    });
    console.log(value);
  };
  // const handleUploadImage = async () => {

  //   try {
  //     const userId = await signInAnonymously();
  //     const uploadedImageUrl = await uploadImage(imageUrl, userId);
  //     setImageUrl(uploadedImageUrl);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     // Handle upload errors (e.g., display error message)
  //   }
  // }
  
  const handleImageChange = async (e) => {
    const selectedImage = e.target.files[0];
    const userId = await signInAnonymously();
    const uploadedImageUrl = await uploadImage(selectedImage, userId);
    setImageUrl(uploadedImageUrl);

  };
  const [minDate, setMinDate] = useState(getCurrentDate());

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Pad month and day with leading zero if needed
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }

  const handleSubmit = async (e) => {
     e.preventDefault();
   // await handleImageChange();
    // Update the formData object with the image URL
    formData.image = imageUrl;
    console.log(imageUrl)
 
    const response = await eventClient.addEvent(formData);
    console.log("Here is response,", response)
    if (response) {
      toast.success('event added successfully', { position: 'top-right' });
      setTimeout(() => {
        router.push('/pages');
      }, 1000);

    }
    else {
      toast.error('Unable to add Incident', { position: 'top-right' });
    }
  };
  return (
    <ProtectedRoute allowedRoles={['ADMIN']}>
   <div>
        <AdminNavbar />
        <div className="container flex min-h-screen w-full justify-center items-center bg-cover bg-center py-4 blur-5px" style={{ backgroundImage: `url('/images/prayers.jpg')` }}>
       <ToastContainer />
      <div className="formContainer w-full max-w-lg p-8 bg-white bg-opacity-80 rounded-lg shadow-md pt-20 pb-8 overflow-y-auto bg-gray-100 min-h-screen ">
        <form className="form flex flex-col items-center gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            required
            onChange={handleChange}
            className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
          />

<select name="category" id="category" value={formData.category} onChange={handleChange} className="w-full h-18 p-4 border-2 border-black rounded-md bg-transparent">
            <option value="">Choose category</option>
            <option value="Weekly">Weekly</option>
            <option value="Yearly">Yearly</option>
            <option value="Special">Special</option>
          </select>
<textarea
            value={formData.description}
            name="description"
            required
            rows={16}
            onChange={handleChange}
            placeholder="Write your description here"
            className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent"
          />
          <input
      type="date"
      placeholder="date"
      name="date"
      required
      onChange={handleChange}
      min={minDate}
      className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent"
    />

          <input
            type="time"
            placeholder="time"
            name="time"
            required
            onChange={handleChange}
            className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent"
          />
     <select name="address" id="address" value={formData.address} onChange={handleChange} className="w-full h-18 p-4 border-2 border-black rounded-md bg-transparent">
            <option value="">Address</option>
            <option value="Dire Dawa">Dire Dawa</option>
            <option value="Addis Ababa">Addis Ababa</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Canada">Canada</option>
          </select>
          <button type="submit" className="w-full p-4 bg-purple-600 text-white rounded-md">
            Create Event</button>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </form>
        </div>
      </div>
      </div>
    </ProtectedRoute>
  );

  async function uploadImage(image, userId) {
    try {
      const filename = `${Date.now()}.jpg`; // Use current timestamp for unique filenames
      const imageRef = ref(storage, `living_word_images/${filename}`);
  
      const metadata = {
        customMetadata: { userId }, // Include user ID as metadata
      };
  
      const uploadTask = uploadBytes(imageRef, image, metadata);

      const snapshot = await uploadTask; // Wait for upload completion
console.log("snapshot",snapshot);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      console.log(downloadUrl)
      return downloadUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null; // Or throw an error for further handling
    }
  }
  
async function signInAnonymously() {
  try {
    const auth = getAuth();
    console.log(auth);
    const credential = await signInAnonymouslyFirebase(auth);
console.log(credential);
    if (credential.user) {
      console.log('Signed in anonymously as:', credential.user.uid); // Use user.uid for user ID
      return credential.user.uid; // Return the user ID for further use
    } else {
      console.error('Anonymous sign-in failed.');
      return null;
    }
  } catch (error) {
    console.error('Error signing in anonymously:', error);
    return null;
  }
}
}

export default AddEventPage;
