import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import SchemeColor from '../SchemeColor';
import { palettes } from '../palettes';

const Palette = ({ imagePalette, namePalette, index, descriptionPalette, author, link }) => {
    return (
        <div className="palette">
            <div className="palette-scheme palette-scheme--vertical">
                <img className="scheme-image" src={imagePalette} alt={namePalette} />
                <div className="scheme-colors">
                    {palettes[index].colors.map((color) =>
                        <SchemeColor
                            key={color}
                            colorCode={color}
                        />
                    )}
                </div>
            </div>
            <div className="palette-info">
                <h2>{namePalette}</h2>
                <p>{descriptionPalette}</p>

                <p>Photo by <a href={link} target="_blank">{author}</a>.</p>
            </div>
        </div>
    )
}

export default Palette;