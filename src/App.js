import React from 'react';
import logo from './logo_reactive.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <label  Bienvenido a este mundo />
         <input placeholder="ingresa algun caracter"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://cautivaradio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          vamos a escuchar musica en cautivaradio!
        </a>
      </header>
    </div>
  );
}

export default App;
