import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import FileTable from '../components/home/FileTable';
import FileCard from '../components/home/FileCard';

const Home = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    //processing for data retrieval
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/files').then((res) => {
            setFiles(res.data.data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);

    //what gets returned to user
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('table')}>
                    Table
                </button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('card')}>
                    Card
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
                showType === 'table' ?
                    (
                        <FileTable files={files} />
                    ) : (
                        <FileCard files={files} />
                    )
                }
        </div>
    );
};

export default Home