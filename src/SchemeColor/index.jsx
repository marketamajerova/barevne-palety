import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const SchemeColor = ({colorCode}) => {
    return (
        <div className="scheme-color" style={{ backgroundColor: colorCode }}> {colorCode} </div>
    )
}

export default SchemeColor;