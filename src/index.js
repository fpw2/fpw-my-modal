import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalApp } from './components/ModalApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalApp buttonText="modal"  message="Employee created" />
  </React.StrictMode>
);
