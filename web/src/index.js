import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // We'll create this file next

// 1. Find the "root" div from index.html
const rootElement = document.getElementById('root');

// 2. Tell React to create its "root" at that element
const root = ReactDOM.createRoot(rootElement);

// 3. Tell React to "render" (draw) your main <App> component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

