import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import Spinner from '../components/Spinner';
import Socials from '../components/Socials';

const ShowFile = () => {
  //obtain list and loading state of page
  const [loadedFile, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  
  //get id of file
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/files/${id}`).then((res) => {
      setFile(res.data);
      console.log(res.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [])

  //download function for this file
  const handleDownload = () => {
    //create a link
    const link = document.createElement('a');

    //connect to server
    link.href = `http://localhost:5555/files/download/${id}`;

    //set download to filename
    link.download = loadedFile.filename;

    //add to DOM
    document.body.appendChild(link);

    //click to start download
    link.click();

    //remove link from DOM
    document.body.removeChild(link);
};

  return (
    <div className='p-4'>
      <HomeButton />
      
      <div className='items-center w-screen flex'>

        {/* title for page */}
        <h1 className='text-3xl my-4 w-1/3 ml-10'>File Information</h1>
        
        {/* empty space to fill horizonal line */}
        <div className='w-1/3'></div>

      </div>

      {/* Display contents of the file */}

      {loading ? (<Spinner />) : (
          <div className='w-screen flex'>
            
            {/* file info */}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-1/3 p-4'>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Id</span>
                <span>{loadedFile._id}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Filename</span>
                <span>{loadedFile.filename}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Data</span>
                <span>{loadedFile.filedata}</span>
              </div>

              {/* Obtain the metadata from the file */}
              
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                <span>{new Date(loadedFile.createdAt).toString()}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                <span>{new Date(loadedFile.updatedAt).toString()}</span>
              </div>
            </div>

            {/* horizontal space */}

            <div className='w-1/4'/>

            {/* file preview */}

            <div className='flex border-2 border-sky-400 rounded-xl w-1/3 p-4'>
              File Preview...
            </div>
          </div>
        )
      }
      <Socials /> 
      <div>
        <button className='flex border-2 border-red-400 rounded-xl w-1/3 p-4' onClick={handleDownload}>
          Download!
        </button>
      </div>
      
    </div>
  )
}

export default ShowFile