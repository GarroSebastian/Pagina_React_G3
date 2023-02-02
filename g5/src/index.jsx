import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './Clientes/Login/LoginPage';
import MainPage from './Clientes/Main/MainPage';
import LoginPageR from './Restaurantes/Login/LoginPage';
import ListaPedidos from './Restaurantes/ListaPedidos';
import EntregaPedido from './Restaurantes/EntregaPedido';
import PrincipalRestaurante from './Restaurantes/PrincipalRestaurante';
import ListaPlatosRegistrados from './Restaurantes/ListaPlatosRegistrados';
import Plato from './Clientes/Main/Components/Plato';
import Carrito from './Clientes/Main/Components/Carrito';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage/> }/>
        <Route path='g5/main' element={ <MainPage/> }/>
        <Route path='g5/R' element={ <LoginPageR/> }/>
        <Route path='/principal' element={<PrincipalRestaurante/>}/>
        <Route path='/pedidos' element={<ListaPedidos/>}/>
        <Route path='/platos' element={<ListaPlatosRegistrados/>}/>
        <Route path='/estado' element={<ListaPedidos/>}/>
        <Route path='/entrega' element={<EntregaPedido/>}/>
        <Route path='/platos1' element={ <Plato/>}/>
        <Route path='/carrito' element={ <Carrito/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


