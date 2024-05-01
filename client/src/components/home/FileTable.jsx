import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { ThemeContext } from '../../contexts/ThemeContext';

const FileTable = ( {files} ) => {
    //get lightmode theme from context
    const { isLightMode } = useContext(ThemeContext);

    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className={isLightMode == true ? 'text-gray-800 text-xl my-8 border border-slate-700 rounded-md' :  'text-gray-200 text-xl my-8 border border-slate-300 rounded-md'}>No</th>
                    <th className={isLightMode == true ? 'text-gray-800 text-xl my-8 border border-slate-700 rounded-md' :  'text-gray-200 text-xl my-8 border border-slate-300 rounded-md'}>FileName</th>
                    <th className={isLightMode == true ? 'text-gray-800 text-xl my-8 border border-slate-700 rounded-md max-md:hidden' : 'text-gray-200 text-xl my-8 border border-slate-300 rounded-md max-md:hidden'}>File Type</th>
                    {/* each data member w/in db can be shown here using the outline as above */}
                    <th className={isLightMode == true ? 'text-gray-800 text-xl my-8 border border-slate-700 rounded-md' :  'text-gray-200 text-xl my-8 border border-slate-300 rounded-md'}>Operations</th>
                </tr>
            </thead>
            <tbody>
                {files.map((file, index) => (
                    <tr key={file._id} className='h-8'>
                        <td className={isLightMode == true ? 'text-gray-800 border border-slate-700 rounded-md text-center' : 'text-gray-200 border border-slate-300 rounded-md text-center'}>
                            {index + 1}
                        </td>
                        <td className={isLightMode == true ? 'text-gray-800 border border-slate-700 rounded-md text-center' : 'text-gray-200 border border-slate-300 rounded-md text-center'}>
                            {file.filename}
                        </td>
                        <td className={isLightMode == true ? 'text-gray-800 border border-slate-700 rounded-md text-center max-md:hidden' : 'text-gray-200 border border-slate-300 rounded-md text-center max-md:hidden'}>
                            {file.filetype}
                        </td>
                        {/* now we connect to the other pages */}
                        <td className={isLightMode == true ? 'text-gray-800 border border-slate-700 rounded-md text-center' : 'text-gray-200 border border-slate-300 rounded-md text-center'}>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/files/details/${file._id}`}>
                                    <BsInfoCircle className={isLightMode == true ? 'text-2xl text-green-700' : 'text-2xl text-green-400' }/>
                                </Link>
                                <Link to={`/files/edit/${file._id}`}>
                                    <AiOutlineEdit className={isLightMode == true ? 'text-2xl text-yellow-600' : 'text-2xl text-yellow-400' } />
                                </Link>
                                <Link to={`/files/delete/${file._id}`}>
                                    <MdOutlineDelete className={isLightMode == true ? 'text-2xl text-red-700' : 'text-2xl text-red-400' } />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default FileTable