//this is a page that will hold all of the sample images to be viewed at one time

//this is a temporary page and will not be added in the final product

import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

import { 
    BsBookmarkFill,
    BsBookmark,
    BsBookmarkXFill,
    BsBookmarks,
    BsBookmarksFill,
    BsFileEarmarkMusic,
    BsQrCode,
    } from 'react-icons/bs';

import { 
        MdAttachFile,
        MdDarkMode,
        MdDownload,
        MdDownloadDone,
        MdGridView,
        MdInsertLink, //used to copy link to file
        MdLightMode,
        MdList,
        MdLogin, //also logout
        MdMiscellaneousServices, //settings
        } from 'react-icons/md';    

//these are all fills. for outline do AiOutline_
import {
    AiFillDropboxSquare, //circle available too
    AiFillLike,
    AiFillDislike,
    AiFillCustomerService, //headphones
    AiFillControl, //control sliders for audio
    AiFillFileImage, //image button
    AiFillFacebook,
    AiFillHeart,
    AiFillHome,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillRedditSquare, //also available in square
    AiFillTag,
    AiFillTags,
    AiFillTwitterSquare, //also available in square
    } from 'react-icons/ai'


//these are all fills. but also available in solid
import {
    BiError,
    BiGridAlt,
    BiHistory,
    BiImage,
    BiPaperPlane,
    BiPause,
    BiSave
    } from 'react-icons/bi'

const Samples = () => {
    //add logic here for react if needed

    //page that gets returned to user
    return (
        <div className='p-4'>
            <BackButton/>
            <Spinner />

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
                            <td>BookmarkFill</td>
                            <td><BsBookmarkFill /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bs</td>
                            <td>Bookmark</td>
                            <td><BsBookmark /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bs</td>
                            <td>BookmarkXFill</td>
                            <td><BsBookmarkXFill /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bs</td>
                            <td>Bookmarks</td>
                            <td><BsBookmarks /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bs</td>
                            <td>BookmarksFill</td>
                            <td><BsBookmarksFill /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>PaperPlane</td>
                            <td><BiPaperPlane /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bs</td>
                            <td>QrCode</td>
                            <td><BsQrCode /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Md</td>
                            <td>AttachFile</td>
                            <td><MdAttachFile /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Md</td>
                            <td>LightMode</td>
                            <td><MdLightMode /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Md</td>
                            <td>DarkMode</td>
                            <td><MdDarkMode /></td>
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
                            <td>GridView</td>
                            <td><MdGridView /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Md</td>
                            <td>List</td>
                            <td><MdList /></td>
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

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillHome</td>
                            <td><AiFillHome /></td>
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

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillTag</td>
                            <td><AiFillTag /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillTags</td>
                            <td><AiFillTags /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>History</td>
                            <td><BiHistory /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillLike</td>
                            <td><AiFillLike /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillDislike</td>
                            <td><AiFillDislike /></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Samples