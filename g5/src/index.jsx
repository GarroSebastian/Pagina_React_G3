import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Clientes/Login/LoginPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/G5/' element={ <LoginPage/> }/>
        //Poner aqui el nombre y la ruta del jsx que será para página login restaurante y página main de restaurante 
      
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

