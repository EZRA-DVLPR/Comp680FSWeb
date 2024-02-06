import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import FileModal from './FileModal';
import { useState } from 'react';

const FileSingleCard = ({ file }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div key={file._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                {file.filedata}
            </h2>
            <h4 className='my-2 text-gray-500'>{file._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{file.filename}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{file.filename}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer' onClick={() => setShowModal(true)}/>
                <Link to={`/files/details/${file._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/files/edit/${file._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/files/delete/${file._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
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