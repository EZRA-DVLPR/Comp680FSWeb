//this is a page that will hold all of the sample images to be viewed at one time

//this is a temporary page and will not be added in the final product

import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

import { 
    BsArrowDownCircle, 
    BsAwardFill, //may also be filled
    BsBookmarkFill,
    BsBookmarkXFill,
    BsBookmarks, //may also be filled
    BsBrightnessHigh, //used for images, also may be filled
    BsFileEarmarkMusic,
    BsFillHandThumbsUpFill,
    BsFillMoonFill, //also with stars
    BsFire,
    BsQrCode,
    BsTranslate
    } from 'react-icons/bs';

import { 
        MdAddToDrive,
        MdAttachFile,
        MdCloudDownload,
        MdCloudDone,
        MdCloud,
        MdCloudUpload,
        MdDarkMode,
        MdDownload,
        MdDownloadDone,
        MdGridView,
        MdInsertLink, //used to copy link to file
        MdLightMode,
        MdList,
        MdLogin, //also logout
        MdMiscellaneousServices, //settings
        MdOutlineViewList,
        } from 'react-icons/md';    

//these are all fills. for outline do AiOutline_
import {
    AiFillBackward, //rewind
    AiFillAudio, //mic import
    AiFillDropboxSquare, //circle available too
    AiFillLike,
    AiFillDislike,
    AiFillCustomerService, //headphones
    AiFillControl, //control sliders for audio
    AiFillFileImage, //image button
    AiFillBell,
    AiFillFacebook,
    AiFillFileExcel,
    AiFillFilePdf,
    AiFillFilePpt,
    AiFillFileUnknown,
    AiFillFileWord,
    AiFillHeart,
    AiFillGoogleSquare, //also available in circle
    AiFillHome,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillPlayCircle, //play video button (also available in square)
    AiFillQuestionCircle,
    AiFillRedditCircle, //also available in square
    AiFillTag,
    AiFillTags,
    AiFillTwitterCircle, //also available in square
    AiFillStar,
    AiFillTrophy, //AiFillTrophy
    AiFillFire,
    AiOutlineQrcode
    } from 'react-icons/ai'


//these are all fills. but also available in solid
import {
    BiBarChart,
    BiCertification,
    BiCode,
    BiCloudDownload, //upload too
    BiDownload,
    BiError,
    BiFilterAlt,
    BiGridAlt,
    BiHistory,
    BiImage,
    BiLogoFacebookCircle, //also square
    BiPaperPlane,
    BiPause,
    BiSave,
    BiSlider, //also alt slider
    BiSort, //also: normal, AZ, alt2, SortDown, SortUp, sortZA
    BiStar
    } from 'react-icons/bi'

