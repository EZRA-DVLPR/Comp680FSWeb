import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Socials from '../components/Socials';
import { MdDownload, MdDownloadDone } from 'react-icons/md';
import { useSnackbar } from 'notistack';
import Header from '../components/Header';
import { ThemeContext } from '../contexts/ThemeContext';

const ShowFile = () => {
  const { isLightMode } = useContext(ThemeContext);

  //obtain list and loading state of page
  const [loadedFile, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const [downloadState, setDownloadState] = useState(false);

  //snackbar for displaying changes
  const { enqueueSnackbar } = useSnackbar();
  
  //get id of file
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`${HOST_URI ?? 'http://localhost:5555'}/files/${id}`).then((res) => {
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
    link.href = `${HOST_URI ?? 'http://localhost:5555'}/files/download/${id}`;

    //set download to filename
    link.download = loadedFile.filename;

    //add to DOM
    document.body.appendChild(link);

    //click to start download
    link.click();

    //remove link from DOM
    document.body.removeChild(link);

    //set download state to true
    setDownloadState(true);

    //update snackbar
    enqueueSnackbar(`Downloaded file successfully!`, {variant: 'success'});
};

  return (
    <div className='p-4'>
      <Header />
      
      <div className='items-center w-screen flex'>

        <h1 className={isLightMode == true ? 'text-gray-800 text-3xl my-4 w-1/3 ml-10' :  'text-gray-200 text-3xl my-4 w-1/3 ml-10'} >File Information</h1>
        
      </div>

      {/* Display contents of the file */}

      {loading ? (<Spinner />) : (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-auto p-4'>
              <div className='my-4'>
                <span className={isLightMode ? 'text-xl mr-4 text-gray-800' : 'text-xl mr-4 text-gray-200'}>Filename:</span>
                <span className={isLightMode ? 'text-gray-800' : 'text-gray-200'}>{loadedFile.filename}</span>
              </div>
              <div className='my-4'>
                <span className={isLightMode ? 'text-xl mr-4 text-gray-800' : 'text-xl mr-4 text-gray-200'}>File Type:</span>
                <span className={isLightMode ? 'text-gray-800' : 'text-gray-200'}>{loadedFile.filetype}</span>
              </div>

              {/* Obtain the metadata from the file */}
              
              <div className='my-4'>
                <span className={isLightMode ? 'text-xl mr-4 text-gray-800' : 'text-xl mr-4 text-gray-200'}>Create Time:</span>
                <span className={isLightMode ? 'text-gray-800' : 'text-gray-200'}>{new Date(loadedFile.createdAt).toString()}</span>
              </div>
              <div className='my-4'>
                <span className={isLightMode ? 'text-xl mr-4 text-gray-800' : 'text-xl mr-4 text-gray-200'}>Last Update Time:</span>
                <span className={isLightMode ? 'text-gray-800' : 'text-gray-200'}>{new Date(loadedFile.updatedAt).toString()}</span>
              </div>
            </div>
        )
      }
      <Socials /> 
      <div className='justify-center flex'>
        <button className={isLightMode ? 'flex border-2 bg-teal-500 rounded-xl w-1/8 p-4 items-center justify-center' : 'flex border-2 bg-teal-400 rounded-xl w-1/8 p-4 items-center justify-center'} onClick={handleDownload}>
          {downloadState ? <MdDownloadDone className='text-3xl'/> : <MdDownload className='text-3xl'/>}
        </button>
      </div>
      
    </div>
  )
}

export default ShowFile;
