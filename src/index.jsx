import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes';
import SchemeColor from './SchemeColor';
import Palette from './Palette';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((item) =>  <Palette 
            key={item.name} 
            imagePalette={item.image} 
            namePalette={item.name}
            descriptionPalette={item.description}
            author={item.attribution.name}
            link={item.attribution.url}
            index={palettes.indexOf(item)}
            />)}

    
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
