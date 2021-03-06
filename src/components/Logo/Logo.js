import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0 center'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                 <div className="Tilt-inner">
                 <img className='grow imgg' src={brain} alt="logo"/>
                 </div>
            </Tilt>
        </div>
    );
}

export default Logo