import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Alistamento from './pages/alistamento';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);


function Root() {
  return (
    <Routes>
      <Route path="/" element={<Alistamento />} />
    </Routes>
  );
}