import React from 'react';
import { createRoot } from 'react-dom/client';

const SchemeColor = ({color}) => {
    return (
        <div className="scheme-color" style={{ backgroundColor: {color} }}>
            {color}
        </div>
    )
}

export default SchemeColor;