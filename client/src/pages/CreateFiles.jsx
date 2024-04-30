import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';
import { FaUpload } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const CreateFiles = () => {
    const [loading, setLoading] = useState(false);

    //navigate for going back to home
    const navigate = useNavigate();

    //states for file and filename
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const { enqueueSnackbar } = useSnackbar();

    //handle file change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    //handle file name change
    const handleFileNameChange = (e) => {
        setFileName(e.target.value);
    };

    //form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        //formdata obj holds the data
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', fileName);

        setLoading(true);
        try {
            //send formdata to server
            const response = await axios.post('http://localhost:5555/files/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data',},
            });
            setLoading(false);
            enqueueSnackbar('File uploaded successfully', {variant: 'success'});
            navigate('/');
        } catch (error) {
            // Handle error
            setLoading(false);
            console.error('Error uploading file:', error);
            enqueueSnackbar('Error uploading file', {variant: 'error'});
        }
    };

    return (
    <div className='p-4'>
        <Header />
        {loading ? (<Spinner />) : '' }

        <h2 className='text-3xl my-4 justify-center flex'>File Upload</h2>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label>
                        File Name:
                        <input
                        className='border-2 border-blue-400 rounded-lg ml-8'
                        type="text"
                        value={fileName}
                        onChange={handleFileNameChange}
                        required
                        />
                    </label>
                </div>
                <div className='mb-4'>
                    <label>
                        File:
                        <input 
                        className='border-2 border-blue-400 rounded-lg ml-20' 
                        type="file" 
                        onChange={handleFileChange} 
                        required />
                    </label>
                </div>
                <div className='flex justify-center'>
                    <button 
                    type="submit"
                    className='border-2 border-blue-400 rounded-lg text-yellow-500 bg-blue-100 size-10 flex justify-center items-center'>
                        <FaUpload />
                    </button>
                </div>
            </form>
        </div>
    </div>

   );
};

export default CreateFiles;