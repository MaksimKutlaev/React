import React from 'react';

const Box = ({children}) => {
    return (
        <div className="box" style={{border: 'solid black', padding: '10px', margin: '10px'}}>
            {children}
        </div>
    );
};

export default Box;