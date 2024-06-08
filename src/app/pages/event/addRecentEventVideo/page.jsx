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
import { CircleStackIcon, PhoneIcon } from '@heroicons/react/24/solid';






const AddRecentEventVideoPage = () => {
  const storage = getStorage(); 

  const router = useRouter();
  const eventClient = EventServices;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: null,
    video: null,
  });
  
  const [imageUrl, setImageUrl] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'date' || name === 'time' ? value : String(value),
    });
    console.log(value);
  };

  // const handleUploadThumbnail = async () => {

  //   try {
  //     const userId = await signInAnonymously();
  //     const uploadedImageUrl = await uploadThumbnail(imageUrl, userId);
  //     setImageUrl(uploadedImageUrl);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     // Handle upload errors (e.g., display error message)
  //   }
  // }
  
  // const handleUploadVideo = async () => {

  //   try {
  //     const userId = await signInAnonymously();
  //     const uploadedVideoUrl = await uploadVideo(videoUrl, userId);
  //     setVideoUrl(uploadedVideoUrl);
  //     console.log(videoUrl)
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     // Handle upload errors (e.g., display error message)
  //   }
  // }
  
  const handleThumbnailChange = async (e) => {
    const selectedImage = e.target.files[0];
    const userId = await signInAnonymously();
    const uploadedImageUrl = await uploadThumbnail(selectedImage, userId);
    setImageUrl(uploadedImageUrl);
   formData.thumbnail=uploadedImageUrl;

  };
  const handleVideoChange = async (e) => {
    const selectedVideo = e.target.files[0];
    const userId = await signInAnonymously();
    
    const uploadedVideoUrl = await uploadVideo(selectedVideo, userId);
    
    console.log(uploadedVideoUrl)
    setVideoUrl(uploadedVideoUrl);
   formData.video=uploadedVideoUrl;
    console.log(videoUrl);

  };  

  const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true); 
      if (!formData.video) {
        // Explicitly await handleVideoChange if no video URL has been set
        const videoInputElement = document.querySelector('input[name="video"]');
        if (videoInputElement && videoInputElement.files[0]) {
          await handleVideoChange({ target: videoInputElement });
        }
      }

    console.log(imageUrl)
    console.log(formData.video)

 
    const response = await eventClient.postRecentEvent(formData);
    setLoading(false); 
    console.log("Here is response,", response)
    if (response) {
      setLoading(false); 
      toast.success('event added successfully', { position: 'top-right' });
      setTimeout(() => {
        router.push('/pages');
      }, 1000);
    }
    else {
      toast.error('Unable to post Event', { position: 'top-right' });
    }
  };
  return (
    <ProtectedRoute allowedRoles={['ADMIN']}>
   <div>
        <AdminNavbar />
        <div className="flex min-h-screen w-full justify-center items-center bg-cover bg-center py-4 blur-5px mt-20" style={{ backgroundImage: `url('/images/prayers.jpg')` }}>
       <ToastContainer />
      <div className="formContainer w-full max-w-lg p-8 bg-white bg-opacity-80 rounded-lg shadow-md pt-20 pb-8 overflow-y-auto bg-gray-100 min-h-screen ">
        <form className="form flex flex-col items-center justify-center gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            required
            onChange={handleChange}
            className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent placeholder-black-900"
          />

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
            onChange={handleThumbnailChange}
            className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent"
          />

   <input
            type="file"
            name="video"
             placeholder="add video"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full h-12 p-4 border-2 border-black rounded-md bg-transparent"
          />


 {loading ? (
   <button className="w-full p-4 bg-purple-600 text-white rounded-md flex items-center justify-center">
 
    <p className="m-0">Uploading...</p>
    </button>
  ) : (
    <button type="submit" className="w-full p-4 bg-purple-600 text-white rounded-md flex items-center justify-center">
 
    <p className="m-0">Post Recent Event</p> 
    </button>
  )}



          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </form>
        </div>
      </div>
      </div>
    </ProtectedRoute>
  );

  async function uploadVideo(video, userId) {
    try {
      const filename = `${Date.now()}.jpg`; // Use current timestamp for unique filenames
      const videoRef = ref(storage, `living_word_videos/${filename}`);
  
      const metadata = {
        customMetadata: { userId }, // Include user ID as metadata
      };
  
      const uploadTask = uploadBytes(videoRef, video, metadata);
      const snapshot = await uploadTask; // Wait for upload completion
console.log("snapshot",snapshot);
      // Ensure compatibility with older Firebase versions:
      const downloadUrl = await getDownloadURL(snapshot.ref);
      console.log("video url "+downloadUrl)
      return downloadUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle errors appropriately, e.g., return a default URL or throw an error
      return null; // Or throw an error for further handling
    }
  }

  async function uploadThumbnail(image, userId) {
    try {
      const filename = `${Date.now()}.jpg`; // Use current timestamp for unique filenames
      const imageRef = ref(storage, `living_word_video_thumbnail/${filename}`);
  
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
      console.error('Error uploading thumbnail:', error);
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

export default AddRecentEventVideoPage;
