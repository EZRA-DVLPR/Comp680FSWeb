import React from 'react'

//these are all fills. for outline do AiOutline_
import {
  AiFillDropboxSquare, //circle available too
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillRedditSquare, //also available in square
  AiFillTwitterSquare //also available in square
  } from 'react-icons/ai';

import { BiPaperPlane } from 'react-icons/bi'

const Socials = () => {
  //pre-fill email contents
  const recipient = '';
  const subject = encodeURIComponent('Check out this cool file!');
  const body = encodeURIComponent(`Check out this cool file: ${window.location.href}.\n\nThis file was found from FSW, a free file sharing website.`);
  const mailToLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  //function to send email
  const sendEmail = () => {
    window.location.href = mailToLink;
  };
  
  return (
    <div className={('flex justify-left text-5xl text-gray-500')}>
      <button>
        <AiFillDropboxSquare />
      </button>

      <button>
        <AiFillFacebook />
      </button>

      <button>
        <AiFillInstagram />  
      </button>
      
      <button>
        <AiFillLinkedin />  
      </button>
      
      <button>
        <AiFillRedditSquare />  
      </button>
      
      <button>
        <AiFillTwitterSquare />  
      </button>

      {/* Share the file via email button */}
      <button onClick={sendEmail}>
        <BiPaperPlane />
      </button>
    </div>
  )
}

export default Socials