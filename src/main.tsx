// Ensure window.fetch has both getter and setter to prevent "Cannot set property fetch of #<Window> which has only a getter"
try {
  const origFetch = window.fetch;
  let _fetch = typeof origFetch === 'function' ? origFetch.bind(window) : origFetch;
  Object.defineProperty(window, 'fetch', {
    get: () => _fetch,
    set: (v) => {
      _fetch = typeof v === 'function' ? v.bind(window) : v;
    },
    configurable: true,
    enumerable: true,
  });
} catch (_) {
  // Silent fallback
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
