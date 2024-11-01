import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersonasProvider } from './context/PersonaContext';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <PersonasProvider>
    <App />
    </PersonasProvider>
  </React.StrictMode>
);

