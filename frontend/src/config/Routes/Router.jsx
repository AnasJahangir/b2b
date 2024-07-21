import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import Cadastro from "../../pages/Cadastro.jsx";
import Users from "../../pages/Users.jsx";
import Fotos from "../../pages/Fotos.jsx";
import Moda2024 from "../../pages/Moda2024.jsx";
import Hoteloficial from "../../pages/Hoteloficial.jsx";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/moda2024" element={<Moda2024 />} />
        <Route path="/hoteloficial" element={<Hoteloficial />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
