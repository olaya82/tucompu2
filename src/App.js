//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import MainBar from './components/MainBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import Home from './pages/Home';
import TiendaTodos from './pages/TiendaTodos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Motherboards from './pages/Motherboards';
import Memorias from './pages/Memorias';
import Procesadores from './pages/Procesadores';
import PlacasVideo from './pages/PlacasVideo';
import Alamacenamiento from './pages/Almacenamiento'
import Portatiles from './pages/Portatiles'
import Celulares from './pages/Celulares'

//import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div>
    
      {/*
      <MainBar />
      <ItemListContainer catalogo="Categoria de Productos"></ItemListContainer>
      <ItemDetailContainer catalogo="Producto"/>
      */}    
      <MainBar />
      
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/tiendatodos" element={<TiendaTodos />}></Route>
        <Route path="/motherboards" element={<Motherboards />}></Route>
        <Route path="/memorias" element={<Memorias />}></Route>
        <Route path="/procesadores" element={<Procesadores />}></Route>
        <Route path="/placasvideo" element={<PlacasVideo />}></Route>
        <Route path="/almacenamiento" element={<Alamacenamiento />}></Route>
        <Route path="/portatiles" element={<Portatiles />}></Route>
        <Route path="/celulares" element={<Celulares />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
    </div>
  );
}

export default App;
