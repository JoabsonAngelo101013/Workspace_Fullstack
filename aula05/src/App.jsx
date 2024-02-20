import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicial from './pages/Inicial';
import AFaculdade from './pages/AFaculdade';
import DpoLgpd from './pages/DpoLgpd';
import Noticias from './pages/Noticias';
import Navbar from './pages/Navbar';
import VisualizarNoticia from './pages/VisualizarNoticia';
const App = () => {

  return (

    <div>
      <BrowserRouter>
        <h1>Uniesp Centro Univercitário</h1>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicial />} />
          <Route path='/A-faculdade' element={<AFaculdade />} />
          <Route path='/Dpo-Lgpd' element={<DpoLgpd />} />
          <Route path='/Noticias' element={<Noticias />} />
          <Route path='/Visualizar-noticia/:id' element={<VisualizarNoticia />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
