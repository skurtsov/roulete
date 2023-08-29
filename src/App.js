import logo from './logo.svg';
import './scss/main.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Line from './components/line.jsx';
import ThreeSlots from './components/threeslots';
import Main from './components/Main_my.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
    return (
      <BrowserRouter>
      <Routes>   
          <Route index element={<Main/>} />
          <Route path="/slots/" element={<ThreeSlots/>} />
           { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
          <Route path="*" element={<div>404</div> } />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
