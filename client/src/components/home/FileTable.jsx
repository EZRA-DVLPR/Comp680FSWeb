import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const FileTable = ( {files} ) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>FileName</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Data</th>
                            {/*//each data member w/in db can be shown here using the outline as above*/}
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) => (
                            <tr key={file._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {file.filename}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {file.filedata}
                                </td>
                                {/*//each data member w/in db can be shown here using the outline as above

                                //now we connect to the other pages*/}
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
  )
}

export default FileTable