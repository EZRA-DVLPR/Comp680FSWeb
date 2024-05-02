import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';
import { ThemeContext } from '../contexts/ThemeContext';

const EditFile = () => {
  const { isLightMode } = useContext(ThemeContext);
  
  //filename required to update value in db
  const [filename, setFilename] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.HOST_URI ?? 'http://localhost:5555'}/files/${id}`).then((res) => {
      setFilename(res.data.filename);
      setLoading(false);
    }).catch((err) => {
      setLoading(false);
      alert('An error occurred. Pleace Check the Console.');
      console.log(error);
    });
  }, [])

  const handleEditFile = () => {
    const data = {
      filename,
    };
    setLoading(true);
    axios.put(`${process.env.HOST_URI ?? 'http://localhost:5555'}/files/${id}`, data).then(() => {
      setLoading(false);
      enqueueSnackbar('File edited successfully', {variant: 'success'});
      navigate('/');
    }).catch((err) => {
      setLoading(false);
      enqueueSnackbar('Error editing file information', {variant: 'error'});
      console.log(err);
    });
  };

  return (
    <div className='p-4'>
      <Header />
      <h1 className={isLightMode == true ? 'text-gray-800 text-3xl my-4 w-1/3 ml-10' :  'text-gray-200 text-3xl my-4 w-1/3 ml-10'}>Edit File</h1>
      {loading ? (<Spinner />) : '' }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-md p-4 mx-auto'>
        <div className='my-4'>
          <label className={isLightMode ? 'text-xl mr-4 text-gray-800' : 'text-xl mr-4 text-gray-200'}>Filename</label>
          <input type='text' value={filename} onChange={(e) => setFilename(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditFile}>Save</button>
      </div>
    </div>
  )
}

export default EditFile;
