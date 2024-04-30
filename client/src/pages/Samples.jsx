//this is a page that will hold all of the sample images to be viewed at one time

//this is a temporary page and will not be added in the final product

import Spinner from '../components/Spinner';
import HomeButton from '../components/HomeButton';
import ColorThemeButton from '../components/ColorTheme';

import {
    BsQrCode
    } from 'react-icons/bs';

import {
    MdDownload,
    MdDownloadDone,
    MdLogin, //also logout
    MdMiscellaneousServices //settings
    } from 'react-icons/md';    

//these are all fills. for outline do AiOutline_
import {
    AiFillDropboxSquare, //circle available too
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillRedditSquare, //also available in square
    AiFillTwitterSquare //also available in square
    } from 'react-icons/ai'


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

                        <tr className='bg-white'>
                            <td>Bs</td>
                            <td>QrCode</td>
                            <td><BsQrCode /></td>
                        </tr>

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

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillDropboxSquare</td>
                            <td><AiFillDropboxSquare /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillFacebook</td>
                            <td><AiFillFacebook /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillInstagram</td>
                            <td><AiFillInstagram /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillLinkedin</td>
                            <td><AiFillLinkedin /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillRedditSquare</td>
                            <td><AiFillRedditSquare /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillTwitterSquare</td>
                            <td><AiFillTwitterSquare /></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Samples