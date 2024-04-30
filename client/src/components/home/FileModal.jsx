import { AiOutlineClose } from 'react-icons/ai';
import { FaFile } from "react-icons/fa";

const FileModal = ({file, onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        <div onClick={(event) => event.stopPropagation()} className='max-w-full bg-white rounded-xl p-4 flex flex-col relative w-80'>
            <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose}/>
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg mb-5 text-4xl'>
                {file.filetype}
            </h2>
            <div className='flex justify-start items-center gap-x-2 mb-5 text-4xl'>
                <FaFile className='text-red-300 text-2xl' />
                <h2 className='my-1'>{file.filename}</h2>
            </div>
        </div>
    </div>
    
  )
}

export default FileModal