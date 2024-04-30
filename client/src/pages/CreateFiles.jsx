import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeButton from '../components/HomeButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const CreateFiles = () => {
   // State to hold the file and the name
   const [file, setFile] = useState(null);
   const [fileName, setFileName] = useState('');

   // Function to handle file change
   const handleFileChange = (e) => {
       setFile(e.target.files[0]);
   };

   // Function to handle file name change
   const handleFileNameChange = (e) => {
       setFileName(e.target.value);
   };

   // Function to handle form submission
   const handleSubmit = async (e) => {
       e.preventDefault();

       // Create a FormData object to hold the file and the name
       const formData = new FormData();
       formData.append('file', file);
       formData.append('name', fileName);

       try {
           // Send the form data to the server
           const response = await axios.post('http://localhost:5555/files/upload', formData, {
               headers: {
                   'Content-Type': 'multipart/form-data',
               },
           });

           // Handle the response from the server
           console.log(response.data);
           alert('File uploaded successfully!');
       } catch (error) {
           // Handle error
           console.error('Error uploading file:', error);
           alert('Error uploading file. Please try again.');
       }
   };

   return (
       <div>
           <h2>File Upload</h2>
           <form onSubmit={handleSubmit}>
               <div>
                   <label>
                       File Name:
                       <input
                           type="text"
                           value={fileName}
                           onChange={handleFileNameChange}
                           required
                       />
                   </label>
               </div>
               <div>
                   <label>
                       File:
                       <input type="file" onChange={handleFileChange} required />
                   </label>
               </div>
               <button type="submit">Upload</button>
           </form>
       </div>
   );
};

export default CreateFiles;
