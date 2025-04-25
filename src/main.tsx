
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Find the root element
const container = document.getElementById('root');

if (!container) {
  console.error('Root element not found in document');
  throw new Error('Root element not found in document');
}

// Create a root
const root = createRoot(container);

// Render app
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
