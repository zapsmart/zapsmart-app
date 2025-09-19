import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Remova ou comente o código que registra o Service Worker
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js').then(
//       (registration) => {
//         console.log('Service Worker registered: ', registration);
//       },
//       (err) => {
//         console.log('Service Worker registration failed: ', err);
//       }
//     );
//   });
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
