import React, { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ToggleSwitch = () => {
    //define variable and function to use react states
    const [isLightMode, setLightMode] = useState(() => {
        //obtain value from localStorage and convert it to a boolean
        const savedState = localStorage.getItem('colorTheme');
        return savedState === 'true';
    });

    //toggle changes when button is clicked
    const handleToggle = () => {
        //change to the opposite theme (light -> dark -> light...)
        const newColortheme = !isLightMode;
        setLightMode(newColortheme);

        //save as boolean to local storage
        localStorage.setItem('colorTheme', newColortheme.toString());
    };

    //get value from local storage if it exists
    useEffect(() => {
        const storedColortheme = localStorage.getItem('colorTheme');
        if (storedColortheme !== null) {
            setLightMode(storedColortheme === 'true');
        }
    }, []);

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={handleToggle}
                className={`flex items-center p-2 rounded-lg ${
                    isLightMode ? 'bg-blue-500' : 'bg-gray-300'
                }`}>

                {/* Render different icons based on the state */}

                {isLightMode ? (<MdLightMode className="text-white text-2xl" />) : (<MdDarkMode className="text-gray-700 text-2xl" />)}
            </button>
        </div>
    );
};

export default ToggleSwitch;