import {
        PiCopy,
        PiDotsThreeOutlineVerticalFill,
        PiDropboxLogoFill,
        PiEnvelopeLight,
        PiSkull, //error downloading/retrieving file
        PiSpiralFill //loading icon
        } from 'react-icons/pi'
    
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
                            <td>ArrowDownCircle</td>
                            <td><BsArrowDownCircle /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bs</td>
                            <td>AwardFill</td>
                            <td><BsAwardFill /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bs</td>
                            <td>BookmarkFill</td>
                            <td><BsBookmarkFill /></td>
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

                        <tr className='bg-gray-100'>
                            <td>Bs</td>
                            <td>BrightnessHigh</td>
                            <td><BsBrightnessHigh /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bs</td>
                            <td>FileEarmarkMusic</td>
                            <td><BsFileEarmarkMusic /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bs</td>
                            <td>FillHandThumbsUpFill</td>
                            <td><BsFillHandThumbsUpFill /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bs</td>
                            <td>FillMoonFill</td>
                            <td><BsFillMoonFill /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bs</td>
                            <td>Fire</td>
                            <td><BsFire /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bs</td>
                            <td>QrCode</td>
                            <td><BsQrCode /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bs</td>
                            <td>Translate</td>
                            <td><BsTranslate /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Md</td>
                            <td>AddToDrive</td>
                            <td><MdAddToDrive /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Md</td>
                            <td>AttachFile</td>
                            <td><MdAttachFile /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Md</td>
                            <td>CloudDownload</td>
                            <td><MdCloudDownload /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Md</td>
                            <td>CloudDone</td>
                            <td><MdCloudDone /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Md</td>
                            <td>Cloud</td>
                            <td><MdCloud /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Md</td>
                            <td>MdCloudUpload</td>
                            <td><MdCloudUpload /></td>
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
                            <td>Md</td>
                            <td>GridView</td>
                            <td><MdGridView /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Md</td>
                            <td>InsertLink</td>
                            <td><MdInsertLink /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Md</td>
                            <td>LightMode</td>
                            <td><MdLightMode /></td>
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
                            <td>Md</td>
                            <td>OutlineViewList</td>
                            <td><MdOutlineViewList /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillBackward</td>
                            <td><AiFillBackward /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillAudio</td>
                            <td><AiFillAudio /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillDropboxSquare</td>
                            <td><AiFillDropboxSquare /></td>
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

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillCustomerService</td>
                            <td><AiFillCustomerService /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillControl</td>
                            <td><AiFillControl /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillFileImage</td>
                            <td><AiFillFileImage /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillBell</td>
                            <td><AiFillBell /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillFacebook</td>
                            <td><AiFillFacebook /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillFileExcel</td>
                            <td><AiFillFileExcel /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillFilePdf</td>
                            <td><AiFillFilePdf /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillFilePpt</td>
                            <td><AiFillFilePpt /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillFileUnknown</td>
                            <td><AiFillFileUnknown /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillFileWord</td>
                            <td><AiFillFileWord /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillHeart</td>
                            <td><AiFillHeart /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillGoogleSquare</td>
                            <td><AiFillGoogleSquare /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillHome</td>
                            <td><AiFillHome /></td>
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
                            <td>FillPlayCircle</td>
                            <td><AiFillPlayCircle /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillQuestionCircle</td>
                            <td><AiFillQuestionCircle /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillRedditCircle</td>
                            <td><AiFillRedditCircle /></td>
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

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillTwitterCircle</td>
                            <td><AiFillTwitterCircle /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillStar</td>
                            <td><AiFillStar /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>FillTrophy</td>
                            <td><AiFillTrophy /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Ai</td>
                            <td>FillFire</td>
                            <td><AiFillFire /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Ai</td>
                            <td>OutlineQrcode</td>
                            <td><AiOutlineQrcode /></td>
                        </tr>
                        
                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>BarChart</td>
                            <td><BiBarChart /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>Certification</td>
                            <td><BiCertification /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>Code</td>
                            <td><BiCode /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>CloudDownload</td>
                            <td><BiCloudDownload /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>Download</td>
                            <td><BiDownload /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>Error</td>
                            <td><BiError /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>FilterAlt</td>
                            <td><BiFilterAlt /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>GridAlt</td>
                            <td><BiGridAlt /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>History</td>
                            <td><BiHistory /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>Image</td>
                            <td><BiImage /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>LogoFacebookCircle</td>
                            <td><BiLogoFacebookCircle /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>PaperPlane</td>
                            <td><BiPaperPlane /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>Pause</td>
                            <td><BiPause /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>Save</td>
                            <td><BiSave /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>Slider</td>
                            <td><BiSlider /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Bi</td>
                            <td>Sort</td>
                            <td><BiSort /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Bi</td>
                            <td>Star</td>
                            <td><BiStar /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Pi</td>
                            <td>Copy</td>
                            <td><PiCopy /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Pi</td>
                            <td>DotsThreeOutlineVerticalFill</td>
                            <td><PiDotsThreeOutlineVerticalFill /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Pi</td>
                            <td>DropboxLogoFill</td>
                            <td><PiDropboxLogoFill /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Pi</td>
                            <td>EnvelopeLight</td>
                            <td><PiEnvelopeLight /></td>
                        </tr>

                        <tr className='bg-gray-100'>
                            <td>Pi</td>
                            <td>Skull</td>
                            <td><PiSkull /></td>
                        </tr>

                        <tr className='bg-white'>
                            <td>Pi</td>
                            <td>SpiralFill</td>
                            <td><PiSpiralFill /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Samples