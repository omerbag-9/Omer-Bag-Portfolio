import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/big-shoulders/800.css';
import '@fontsource-variable/public-sans/wght.css';
import './styles.css';
import App from './App';

document.documentElement.classList.remove('no-js');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
