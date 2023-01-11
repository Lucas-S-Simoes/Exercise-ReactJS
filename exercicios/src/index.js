import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/Home/Home';
import Lampada from './componentes/Lampada/Lampada';
import Semaforo from './componentes/Semaforo/Semaforo';
import Semaforodois from './componentes/SemaforoDois/SemaforoDois';
import ApiCep from './componentes/ApiCep/ApiCep';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/lampada' element={<Lampada />}/>
        <Route path='/semaforo' element={<Semaforo />}/>
        <Route path='/semaforodois' element={<Semaforodois />}/>
        <Route path='/apicep' element={<ApiCep />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

