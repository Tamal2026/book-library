import React from 'react';
import { FaHome } from 'react-icons/fa';

const LeftBar = () => {
    return (
        <div>
            <div className='flex '>
            <FaHome />
            <h1 className='font-bold'>Discover</h1>
            </div>
        </div>
    );
};

export default LeftBar;