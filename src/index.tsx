import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
console.log(root)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
