import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const CreateFiles = () => {

  //required fields for adding to db
  const [filename, setFilename] = useState('');
  const [filedata, setFileData] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //snackbar for alerts
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveFile = () => {
    const data = {
      filename,
      filedata,
    };
    setLoading(true);
    axios.post('http://localhost:5555/files', data).then(() => {
      setLoading(false);
      enqueueSnackbar('File added Successfully', { variant: 'success'});
      navigate('/');
    }).catch((err) => {
      setLoading(false);
      //alert('An Error Occurred. Please Check Console');
      enqueueSnackbar('Error', {variant: 'error'});
      console.log(err);
    });
  };

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create File</h1>
      {loading ? (<Spinner />) : '' }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-600'>Filename</label>
          <input type='text' value={filename} onChange={(e) => setFilename(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-600'>Data</label>
          <input type='text' value={filedata} onChange={(e) => setFileData(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveFile}>Save</button>
      </div>
    </div>
  )
}

export default CreateFiles