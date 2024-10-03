import React from 'react';
import Itoutheader from './components/Ithoutheader';

const StandaloneLayout = ({ children }) => {
    return (
        <div>
            <Itoutheader>
           <div>
           {children}
          
           </div>



           
           </Itoutheader>
        </div>
    );
};

export default StandaloneLayout;
