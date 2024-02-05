import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const FileCard = ({files}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {files.map((item) => (
            <div key={item._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
                <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                    {item.filedata}
                </h2>
                <h4 className='my-2 text-gray-500'>{item._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl'/>
                    <h2 className='my-1'>{item.filename}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl'/>
                    <h2 className='my-1'>{item.filename}</h2>
                </div>
                <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                    <Link to={`/files/details/${item._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800' />
                    </Link>
                    <Link to={`/files/edit/${item._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/files/delete/${item._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                </div>

            </div>

        ))}
    </div>
  )
}

export default FileCard