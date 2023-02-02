import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './Clientes/Login/LoginPage';
import MainPage from './Clientes/Main/MainPage';
import LoginPageR from './Restaurantes/Login/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage/> }/>
        <Route path='g5/main' element={ <MainPage/> }/>
        <Route path='g5/R' element={ <LoginPageR/> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


