import React, { useContext } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleSwitch = () => {
    const { toggleLightMode, isLightMode } = useContext(ThemeContext);

    //toggle changes when button is clicked
    const handleToggle = () => {
        toggleLightMode();
    };

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={handleToggle}
                className={`flex items-center p-2 rounded-lg 
                ${isLightMode ? 'bg-blue-500' : 'bg-gray-300'}`}>

                {/* Render different icons based on the state */}

                {isLightMode ? (<MdLightMode className="text-white text-2xl" />) : (<MdDarkMode className="text-gray-700 text-2xl" />)}
            </button>
        </div>
    );
};

export default ToggleSwitch;