import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import SchemeColor from '../SchemeColor';
import { palettes } from '../palettes';

const Palette = ({ imagePalette, namePalette, index, descriptionPalette, author, link, directionPalette }) => {
    
    const paletteClass = directionPalette === "vertical" ? "palette-scheme palette-scheme--vertical" : "palette-scheme palette-scheme--horizontal";
    
    return (
        <div className="palette">
            <div className={paletteClass}>
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