import React from 'react';
import ReactDOM from 'react-dom/client'; 

import './index.css'; 


import QuickRecovery from './components/QuickRecovery'; 

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    
    <React.StrictMode>
      <QuickRecovery /> 
    </React.StrictMode>
  );
} else {
  
    console.error("Elemento com id 'root' não encontrado no HTML.");
}