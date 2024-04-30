//this is a page that will hold all of the sample images to be viewed at one time

//this is a temporary page and will not be added in the final product

import Spinner from '../components/Spinner';
import HomeButton from '../components/HomeButton';
import ColorThemeButton from '../components/ColorTheme';
import Socials from '../components/Socials';

import {
    MdDownload,
    MdDownloadDone,
    MdLogin, //also logout
    MdMiscellaneousServices //settings
    } from 'react-icons/md';    

//these are all fills. but also available in solid
import {
    BiError
    } from 'react-icons/bi'

const Samples = () => {
    //add logic here for react if needed

    //page that gets returned to user
    return (
        <div className='p-4'>
            <HomeButton/>
            <Spinner />
            <ColorThemeButton />
            <Socials />

            <div className='flex justify-between items-center'>
                <table className='w-full'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className = "p-3 text-sm font-semibold tracking-wide text-left">pkg import</th>
                            <th className = "p-3 text-sm font-semibold tracking-wide text-left">name of imported icon</th>
                            <th className = "p-3 text-sm font-semibold tracking-wide text-left">sample of icon</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className='bg-gray-100'>
                            <td>Md</td>
                            <td>Download</td>
                            <td><MdDownload /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Md</td>
                            <td>DownloadDone</td>
                            <td><MdDownloadDone /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>Error</td>
                            <td><BiError /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Md</td>
                            <td>Login</td>
                            <td><MdLogin /></td>
                        </tr>
                        
                        <tr className='bg-white'>
                            <td>Md</td>
                            <td>MiscellaneousServices</td>
                            <td><MdMiscellaneousServices /></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Samples