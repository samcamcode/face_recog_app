import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='m4 mt0'>
            <Tilty className='Tilt br2 shadow-2' options={{ max:25 }} style={{ height: 150, width: 150 }}>
                <div className='tilt-inner pa3'>
                    <img style={{paddingTop:'5px'}} alt='logo' src={brain} />
                </div>
            </Tilty>
        </div>
    );
}

export default Logo;

