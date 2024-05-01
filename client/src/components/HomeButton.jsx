import { React, useContext} from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { ThemeContext } from '../contexts/ThemeContext';

const HomeButton = ({destination = '/'}) => {
  const { isLightMode } = useContext(ThemeContext);

  return (
    <div className='flex'>
        <Link to={destination} className={isLightMode ? 'bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' : 'bg-sky-500 text-white px-4 py-1 rounded-lg w-fit'}>
            <AiFillHome className='text-2xl'/>
        </Link>
    </div>
  )
}

export default HomeButton