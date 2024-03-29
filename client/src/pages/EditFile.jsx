import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const EditFile = () => {

  //required fields for adding to db
  const [filename, setFilename] = useState('');
  const [filedata, setFileData] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/files/${id}`).then((res) => {
      setFilename(res.data.filename);
      setFileData(res.data.filedata);
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
      filedata,
    };
    setLoading(true);
    axios.put(`http://localhost:5555/files/${id}`, data).then(() => {
      setLoading(false);
      enqueueSnackbar('File edited successfully', {variant: 'success'});
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
      <h1 className='text-3xl my-4'>Edit File</h1>
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
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditFile}>Save</button>
      </div>
    </div>
  )
}

export default EditFile