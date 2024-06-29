import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import Inicio from './pages/inicio';
import Servicos from './pages/servicos';
import Perguntas from './pages/perguntas';
import Alistamento from './pages/alistamento';
import Acompanhar from './pages/acompanhar';
import Locais from './pages/locais';
import Dispensa from './pages/dispensa';
import Certificados from './pages/certificados';
import Autenticar from './pages/autenticar';
import Contato from './pages/contato';
import Diretoria from './pages/diretoria';
import Informacoes from './pages/informacoes';
import Editar from './pages/editar';
import Perfil from './pages/perfil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="h-screen md:overflow-hidden">
        <Header />
        <Root />
        <Footer style="black" />
      </div>

    </BrowserRouter>
  </React.StrictMode>
);


function Root() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/perguntas" element={<Perguntas />} />
      <Route path="/alistamento" element={<Alistamento />} />
      <Route path="/acompanhar" element={<Acompanhar />} />
      <Route path="/locais" element={<Locais />} />
      <Route path="/dispensa" element={<Dispensa />} />
      <Route path="/certificados" element={<Certificados />} />
      <Route path="/autenticar" element={<Autenticar />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/diretoria" element={<Diretoria />} />
      <Route path="/informacoes" element={<Informacoes />} />
      <Route path="/editar" element={<Editar />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}