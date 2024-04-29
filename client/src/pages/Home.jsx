import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import FileTable from '../components/home/FileTable';
import FileCard from '../components/home/FileCard';

import {MdGridView, MdList} from 'react-icons/md';

const Home = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    //how to display the data: table or card views
    const [showType, setShowType] = useState('');

    //processing for data retrieval
    useEffect(() => {
        //load when there is no content to retrieve
        setLoading(true);

        //establish connection to server
        axios.get('http://localhost:5555/files').then((res) => {
            //if successful then receive the data and stop loading
            setFiles(res.data.data);
            setLoading(false);
        }).catch((err) => {
            //if unsuccessful log error and stop loading
            console.log(err);
            setLoading(false);
        });
    }, []);

    //retrieve showType from local storage to display
    useEffect(() => {
        const storedShowType = localStorage.getItem('showType');
        //if there is an existing storedShowType in the localstorage, use it.
        if (storedShowType) {
            setShowType(storedShowType);
        }
    }, []);

    //handle changes to showType
    const handleShowTypeChange = (event) => {
        //retrieve value of selection
        const showTypeSelected = event.target.value;

        //update only if it's different than the stored selection
        if (localStorage.getItem('showType') != showTypeSelected) {
            //change showType and store the new showType in localStorage
            setShowType(showTypeSelected);
            localStorage.setItem('showType', showTypeSelected);
        }
    };

    //what gets returned to user
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'  value = "table" onClick={handleShowTypeChange}>
                    Table
                    <div className='flex justify-center'>
                        <MdList />
                    </div>
                </button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'  value = "card" onClick={handleShowTypeChange}>
                    Card
                    <div className='flex justify-center'>
                        <MdGridView />
                    </div>
                </button>
            </div>

            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'> Files List </h1>
                <Link to='/files/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>

            {/*//after loading the first division, check loading and decide layout*/}

            {loading ? (<Spinner />) :
                showType === 'table' ? (<FileTable files={files} />) : (<FileCard files={files} />)
            }
        </div>
    );
};

export default Home