import React, { useState, useContext } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Header from '../components/Header';
import { ThemeContext } from '../contexts/ThemeContext';


const DeleteFile = () => {
  const { isLightMode } = useContext(ThemeContext);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteFile = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/files/${id}`).then(() => {
      setLoading(false);
      enqueueSnackbar('File Deleted successfully', {variant: 'success'});
      navigate('/');
    }).catch((err) => {
      setLoading(false);
      //alert('An error occured. Please Check Console.');
      enqueueSnackbar('Error', {variant: 'error'});
      console.log(err);
    });
  };

  return (
    <div className='p-4 w-auto'>
      <Header />
      <h1 className={isLightMode == true ? 'text-gray-800 text-3xl my-4 w-1/3 ml-10' :  'text-gray-200 text-3xl my-4 w-1/3 ml-10'}>
        Delete File
      </h1>
      {loading ? (<Spinner/>) : ('')}

      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-full max-w-md p-8 mx-auto'>
        <h3 className={isLightMode ? 'text-gray-800' : 'text-gray-200'}>
          Are you sure you want to delete this file?
        </h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteFile}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteFile;