import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { FaFile } from "react-icons/fa";
import { BiShow } from 'react-icons/bi';
import FileModal from './FileModal';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const FileSingleCard = ({ file, value }) => {
    const { isLightMode } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <div key={file._id} className={isLightMode ? 'border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl' : 'border-2 border-gray-300 rounded-lg px-4 py-2 m-4 relative hover:shadow-custom-light'}>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-purple-300 rounded-lg'>
                {file.filetype}
            </h2>
            <h4 className={isLightMode ? 'my-2 text-gray-600' : 'my-2 text-gray-300'}>
                {value + 1}
            </h4>
            <div className='flex justify-start items-center gap-x-2'>
                <FaFile className='text-amber-400 text-2xl' />
                <h2 className={isLightMode == true ? 'text-gray-800' : 'text-gray-200'}>
                    {file.filename}
                </h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow 
                    className={isLightMode == true ? 'text-3xl text-blue-800 hover:text-black cursor-pointer'  : 'text-3xl text-blue-400 hover:text-black cursor-pointer'  }
                    onClick={() => setShowModal(true)}/>
                <Link to={`/files/details/${file._id}`}>
                    <BsInfoCircle className={isLightMode == true ? 'text-2xl text-green-700' : 'text-2xl text-green-400' } />
                </Link>
                <Link to={`/files/edit/${file._id}`}>
                    <AiOutlineEdit className={isLightMode == true ? 'text-2xl text-yellow-600' : 'text-2xl text-yellow-400' } />
                </Link>
                <Link to={`/files/delete/${file._id}`}>
                    <MdOutlineDelete className={isLightMode == true ? 'text-2xl text-red-700' : 'text-2xl text-red-400' } />
                </Link>
            </div>
            {
                showModal && (
                <FileModal file = {file} onClose={() => setShowModal(false)}/>
                )
            }
        </div>
    )
}

export default FileSingleCard