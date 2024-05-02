import React, { useState, useContext } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { ThemeContext } from '../contexts/ThemeContext';

const CreateFiles = () => {
    const { isLightMode } = useContext(ThemeContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileNameChange = (e) => {
        setFileName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', fileName);

        setLoading(true);
        try {
            const response = await axios.post(`${process.env.HOST_URI ?? 'http://localhost:5555'}/files/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setLoading(false);
            enqueueSnackbar('File uploaded successfully', { variant: 'success' });
            navigate('/');
        } catch (error) {
            setLoading(false);
            console.error('Error uploading file:', error);
            enqueueSnackbar('Error uploading file', { variant: 'error' });
        }
    };

    return (
        <div className='p-4'>
            <Header />
            {loading ? (<Spinner />) : ''}

            <h2 className={isLightMode ? 'text-gray-800 text-3xl my-4 justify-center flex' : 'text-gray-200 text-3xl my-4 justify-center flex'}>
                File Upload
            </h2>

            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-2xl p-4 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className={isLightMode ? 'text-gray-800' : 'text-gray-200'}>
                            File Name:
                            <input
                                className={`border-2 border-blue-400 rounded-lg ml-4 w-full ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}
                                type="text"
                                value={fileName}
                                onChange={handleFileNameChange}
                                required
                            />
                        </label>
                    </div>
                    <div className='mb-4'>
                        <label className={isLightMode ? 'text-gray-800' : 'text-gray-200'}>
                            File:
                            <input 
                                className={`border-2 border-blue-400 rounded-lg ml-4 w-full ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}
                                type="file"
                                onChange={handleFileChange}
                                required
                            />
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
