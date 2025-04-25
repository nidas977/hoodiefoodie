import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');

if (!container) {
  console.error('Root element not found in document');
  throw new Error('Root element not found in document');
}

const root = createRoot(container);

console.log('Rendering the application...');
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
