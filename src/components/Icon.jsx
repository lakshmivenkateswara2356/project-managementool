import Box from '@mui/material/Box';
import React from 'react';

import clikklecamp from '../Assets/clikklecampan.png'
import clikklehost from '../Assets/clikklehost.png';
import clikklesign from '../Assets/clikkleesign.png';
import clikklefavic from '../Assets/clikklefaviic.png';
import clikklelaunch from '../Assets/clikklelaunch.png';
import clikklepitch from '../Assets/clikklepitch.png';
import clikkleproj from '../Assets/clikkleproj.png';
import clikklerocket from '../Assets/clikklerocket.png';
import clikklemail from '../Assets/cliklemail.png';
import clikkleiconimage from './images/hr-text.png'






const Icon = props => {
    const { name, src, sx, ...rest } = props;

    const link = process.env.REACT_APP_CDN_SERVER + '/images/' + src;

    return (
        <>
        
            <Box
                component='img'
                bgcolor='#f7f9fc'
                src={src ? link : `${process.env.PUBLIC_URL}/images/icons/${name}`}
                alt='icon'
                sx={{ maxWidth: '100%', ...sx }}
                {...rest}
            />

<div className='Clikkleiconselign'>
            <div className='iconAlignmrnt'>
            <img src={clikklecamp} alt="img" className='clikkleicons'/>
            <img src={clikklefavic} alt="img" className='clikkleicons'/>
            <img src={clikklehost} alt="img" className='clikkleicons'/>
            <img src={clikklelaunch} alt="img" className='clikkleicons'/>
            <img src={clikklemail} alt="img" className='clikkleicons'/>
            <img src={clikklepitch} alt="img" className='clikkleicons'/>
            <img src={clikkleproj} alt="img" className='clikkleicons'/>
            <img src={clikklerocket} alt="img" className='clikkleicons'/>
            <img src={clikklesign} alt="img" className='clikkleicons'/>
            </div>
            </div>
        </>
    );
};

export default Icon;
