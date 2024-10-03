import React from 'react';
import Header from './components/Header'; // Ensure this path is correct based on your project structure

const LayoutWithHeader = ({ children }) => {
    return (
        <>
            <Header >
            <div>
                {children}
            </div>

            </Header>
        </>
    );
};

export default LayoutWithHeader;
