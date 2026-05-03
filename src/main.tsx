import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

/**
 mkdir -p public/themes
 cp -r node_modules/primereact/resources/themes/lara-light-cyan public/themes/
 cp -r node_modules/primereact/resources/themes/lara-dark-cyan public/themes/
 */

// https://primereact.org/installation/
// https://primereact.org/icons/
// https://primereact.org/theming/#primeflex
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
