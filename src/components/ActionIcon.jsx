import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import clikklepro from '../Assets/clikkleproj.png'
import './ActionIcon.css';
import Image from './Image';

export default function ActionIcon(props) {
    const { icon, src, href, title, imageSx, sx, ...rest } = props;

    return (
        <Tooltip title={title}>
            <IconButton {...rest} sx={sx} LinkComponent='a' href={href} target='_blank'>
                {icon ? (
                    icon
                ) : (
                    <Image className="projectIcon"
                        src={clikklepro}
                        sx={{
                            maxHeight: '75px',
                            ...imageSx,
                        }}
                        {...rest}
                    />
                )}
                 
                       
            </IconButton>
           
        </Tooltip>
    );
}
