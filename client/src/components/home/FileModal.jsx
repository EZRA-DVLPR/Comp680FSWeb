import { AiOutlineClose } from 'react-icons/ai';
import { FaFile } from "react-icons/fa";
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

const FileModal = ({file, onClose}) => {
  const { isLightMode } = useContext(ThemeContext);
  
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        <div onClick={(event) => event.stopPropagation()} 
            className={isLightMode ? 'max-w-full bg-gray-100 rounded-xl p-4 flex flex-col relative w-80' : 'max-w-full bg-gray-700 rounded-xl p-4 flex flex-col relative w-80'}>
            <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose}/>
            <h2 className='w-fit px-4 py-1 bg-purple-300 rounded-lg mb-5 text-4xl'>
                {file.filetype}
            </h2>
            <div className='flex justify-start items-center gap-x-2 mb-5 text-4xl'>
                <FaFile className='text-amber-400 text-2xl' />
                <h2 className='my-1'>{file.filename}</h2>
            </div>
        </div>
    </div>
    
  )
}

export default FileModal