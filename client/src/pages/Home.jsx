import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import FileTable from '../components/home/FileTable';
import FileCard from '../components/home/FileCard';
import ColorThemeButton from '../components/ColorTheme';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';
import { MdGridView, MdList } from 'react-icons/md';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    //how to display the data: table or card views
    const [showType, setShowType] = useState('');

    //get lightmode theme from context
    const { isLightMode } = useContext(ThemeContext);

    //snackbar for displaying changes
    const { enqueueSnackbar } = useSnackbar();

    //processing for data retrieval
    useEffect(() => {
        //load when there is no content to retrieve
        setLoading(true);

        //establish connection to server
        axios.get(`${process.env.HOST_URI ?? 'http://localhost:5555'}/files`).then((res) => {
            //if successful then receive the data and stop loading
            setFiles(res.data.data);
            setLoading(false);
        }).catch((err) => {
            //if unsuccessful log error and stop loading
            console.log(err);
            setLoading(false);
        });
    }, []);

    //retrieve showType from local storage to display items properly
    useEffect(() => {
        const storedShowType = localStorage.getItem('showType');
        
        //if there is an existing value for either var in the localstorage, use it.
        if (storedShowType) {
            setShowType(storedShowType);
        }
    }, []);

    //handle changes to showType
    const handleShowTypeChange = (event) => {
        //retrieve value of selection
        const showTypeSelected = event.currentTarget.value;

        //update only if it's different than the stored selection
        if (localStorage.getItem('showType') != showTypeSelected) {
            //change showType and store the new showType in localStorage
            setShowType(showTypeSelected);
            localStorage.setItem('showType', showTypeSelected);
            enqueueSnackbar(`Display changed to: ${showTypeSelected} View`);
        }
    };

    //what gets returned to user
    return (
        <div className='p-4'>
            <div className="flex justify-between items-center w-full">
            
            {/* Flex container for the first two buttons */}
            <div className="flex gap-x-4 justify-center items-center flex-1">
                {/* Table button */}
                <button
                    className={isLightMode == true ? 'bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' :  'bg-sky-600 hover:bg-sky-300 px-4 py-1 rounded-lg'}
                    value="Table"
                    onClick={handleShowTypeChange}
                >
                    Table
                    <div className="flex justify-center">
                        <MdList />
                    </div>
                </button>
                
                {/* Card button */}
                <button
                    className={isLightMode == true ? 'bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' :  'bg-sky-600 hover:bg-sky-300 px-4 py-1 rounded-lg'}
                    value="Card" onClick={handleShowTypeChange}
                >
                    Card
                    <div className="flex justify-center">
                        <MdGridView />
                    </div>
                </button>
                
            </div>
            
            {/* ColorThemeButton on the right side */}
            <ColorThemeButton />
        </div>
            <div className='flex justify-between items-center'>
                <h1 className={isLightMode == true ? 'text-gray-800 text-3xl my-8' :  'text-gray-200 text-3xl my-8'}> Files List </h1>
                <Link to='/files/create'>
                    <MdOutlineAddBox className={isLightMode == true ? 'text-sky-800 text-4xl' :  'text-sky-500 text-4xl'} />
                </Link>
            </div>

            {/* after loading the first div, check loading and decide layout*/}

            {loading ? (<Spinner />) :
                showType === 'Table' ? (<FileTable files={files} />) : (<FileCard files={files} />)
            }
        </div>
    );
};

export default Home
