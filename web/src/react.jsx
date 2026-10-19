import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeSite } from './main.js';

function App() {
  useEffect(() => { initializeSite(); }, []);
  return <>
    <div id="top-bar-container"></div>
    <div id="header-container" className="sticky top-0 z-50"></div>
    <main id="app" className="flex-grow">
      <div id="loader-container"></div>
      <div id="router-view" className="page-fade-in"></div>
    </main>
    <div id="footer-container"></div>
  </>;
}

createRoot(document.getElementById('app-root')).render(<App />);
