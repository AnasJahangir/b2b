import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import Cadastro from "../../pages/Cadastro.jsx";
import Users from "../../pages/Users.jsx";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
